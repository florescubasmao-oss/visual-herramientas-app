(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;

  const loginView = document.getElementById('loginView');
  const appView = document.getElementById('appView');
  const loginForm = document.getElementById('loginForm');
  const correoInput = document.getElementById('correo');
  const claveInput = document.getElementById('clave');
  const loginButton = document.getElementById('loginButton');
  const loginMessage = document.getElementById('loginMessage');
  const togglePassword = document.getElementById('togglePassword');
  const themeToggle = document.getElementById('themeToggle');
  const logoutButton = document.getElementById('logoutButton');
  const apiLink = document.getElementById('apiLink');
  const appVersion = document.getElementById('appVersion');
  const userName = document.getElementById('userName');
  const userProfile = document.getElementById('userProfile');
  const welcomeText = document.getElementById('welcomeText');
  const toast = document.getElementById('toast');

  let auth = null;

  iniciar();

  async function iniciar() {
    configurarTema();

    apiLink.href = config.API_URL;
    appVersion.textContent = `Versión ${config.VERSION}`;

    loginForm.addEventListener('submit', manejarLogin);
    togglePassword.addEventListener('click', alternarClaveVisible);
    themeToggle.addEventListener('click', alternarTema);
    logoutButton.addEventListener('click', cerrarSesion);

    document.querySelectorAll('[data-module]').forEach((button) => {
      button.addEventListener('click', () => {
        const moduleName = button.dataset.module.replaceAll('_', ' ');
        mostrarToast(`${moduleName}: módulo pendiente de implementación`);
      });
    });

    const sesionGuardada = leerSesionGuardada();

    if (!sesionGuardada) {
      mostrarLogin();
      return;
    }

    auth = sesionGuardada;

    const sesionValidada = await validarSesionRemota();

    if (!sesionValidada) {
      limpiarSesion();
      mostrarLogin();
      return;
    }

    mostrarAplicacion();
  }

  async function manejarLogin(event) {
    event.preventDefault();
    loginMessage.textContent = '';

    const correo = correoInput.value.trim().toLowerCase();
    const clave = claveInput.value;

    if (!correo || !clave) {
      loginMessage.textContent = 'Ingresa correo y contraseña.';
      return;
    }

    cambiarEstadoLogin(true);

    try {
      const respuesta = await solicitarApi({
        accion: 'login',
        correo,
        clave
      });

      if (!respuesta.correcto) {
        loginMessage.textContent =
          respuesta.mensaje || 'No se pudo iniciar sesión.';
        return;
      }

      guardarSesion(respuesta);
      claveInput.value = '';
      mostrarAplicacion();
      mostrarToast('Inicio de sesión correcto');

    } catch (error) {
      console.error(error);
      loginMessage.textContent =
        'No se pudo conectar con la API. Inténtalo nuevamente.';
    } finally {
      cambiarEstadoLogin(false);
    }
  }

  function guardarSesion(respuesta) {
    const segundos = Number(respuesta.expiraEnSegundos || 21600);

    auth = {
      token: respuesta.token,
      usuario: respuesta.usuario,
      expiraEn: Date.now() + segundos * 1000
    };

    localStorage.setItem(
      config.STORAGE_KEY,
      JSON.stringify(auth)
    );
  }

  async function validarSesionRemota() {
    try {
      const respuesta = await solicitarApi({
        accion: 'validar_sesion',
        token: auth.token
      });

      if (!respuesta.correcto || !respuesta.usuario) {
        return false;
      }

      auth.usuario = respuesta.usuario;

      const segundos = Number(respuesta.expiraEnSegundos || 21600);
      auth.expiraEn = Date.now() + segundos * 1000;

      localStorage.setItem(
        config.STORAGE_KEY,
        JSON.stringify(auth)
      );

      return true;

    } catch (error) {
      console.warn('No se pudo validar la sesión remota.', error);
      return false;
    }
  }

  function mostrarLogin() {
    appView.hidden = true;
    loginView.hidden = false;
    loginMessage.textContent = '';
    correoInput.focus();
  }

  function mostrarAplicacion() {
    if (!auth || !auth.usuario) {
      mostrarLogin();
      return;
    }

    const usuario = auth.usuario;

    userName.textContent =
      usuario.nombre || usuario.correo || 'Usuario';

    userProfile.textContent =
      formatearTexto(usuario.perfil || '');

    welcomeText.textContent =
      `Sesión activa como ${formatearTexto(usuario.perfil || '')}. ` +
      `Sede base: ${formatearTexto(usuario.sedeBase || 'No definida')}.`;

    aplicarPermisosModulos(usuario.permisos || []);

    loginView.hidden = true;
    appView.hidden = false;
  }

  function aplicarPermisosModulos(permisos) {
    const permisosPorModulo = new Map(
      permisos.map((permiso) => [
        String(permiso.modulo || '').trim().toUpperCase(),
        permiso
      ])
    );

    document.querySelectorAll('[data-module]').forEach((button) => {
      const modulo = String(button.dataset.module || '')
        .trim()
        .toUpperCase();

      const permiso = permisosPorModulo.get(modulo);
      const puedeVer = Boolean(permiso && permiso.ver === true);

      button.hidden = !puedeVer;

      if (!puedeVer) return;

      button.dataset.puedeRegistrar = String(Boolean(permiso.registrar));
      button.dataset.puedeEditar = String(Boolean(permiso.editar));
      button.dataset.puedeAprobar = String(Boolean(permiso.aprobar));
      button.dataset.puedeAnular = String(Boolean(permiso.anular));
      button.dataset.puedeDescargar = String(Boolean(permiso.descargar));
      button.dataset.puedeAdministrar = String(Boolean(permiso.administrar));
      button.dataset.alcanceSede = permiso.alcanceSede || '';
      button.dataset.sedeBase = permiso.sedeBase || '';
    });

    actualizarSeccionesModulos();
  }

  function actualizarSeccionesModulos() {
    document.querySelectorAll('[data-module-section]').forEach((section) => {
      const botones = Array.from(
        section.querySelectorAll('[data-module]')
      );

      const tieneVisibles = botones.some((button) => !button.hidden);
      section.hidden = !tieneVisibles;
    });
  }

  async function cerrarSesion() {
    const token = auth && auth.token ? auth.token : '';

    limpiarSesion();
    mostrarLogin();

    if (!token) return;

    try {
      await solicitarApi({
        accion: 'cerrar_sesion',
        token
      });
    } catch (error) {
      console.warn('No se pudo notificar el cierre a la API.', error);
    }
  }

  function limpiarSesion() {
    localStorage.removeItem(config.STORAGE_KEY);
    auth = null;
  }

  async function solicitarApi(payload) {
    const response = await fetch(config.API_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Respuesta HTTP ${response.status}`);
    }

    return response.json();
  }

  function leerSesionGuardada() {
    try {
      const contenido = localStorage.getItem(config.STORAGE_KEY);

      if (!contenido) return null;

      const sesion = JSON.parse(contenido);

      if (
        !sesion ||
        !sesion.token ||
        !sesion.usuario ||
        !sesion.expiraEn ||
        Date.now() >= Number(sesion.expiraEn)
      ) {
        localStorage.removeItem(config.STORAGE_KEY);
        return null;
      }

      return sesion;

    } catch (error) {
      localStorage.removeItem(config.STORAGE_KEY);
      return null;
    }
  }

  function alternarClaveVisible() {
    const estaVisible = claveInput.type === 'text';

    claveInput.type = estaVisible ? 'password' : 'text';
    togglePassword.textContent = estaVisible ? 'Ver' : 'Ocultar';
  }

  function cambiarEstadoLogin(cargando) {
    loginButton.disabled = cargando;
    loginButton.textContent = cargando ? 'Ingresando…' : 'Ingresar';
  }

  function configurarTema() {
    if (localStorage.getItem('vh-theme') === 'dark') {
      root.dataset.theme = 'dark';
      themeToggle.textContent = '☀';
    }
  }

  function alternarTema() {
    const estaOscuro = root.dataset.theme === 'dark';

    if (estaOscuro) {
      delete root.dataset.theme;
      localStorage.setItem('vh-theme', 'light');
      themeToggle.textContent = '☾';
    } else {
      root.dataset.theme = 'dark';
      localStorage.setItem('vh-theme', 'dark');
      themeToggle.textContent = '☀';
    }
  }

  function formatearTexto(valor) {
    return String(valor)
      .replaceAll('_', ' ')
      .toLowerCase()
      .replace(
        /(^|\s)([a-záéíóúñ])/g,
        (texto, espacio, letra) => espacio + letra.toUpperCase()
      );
  }

  function mostrarToast(mensaje) {
    toast.textContent = mensaje;
    toast.classList.add('visible');

    window.clearTimeout(mostrarToast.timeoutId);

    mostrarToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove('visible');
    }, 2200);
  }
})();
