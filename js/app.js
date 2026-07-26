(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;

  const loginView = document.getElementById('loginView');
  const appView = document.getElementById('appView');
  const dashboardView = document.getElementById('dashboardView');
  const usersView = document.getElementById('usersView');

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

  const backUsersButton = document.getElementById('backUsersButton');
  const refreshUsersButton = document.getElementById('refreshUsersButton');
  const userSearch = document.getElementById('userSearch');
  const userProfileFilter = document.getElementById('userProfileFilter');
  const userSiteFilter = document.getElementById('userSiteFilter');
  const userStatusFilter = document.getElementById('userStatusFilter');
  const usersLoading = document.getElementById('usersLoading');
  const usersTable = document.getElementById('usersTable');
  const usersTableBody = document.getElementById('usersTableBody');
  const usersEmpty = document.getElementById('usersEmpty');

  const newUserButton = document.getElementById('newUserButton');
  const userModal = document.getElementById('userModal');
  const closeUserModalButton = document.getElementById('closeUserModalButton');
  const cancelUserFormButton = document.getElementById('cancelUserFormButton');
  const userForm = document.getElementById('userForm');
  const userModalTitle = document.getElementById('userModalTitle');
  const formUserId = document.getElementById('formUserId');
  const formUserName = document.getElementById('formUserName');
  const formUserDni = document.getElementById('formUserDni');
  const formUserEmail = document.getElementById('formUserEmail');
  const formUserProfile = document.getElementById('formUserProfile');
  const formUserSite = document.getElementById('formUserSite');
  const formUserStatus = document.getElementById('formUserStatus');
  const formUserPassword = document.getElementById('formUserPassword');
  const newUserPasswordGroup = document.getElementById('newUserPasswordGroup');
  const formUserNotes = document.getElementById('formUserNotes');
  const userFormMessage = document.getElementById('userFormMessage');
  const saveUserButton = document.getElementById('saveUserButton');

  let auth = null;
  let usuarios = [];
  let puedeAdministrarUsuarios = false;
  let catalogosUsuarios = {
    perfiles: [],
    sedes: [],
    estados: []
  };

  iniciar();

  async function iniciar() {
    configurarTema();

    apiLink.href = config.API_URL;
    appVersion.textContent = `Versión ${config.VERSION}`;

    loginForm.addEventListener('submit', manejarLogin);
    togglePassword.addEventListener('click', alternarClaveVisible);
    themeToggle.addEventListener('click', alternarTema);
    logoutButton.addEventListener('click', cerrarSesion);
    backUsersButton.addEventListener('click', mostrarDashboard);
    refreshUsersButton.addEventListener('click', cargarUsuarios);
    newUserButton.addEventListener('click', abrirNuevoUsuario);
    closeUserModalButton.addEventListener('click', cerrarFormularioUsuario);
    cancelUserFormButton.addEventListener('click', cerrarFormularioUsuario);
    userForm.addEventListener('submit', guardarUsuario);
    userModal.addEventListener('click', (event) => {
      if (event.target === userModal) {
        cerrarFormularioUsuario();
      }
    });

    [
      userSearch,
      userProfileFilter,
      userSiteFilter,
      userStatusFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarUsuarios);
      control.addEventListener('change', renderizarUsuarios);
    });

    document.querySelectorAll('[data-module]').forEach((button) => {
      button.addEventListener('click', () => abrirModulo(button));
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
    mostrarDashboard();
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

  function abrirModulo(button) {
    const modulo = String(button.dataset.module || '').toUpperCase();

    if (modulo === 'USUARIOS') {
      abrirUsuarios();
      return;
    }

    mostrarToast(
      `${modulo.replaceAll('_', ' ')}: módulo pendiente de implementación`
    );
  }

  async function abrirUsuarios() {
    dashboardView.hidden = true;
    usersView.hidden = false;
    await cargarUsuarios();
  }

  function mostrarDashboard() {
    usersView.hidden = true;
    dashboardView.hidden = false;
  }

  async function cargarUsuarios() {
    usersLoading.hidden = false;
    usersLoading.textContent = 'Cargando usuarios…';
    usersTable.hidden = true;
    usersEmpty.hidden = true;
    refreshUsersButton.disabled = true;

    try {
      const respuesta = await solicitarApi({
        accion: 'listar_usuarios',
        token: auth.token
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudieron cargar los usuarios.'
        );
      }

      usuarios = Array.isArray(respuesta.usuarios)
        ? respuesta.usuarios
        : [];

      puedeAdministrarUsuarios =
        Boolean(respuesta.puedeAdministrar);

      catalogosUsuarios =
        respuesta.catalogos || {
          perfiles: [],
          sedes: [],
          estados: []
        };

      newUserButton.hidden =
        !puedeAdministrarUsuarios;

      actualizarCatalogosFormulario();
      actualizarOpcionesFiltros();
      renderizarUsuarios();
      usersLoading.hidden = true;

    } catch (error) {
      console.error(error);
      usersLoading.hidden = false;
      usersLoading.textContent = error.message;
      usersTable.hidden = true;
    } finally {
      refreshUsersButton.disabled = false;
    }
  }

  function actualizarOpcionesFiltros() {
    llenarSelect(
      userProfileFilter,
      usuarios.map((usuario) => usuario.perfil),
      'Todos'
    );

    llenarSelect(
      userSiteFilter,
      usuarios.map((usuario) => usuario.sedeBase),
      'Todas'
    );
  }

  function llenarSelect(select, valores, etiquetaTodos) {
    const valorActual = select.value;

    const unicos = [...new Set(
      valores
        .map((valor) => String(valor || '').trim())
        .filter(Boolean)
    )].sort((a, b) => a.localeCompare(b, 'es'));

    select.innerHTML = '';

    const optionTodos = document.createElement('option');
    optionTodos.value = '';
    optionTodos.textContent = etiquetaTodos;
    select.appendChild(optionTodos);

    unicos.forEach((valor) => {
      const option = document.createElement('option');
      option.value = valor.toUpperCase();
      option.textContent = formatearTexto(valor);
      select.appendChild(option);
    });

    if (
      [...select.options].some((option) => option.value === valorActual)
    ) {
      select.value = valorActual;
    }
  }

  function renderizarUsuarios() {
    const texto = normalizarBusqueda(userSearch.value);
    const perfil = String(userProfileFilter.value || '').toUpperCase();
    const sede = String(userSiteFilter.value || '').toUpperCase();
    const estado = String(userStatusFilter.value || '').toUpperCase();

    const filtrados = usuarios.filter((usuario) => {
      const coincideTexto = !texto || normalizarBusqueda([
        usuario.nombresApellidos,
        usuario.correo,
        usuario.dni
      ].join(' ')).includes(texto);

      const coincidePerfil =
        !perfil ||
        String(usuario.perfil || '').toUpperCase() === perfil;

      const coincideSede =
        !sede ||
        String(usuario.sedeBase || '').toUpperCase() === sede;

      const coincideEstado =
        !estado ||
        String(usuario.estado || '').toUpperCase() === estado;

      return (
        coincideTexto &&
        coincidePerfil &&
        coincideSede &&
        coincideEstado
      );
    });

    usersTableBody.innerHTML = '';

    filtrados.forEach((usuario) => {
      usersTableBody.appendChild(
        crearFilaUsuario(usuario)
      );
    });

    usersLoading.hidden = true;
    usersTable.hidden = filtrados.length === 0;
    usersEmpty.hidden = filtrados.length !== 0;
  }

  function crearFilaUsuario(usuario) {
    const fila = document.createElement('tr');

    const celdaUsuario = document.createElement('td');
    celdaUsuario.className = 'user-cell';
    celdaUsuario.innerHTML =
      `<strong>${escaparHtml(usuario.nombresApellidos || 'Sin nombre')}</strong>` +
      `<small>${escaparHtml(usuario.dni || 'Sin DNI')}</small>`;
    fila.appendChild(celdaUsuario);

    fila.appendChild(crearCelda(usuario.correo));
    fila.appendChild(crearCelda(formatearTexto(usuario.perfil)));
    fila.appendChild(crearCelda(formatearTexto(usuario.sedeBase)));

    const celdaEstado = document.createElement('td');
    const estado = String(usuario.estado || '').toUpperCase();
    const insignia = document.createElement('span');
    insignia.className =
      'status-badge ' +
      (estado === 'ACTIVO' ? 'status-active' : 'status-inactive');
    insignia.textContent = formatearTexto(estado || 'Sin estado');
    celdaEstado.appendChild(insignia);
    fila.appendChild(celdaEstado);

    const celdaClave = document.createElement('td');
    const clave = document.createElement('span');
    clave.className =
      'password-value ' +
      (!usuario.claveVisible ? 'password-empty' : '');
    clave.textContent =
      usuario.claveVisible || 'Pendiente de asignar';
    celdaClave.appendChild(clave);
    fila.appendChild(celdaClave);

    fila.appendChild(
      crearCelda(usuario.ultimoAcceso || 'Sin registro')
    );

    const celdaAcciones = document.createElement('td');
    celdaAcciones.className = 'actions-cell';

    if (puedeAdministrarUsuarios) {
      const manualButton = crearBotonAccion(
        'Cambiar clave',
        () => cambiarClaveManual(usuario)
      );

      const generateButton = crearBotonAccion(
        'Generar',
        () => generarClaveUsuario(usuario)
      );

      const editButton = crearBotonAccion(
        'Editar',
        () => abrirEditarUsuario(usuario)
      );

      const nextStatus =
        String(usuario.estado || '').toUpperCase() === 'ACTIVO'
          ? 'INACTIVO'
          : 'ACTIVO';

      const statusButton = crearBotonAccion(
        nextStatus === 'ACTIVO'
          ? 'Activar'
          : 'Inactivar',
        () => cambiarEstadoUsuario(usuario, nextStatus)
      );

      celdaAcciones.appendChild(editButton);
      celdaAcciones.appendChild(statusButton);
      celdaAcciones.appendChild(manualButton);
      celdaAcciones.appendChild(generateButton);
    } else {
      celdaAcciones.textContent = 'Solo lectura';
    }

    fila.appendChild(celdaAcciones);

    return fila;
  }

  function crearCelda(valor) {
    const celda = document.createElement('td');
    celda.textContent = valor || '';
    return celda;
  }

  function crearBotonAccion(texto, accion) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'action-button';
    button.textContent = texto;
    button.addEventListener('click', accion);
    return button;
  }


  function actualizarCatalogosFormulario() {
    llenarSelectFormulario(
      formUserProfile,
      catalogosUsuarios.perfiles || []
    );

    llenarSelectFormulario(
      formUserSite,
      catalogosUsuarios.sedes || []
    );
  }

  function llenarSelectFormulario(select, valores) {
    select.innerHTML = '';

    valores.forEach((valor) => {
      const option = document.createElement('option');
      option.value = String(valor || '').toUpperCase();
      option.textContent = formatearTexto(valor);
      select.appendChild(option);
    });
  }

  function abrirNuevoUsuario() {
    userForm.reset();
    formUserId.value = '';
    formUserStatus.value = 'ACTIVO';
    newUserPasswordGroup.hidden = false;
    userModalTitle.textContent = 'Nuevo usuario';
    saveUserButton.textContent = 'Registrar usuario';
    userFormMessage.textContent = '';

    if (formUserProfile.options.length) {
      formUserProfile.selectedIndex = 0;
    }

    if (formUserSite.options.length) {
      formUserSite.selectedIndex = 0;
    }

    userModal.hidden = false;
    formUserName.focus();
  }

  function abrirEditarUsuario(usuario) {
    formUserId.value = usuario.idUsuario || '';
    formUserName.value = usuario.nombresApellidos || '';
    formUserDni.value = usuario.dni || '';
    formUserEmail.value = usuario.correo || '';
    formUserProfile.value = String(usuario.perfil || '').toUpperCase();
    formUserSite.value = String(usuario.sedeBase || '').toUpperCase();
    formUserStatus.value = String(usuario.estado || 'ACTIVO').toUpperCase();
    formUserNotes.value = usuario.observaciones || '';
    formUserPassword.value = '';
    newUserPasswordGroup.hidden = true;
    userModalTitle.textContent = 'Editar usuario';
    saveUserButton.textContent = 'Guardar cambios';
    userFormMessage.textContent = '';
    userModal.hidden = false;
    formUserName.focus();
  }

  function cerrarFormularioUsuario() {
    userModal.hidden = true;
    userFormMessage.textContent = '';
  }

  async function guardarUsuario(event) {
    event.preventDefault();
    userFormMessage.textContent = '';

    const payload = {
      accion: 'guardar_usuario',
      token: auth.token,
      idUsuario: formUserId.value.trim(),
      nombresApellidos: formUserName.value.trim(),
      dni: formUserDni.value.trim(),
      correo: formUserEmail.value.trim().toLowerCase(),
      perfil: formUserProfile.value,
      sedeBase: formUserSite.value,
      estado: formUserStatus.value,
      observaciones: formUserNotes.value.trim(),
      clave: formUserId.value
        ? ''
        : formUserPassword.value.trim()
    };

    if (
      !payload.nombresApellidos ||
      !payload.dni ||
      !payload.correo ||
      !payload.perfil ||
      !payload.sedeBase
    ) {
      userFormMessage.textContent =
        'Completa todos los campos obligatorios.';
      return;
    }

    saveUserButton.disabled = true;
    saveUserButton.textContent = 'Guardando…';

    try {
      const respuesta = await solicitarApi(payload);

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo guardar el usuario.'
        );
      }

      cerrarFormularioUsuario();

      if (
        !payload.idUsuario &&
        respuesta.claveVisible
      ) {
        window.alert(
          'Usuario registrado.\n\n' +
          'Contraseña: ' +
          respuesta.claveVisible
        );
      } else {
        mostrarToast(respuesta.mensaje);
      }

      await cargarUsuarios();

    } catch (error) {
      userFormMessage.textContent = error.message;
    } finally {
      saveUserButton.disabled = false;
      saveUserButton.textContent =
        formUserId.value
          ? 'Guardar cambios'
          : 'Registrar usuario';
    }
  }

  async function cambiarEstadoUsuario(usuario, nuevoEstado) {
    const accion =
      nuevoEstado === 'ACTIVO'
        ? 'activar'
        : 'inactivar';

    const confirmado = window.confirm(
      `¿Deseas ${accion} a ${usuario.nombresApellidos}?`
    );

    if (!confirmado) {
      return;
    }

    try {
      const respuesta = await solicitarApi({
        accion: 'cambiar_estado_usuario',
        token: auth.token,
        idUsuario: usuario.idUsuario,
        estado: nuevoEstado
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo cambiar el estado.'
        );
      }

      mostrarToast(respuesta.mensaje);
      await cargarUsuarios();

    } catch (error) {
      window.alert(error.message);
    }
  }

  async function cambiarClaveManual(usuario) {
    const actual = usuario.claveVisible || '';
    const clave = window.prompt(
      `Escribe la nueva contraseña para ${usuario.correo}:`,
      actual
    );

    if (clave === null) {
      return;
    }

    const claveLimpia = String(clave).trim();

    if (claveLimpia.length < 4) {
      window.alert(
        'La contraseña debe tener al menos 4 caracteres.'
      );
      return;
    }

    try {
      const respuesta = await solicitarApi({
        accion: 'establecer_clave_usuario',
        token: auth.token,
        correo: usuario.correo,
        clave: claveLimpia
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo actualizar la contraseña.'
        );
      }

      mostrarToast('Contraseña actualizada');
      await cargarUsuarios();

    } catch (error) {
      window.alert(error.message);
    }
  }

  async function generarClaveUsuario(usuario) {
    const confirmado = window.confirm(
      `Se generará una nueva contraseña para ${usuario.correo}. ` +
      'La contraseña anterior dejará de funcionar. ¿Continuar?'
    );

    if (!confirmado) {
      return;
    }

    try {
      const respuesta = await solicitarApi({
        accion: 'generar_clave_usuario',
        token: auth.token,
        correo: usuario.correo
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo generar la contraseña.'
        );
      }

      window.alert(
        `Nueva contraseña para ${usuario.correo}:\n\n` +
        respuesta.claveVisible
      );

      await cargarUsuarios();

    } catch (error) {
      window.alert(error.message);
    }
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
    usuarios = [];
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
    return String(valor || '')
      .replaceAll('_', ' ')
      .toLowerCase()
      .replace(
        /(^|\s)([a-záéíóúñ])/g,
        (texto, espacio, letra) => espacio + letra.toUpperCase()
      );
  }

  function normalizarBusqueda(valor) {
    return String(valor || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function escaparHtml(valor) {
    return String(valor || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
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
