(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;

  const loginView = document.getElementById('loginView');
  const appView = document.getElementById('appView');
  const dashboardView = document.getElementById('dashboardView');
  const supervisorsView = document.getElementById('supervisorsView');
  const crewsView = document.getElementById('crewsView');
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

  const backSupervisorsButton = document.getElementById('backSupervisorsButton');
  const newSupervisorButton = document.getElementById('newSupervisorButton');
  const refreshSupervisorsButton = document.getElementById('refreshSupervisorsButton');
  const supervisorSearch = document.getElementById('supervisorSearch');
  const supervisorSiteFilter = document.getElementById('supervisorSiteFilter');
  const supervisorPlatformFilter = document.getElementById('supervisorPlatformFilter');
  const supervisorStatusFilter = document.getElementById('supervisorStatusFilter');
  const supervisorsLoading = document.getElementById('supervisorsLoading');
  const supervisorsTable = document.getElementById('supervisorsTable');
  const supervisorsTableBody = document.getElementById('supervisorsTableBody');
  const supervisorsEmpty = document.getElementById('supervisorsEmpty');

  const supervisorModal = document.getElementById('supervisorModal');
  const closeSupervisorModalButton = document.getElementById('closeSupervisorModalButton');
  const cancelSupervisorFormButton = document.getElementById('cancelSupervisorFormButton');
  const supervisorForm = document.getElementById('supervisorForm');
  const supervisorModalTitle = document.getElementById('supervisorModalTitle');
  const formSupervisorId = document.getElementById('formSupervisorId');
  const formSupervisorName = document.getElementById('formSupervisorName');
  const formSupervisorDni = document.getElementById('formSupervisorDni');
  const formSupervisorSite = document.getElementById('formSupervisorSite');
  const supervisorPlatformsGroup = document.getElementById('supervisorPlatformsGroup');
  const formSupervisorPhone = document.getElementById('formSupervisorPhone');
  const formSupervisorEmail = document.getElementById('formSupervisorEmail');
  const formSupervisorStatus = document.getElementById('formSupervisorStatus');
  const formSupervisorNotes = document.getElementById('formSupervisorNotes');
  const supervisorFormMessage = document.getElementById('supervisorFormMessage');
  const saveSupervisorButton = document.getElementById('saveSupervisorButton');

  const backCrewsButton = document.getElementById('backCrewsButton');
  const newCrewButton = document.getElementById('newCrewButton');
  const refreshCrewsButton = document.getElementById('refreshCrewsButton');
  const crewSearch = document.getElementById('crewSearch');
  const crewSiteFilter = document.getElementById('crewSiteFilter');
  const crewPlatformFilter = document.getElementById('crewPlatformFilter');
  const crewSupervisorFilter = document.getElementById('crewSupervisorFilter');
  const crewStatusFilter = document.getElementById('crewStatusFilter');
  const crewsLoading = document.getElementById('crewsLoading');
  const crewsTable = document.getElementById('crewsTable');
  const crewsTableBody = document.getElementById('crewsTableBody');
  const crewsEmpty = document.getElementById('crewsEmpty');

  const crewModal = document.getElementById('crewModal');
  const closeCrewModalButton = document.getElementById('closeCrewModalButton');
  const cancelCrewFormButton = document.getElementById('cancelCrewFormButton');
  const crewForm = document.getElementById('crewForm');
  const crewModalTitle = document.getElementById('crewModalTitle');
  const formCrewId = document.getElementById('formCrewId');
  const formCrewCode = document.getElementById('formCrewCode');
  const formCrewSite = document.getElementById('formCrewSite');
  const formCrewPlatform = document.getElementById('formCrewPlatform');
  const formCrewTech1 = document.getElementById('formCrewTech1');
  const formCrewDni1 = document.getElementById('formCrewDni1');
  const formCrewRole1 = document.getElementById('formCrewRole1');
  const formCrewTech2 = document.getElementById('formCrewTech2');
  const formCrewDni2 = document.getElementById('formCrewDni2');
  const formCrewRole2 = document.getElementById('formCrewRole2');
  const formCrewSupervisor = document.getElementById('formCrewSupervisor');
  const formCrewStatus = document.getElementById('formCrewStatus');
  const formCrewNotes = document.getElementById('formCrewNotes');
  const crewFormMessage = document.getElementById('crewFormMessage');
  const saveCrewButton = document.getElementById('saveCrewButton');

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

  limpiarCredencialesUrl();

  let auth = null;
  let supervisores = [];
  let puedeRegistrarSupervisores = false;
  let puedeEditarSupervisores = false;
  let catalogosSupervisores = {
    sedes: [],
    plataformas: [],
    estados: []
  };
  let cuadrillas = [];
  let puedeRegistrarCuadrillas = false;
  let puedeEditarCuadrillas = false;
  let catalogosCuadrillas = {
    sedes: [],
    plataformas: [],
    cargos: [],
    estados: [],
    supervisores: []
  };
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
    backSupervisorsButton.addEventListener('click', mostrarDashboard);
    newSupervisorButton.addEventListener('click', abrirNuevoSupervisor);
    refreshSupervisorsButton.addEventListener('click', cargarSupervisores);
    closeSupervisorModalButton.addEventListener('click', cerrarFormularioSupervisor);
    cancelSupervisorFormButton.addEventListener('click', cerrarFormularioSupervisor);
    supervisorForm.addEventListener('submit', guardarSupervisor);
    supervisorModal.addEventListener('click', (event) => {
      if (event.target === supervisorModal) {
        cerrarFormularioSupervisor();
      }
    });

    [
      supervisorSearch,
      supervisorSiteFilter,
      supervisorPlatformFilter,
      supervisorStatusFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarSupervisores);
      control.addEventListener('change', renderizarSupervisores);
    });

    backCrewsButton.addEventListener('click', mostrarDashboard);
    newCrewButton.addEventListener('click', abrirNuevaCuadrilla);
    refreshCrewsButton.addEventListener('click', cargarCuadrillas);
    closeCrewModalButton.addEventListener('click', cerrarFormularioCuadrilla);
    cancelCrewFormButton.addEventListener('click', cerrarFormularioCuadrilla);
    crewForm.addEventListener('submit', guardarCuadrilla);
    formCrewSite.addEventListener('change', actualizarSupervisoresFormulario);
    formCrewPlatform.addEventListener('change', actualizarSupervisoresFormulario);
    crewModal.addEventListener('click', (event) => {
      if (event.target === crewModal) {
        cerrarFormularioCuadrilla();
      }
    });

    [
      crewSearch,
      crewSiteFilter,
      crewPlatformFilter,
      crewSupervisorFilter,
      crewStatusFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarCuadrillas);
      control.addEventListener('change', renderizarCuadrillas);
    });

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

  function limpiarCredencialesUrl() {
    const url = new URL(window.location.href);

    const parametrosSensibles = [
      'correo',
      'clave',
      'password',
      'contrasena',
      'contraseña'
    ];

    let cambio = false;

    parametrosSensibles.forEach((parametro) => {
      if (url.searchParams.has(parametro)) {
        url.searchParams.delete(parametro);
        cambio = true;
      }
    });

    if (cambio) {
      const query = url.searchParams.toString();
      const rutaLimpia =
        url.pathname +
        (query ? `?${query}` : '') +
        url.hash;

      window.history.replaceState(
        null,
        document.title,
        rutaLimpia
      );
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

    if (modulo === 'SUPERVISORES') {
      abrirSupervisores();
      return;
    }

    if (modulo === 'CUADRILLAS') {
      abrirCuadrillas();
      return;
    }

    if (modulo === 'USUARIOS') {
      abrirUsuarios();
      return;
    }

    mostrarToast(
      `${modulo.replaceAll('_', ' ')}: módulo pendiente de implementación`
    );
  }


  async function abrirSupervisores() {
    dashboardView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    supervisorsView.hidden = false;

    await cargarSupervisores();
  }

  async function cargarSupervisores() {
    supervisorsLoading.hidden = false;
    supervisorsLoading.textContent = 'Cargando supervisores…';
    supervisorsTable.hidden = true;
    supervisorsEmpty.hidden = true;
    refreshSupervisorsButton.disabled = true;

    try {
      const respuesta = await solicitarApi({
        accion: 'listar_supervisores',
        token: auth.token
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los supervisores.'
        );
      }

      supervisores = Array.isArray(respuesta.supervisores)
        ? respuesta.supervisores
        : [];

      puedeRegistrarSupervisores =
        Boolean(respuesta.puedeRegistrar);

      puedeEditarSupervisores =
        Boolean(respuesta.puedeEditar);

      catalogosSupervisores =
        respuesta.catalogos || {
          sedes: [],
          plataformas: [],
          estados: []
        };

      newSupervisorButton.hidden =
        !puedeRegistrarSupervisores;

      actualizarCatalogosSupervisores();
      renderizarSupervisores();
      supervisorsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      supervisorsLoading.hidden = false;
      supervisorsLoading.textContent = error.message;
      supervisorsTable.hidden = true;
    } finally {
      refreshSupervisorsButton.disabled = false;
    }
  }

  function actualizarCatalogosSupervisores() {
    const sedesBase = [
      'CHICLAYO',
      'PIURA',
      'TRUJILLO'
    ];

    const sedesApi =
      Array.isArray(
        catalogosSupervisores.sedes
      )
        ? catalogosSupervisores.sedes
            .map((sede) =>
              String(sede || '')
                .trim()
                .toUpperCase()
            )
            .filter(Boolean)
        : [];

    const sedesPermitidas =
      obtenerSedesSupervisorRespaldo();

    const sedesCombinadas = [
      ...new Set([
        ...sedesBase,
        ...sedesApi
      ])
    ];

    const sedes =
      sedesPermitidas.length === 1
        ? sedesCombinadas.filter(
            (sede) =>
              sede === sedesPermitidas[0]
          )
        : sedesCombinadas;

    catalogosSupervisores.sedes =
      sedes;

    llenarSelectConTodos(
      supervisorSiteFilter,
      sedes,
      'Todas'
    );

    llenarSelectConTodos(
      supervisorPlatformFilter,
      (
        Array.isArray(
          catalogosSupervisores.plataformas
        ) &&
        catalogosSupervisores.plataformas.length
      )
        ? catalogosSupervisores.plataformas
        : [
            'SGI',
            'SGA',
            'TRASLADO'
          ],
      'Todas'
    );

    asegurarSedesFormularioSupervisor(
      sedes
    );
  }

  function asegurarSedesFormularioSupervisor(
    sedes
  ) {
    const valorActual =
      String(
        formSupervisorSite.value || ''
      ).toUpperCase();

    const lista =
      Array.isArray(sedes) &&
      sedes.length
        ? sedes
        : [
            'CHICLAYO',
            'PIURA',
            'TRUJILLO'
          ];

    llenarSelectFormulario(
      formSupervisorSite,
      lista
    );

    const existeValorActual =
      Array.from(
        formSupervisorSite.options
      ).some(
        (option) =>
          option.value === valorActual
      );

    if (existeValorActual) {
      formSupervisorSite.value =
        valorActual;
    } else if (
      formSupervisorSite.options.length
    ) {
      formSupervisorSite.selectedIndex =
        0;
    }
  }

  function obtenerSedesSupervisorRespaldo() {
    const perfil =
      String(
        auth &&
        auth.usuario
          ? auth.usuario.perfil
          : ''
      )
        .trim()
        .toUpperCase();

    const sedeBase =
      String(
        auth &&
        auth.usuario
          ? auth.usuario.sedeBase
          : ''
      )
        .trim()
        .toUpperCase();

    if (
      perfil === 'ADMINISTRADOR' ||
      sedeBase === 'ZONA_NORTE'
    ) {
      return [
        'CHICLAYO',
        'PIURA',
        'TRUJILLO'
      ];
    }

    if (
      [
        'CHICLAYO',
        'PIURA',
        'TRUJILLO'
      ].includes(sedeBase)
    ) {
      return [
        sedeBase
      ];
    }

    return [];
  }

  function renderizarSupervisores() {
    const texto =
      normalizarBusqueda(
        supervisorSearch.value
      );

    const sede =
      String(
        supervisorSiteFilter.value || ''
      ).toUpperCase();

    const plataforma =
      String(
        supervisorPlatformFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        supervisorStatusFilter.value || ''
      ).toUpperCase();

    const filtrados =
      supervisores.filter(
        (supervisor) => {
          const coincideTexto =
            !texto ||
            normalizarBusqueda([
              supervisor.nombresApellidos,
              supervisor.dni,
              supervisor.correo,
              supervisor.telefono
            ].join(' ')).includes(texto);

          const coincideSede =
            !sede ||
            String(
              supervisor.sede || ''
            ).toUpperCase() === sede;

          const plataformas =
            Array.isArray(
              supervisor.plataformas
            )
              ? supervisor.plataformas
              : [];

          const coincidePlataforma =
            !plataforma ||
            plataformas
              .map(item =>
                String(item)
                  .toUpperCase()
              )
              .includes(
                plataforma
              );

          const coincideEstado =
            !estado ||
            String(
              supervisor.estado || ''
            ).toUpperCase() === estado;

          return (
            coincideTexto &&
            coincideSede &&
            coincidePlataforma &&
            coincideEstado
          );
        }
      );

    supervisorsTableBody.innerHTML = '';

    filtrados.forEach(
      (supervisor) => {
        supervisorsTableBody.appendChild(
          crearFilaSupervisor(
            supervisor
          )
        );
      }
    );

    supervisorsLoading.hidden = true;
    supervisorsTable.hidden =
      filtrados.length === 0;
    supervisorsEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaSupervisor(supervisor) {
    const fila =
      document.createElement('tr');

    const celdaSupervisor =
      document.createElement('td');

    celdaSupervisor.className =
      'user-cell';

    celdaSupervisor.innerHTML =
      `<strong>${escaparHtml(
        supervisor.nombresApellidos ||
        'Sin nombre'
      )}</strong>` +
      `<small>${escaparHtml(
        supervisor.dni ||
        'Sin DNI'
      )} · ${escaparHtml(
        supervisor.idSupervisor ||
        ''
      )}</small>`;

    fila.appendChild(
      celdaSupervisor
    );

    fila.appendChild(
      crearCelda(
        formatearTexto(
          supervisor.sede
        )
      )
    );

    const celdaPlataformas =
      document.createElement('td');

    const contenedorPlataformas =
      document.createElement('div');

    contenedorPlataformas.className =
      'platform-tags';

    const plataformas =
      Array.isArray(
        supervisor.plataformas
      )
        ? supervisor.plataformas
        : [];

    if (!plataformas.length) {
      const etiqueta =
        document.createElement('span');

      etiqueta.className =
        'platform-tag';

      etiqueta.textContent =
        'Sin asignar';

      contenedorPlataformas
        .appendChild(etiqueta);
    }

    plataformas.forEach(
      plataforma => {
        const etiqueta =
          document.createElement('span');

        etiqueta.className =
          'platform-tag';

        etiqueta.textContent =
          formatearTexto(
            plataforma
          );

        contenedorPlataformas
          .appendChild(etiqueta);
      }
    );

    celdaPlataformas.appendChild(
      contenedorPlataformas
    );

    fila.appendChild(
      celdaPlataformas
    );

    const celdaContacto =
      document.createElement('td');

    celdaContacto.className =
      'contact-cell';

    const correoSeguro =
      escaparHtml(
        supervisor.correo ||
        'Sin correo'
      );

    const telefonoSeguro =
      escaparHtml(
        supervisor.telefono ||
        'Sin teléfono'
      );

    celdaContacto.innerHTML =
      `<strong>${correoSeguro}</strong>` +
      `<small>${telefonoSeguro}</small>`;

    fila.appendChild(
      celdaContacto
    );

    const celdaAsignadas =
      document.createElement('td');

    celdaAsignadas.className =
      'assigned-cell';

    celdaAsignadas.innerHTML =
      `<strong>${Number(
        supervisor.cuadrillasActivas || 0
      )} activas</strong>` +
      `<small>${Number(
        supervisor.cuadrillasAsignadas || 0
      )} asignadas</small>`;

    fila.appendChild(
      celdaAsignadas
    );

    const celdaEstado =
      document.createElement('td');

    const estado =
      String(
        supervisor.estado || ''
      ).toUpperCase();

    const insignia =
      document.createElement('span');

    insignia.className =
      'status-badge ' +
      (
        estado === 'ACTIVO'
          ? 'status-active'
          : 'status-inactive'
      );

    insignia.textContent =
      formatearTexto(
        estado ||
        'Sin estado'
      );

    celdaEstado.appendChild(
      insignia
    );

    fila.appendChild(
      celdaEstado
    );

    const celdaAcciones =
      document.createElement('td');

    celdaAcciones.className =
      'actions-cell';

    if (puedeEditarSupervisores) {
      const botonEditar =
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarSupervisor(
              supervisor
            )
        );

      const nuevoEstado =
        estado === 'ACTIVO'
          ? 'INACTIVO'
          : 'ACTIVO';

      const botonEstado =
        crearBotonAccion(
          nuevoEstado === 'ACTIVO'
            ? 'Activar'
            : 'Inactivar',
          () =>
            cambiarEstadoSupervisor(
              supervisor,
              nuevoEstado
            )
        );

      celdaAcciones.appendChild(
        botonEditar
      );

      celdaAcciones.appendChild(
        botonEstado
      );
    } else {
      celdaAcciones.textContent =
        'Solo lectura';
    }

    fila.appendChild(
      celdaAcciones
    );

    return fila;
  }

  function abrirNuevoSupervisor() {
    asegurarSedesFormularioSupervisor(
      catalogosSupervisores.sedes
    );

    supervisorForm.reset();
    formSupervisorId.value = '';
    formSupervisorStatus.value = 'ACTIVO';
    limpiarPlataformasSupervisor();
    supervisorModalTitle.textContent =
      'Nuevo supervisor';
    saveSupervisorButton.textContent =
      'Registrar supervisor';
    supervisorFormMessage.textContent = '';

    if (
      formSupervisorSite.options.length
    ) {
      formSupervisorSite.selectedIndex = 0;
    }

    supervisorModal.hidden = false;
    formSupervisorName.focus();
  }

  function abrirEditarSupervisor(
    supervisor
  ) {
    asegurarSedesFormularioSupervisor(
      catalogosSupervisores.sedes
    );

    formSupervisorId.value =
      supervisor.idSupervisor || '';

    formSupervisorName.value =
      supervisor.nombresApellidos || '';

    formSupervisorDni.value =
      supervisor.dni || '';

    formSupervisorSite.value =
      String(
        supervisor.sede || ''
      ).toUpperCase();

    formSupervisorPhone.value =
      supervisor.telefono || '';

    formSupervisorEmail.value =
      supervisor.correo || '';

    formSupervisorStatus.value =
      String(
        supervisor.estado ||
        'ACTIVO'
      ).toUpperCase();

    formSupervisorNotes.value =
      supervisor.observaciones || '';

    seleccionarPlataformasSupervisor(
      supervisor.plataformas || []
    );

    supervisorModalTitle.textContent =
      'Editar supervisor';

    saveSupervisorButton.textContent =
      'Guardar cambios';

    supervisorFormMessage.textContent =
      '';

    supervisorModal.hidden = false;
    formSupervisorName.focus();
  }

  function obtenerPlataformasSupervisorSeleccionadas() {
    return Array.from(
      supervisorPlatformsGroup
        .querySelectorAll(
          'input[name="supervisorPlatform"]:checked'
        )
    ).map(
      input =>
        String(
          input.value || ''
        ).toUpperCase()
    );
  }

  function limpiarPlataformasSupervisor() {
    supervisorPlatformsGroup
      .querySelectorAll(
        'input[name="supervisorPlatform"]'
      )
      .forEach(
        input => {
          input.checked = false;
        }
      );
  }

  function seleccionarPlataformasSupervisor(
    plataformas
  ) {
    const seleccionadas =
      new Set(
        (
          Array.isArray(plataformas)
            ? plataformas
            : []
        ).map(
          item =>
            String(item)
              .toUpperCase()
        )
      );

    supervisorPlatformsGroup
      .querySelectorAll(
        'input[name="supervisorPlatform"]'
      )
      .forEach(
        input => {
          input.checked =
            seleccionadas.has(
              String(
                input.value || ''
              ).toUpperCase()
            );
        }
      );
  }

  function cerrarFormularioSupervisor() {
    supervisorModal.hidden = true;
    supervisorFormMessage.textContent = '';
  }

  async function guardarSupervisor(event) {
    event.preventDefault();
    supervisorFormMessage.textContent = '';

    const plataformas =
      obtenerPlataformasSupervisorSeleccionadas();

    const payload = {
      accion:
        'guardar_supervisor',
      token:
        auth.token,
      idSupervisor:
        formSupervisorId.value.trim(),
      nombresApellidos:
        formSupervisorName.value.trim(),
      dni:
        formSupervisorDni.value.trim(),
      sede:
        formSupervisorSite.value,
      plataformas:
        plataformas,
      telefono:
        formSupervisorPhone.value.trim(),
      correo:
        formSupervisorEmail.value
          .trim()
          .toLowerCase(),
      estado:
        formSupervisorStatus.value,
      observaciones:
        formSupervisorNotes.value.trim()
    };

    if (
      !payload.nombresApellidos ||
      !payload.dni ||
      !payload.sede
    ) {
      supervisorFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    if (!plataformas.length) {
      supervisorFormMessage.textContent =
        'Selecciona por lo menos una plataforma.';
      return;
    }

    saveSupervisorButton.disabled = true;
    saveSupervisorButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el supervisor.'
        );
      }

      cerrarFormularioSupervisor();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarSupervisores();

    } catch (error) {
      supervisorFormMessage.textContent =
        error.message;
    } finally {
      saveSupervisorButton.disabled =
        false;

      saveSupervisorButton.textContent =
        formSupervisorId.value
          ? 'Guardar cambios'
          : 'Registrar supervisor';
    }
  }

  async function cambiarEstadoSupervisor(
    supervisor,
    estado
  ) {
    const accion =
      estado === 'ACTIVO'
        ? 'activar'
        : 'inactivar';

    const confirmado =
      window.confirm(
        `¿Deseas ${accion} al supervisor ` +
        `${supervisor.nombresApellidos}?`
      );

    if (!confirmado) {
      return;
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_supervisor',
          token:
            auth.token,
          idSupervisor:
            supervisor.idSupervisor,
          estado:
            estado
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cambiar el estado.'
        );
      }

      mostrarToast(
        respuesta.mensaje
      );

      await cargarSupervisores();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  async function abrirCuadrillas() {
    dashboardView.hidden = true;
    supervisorsView.hidden = true;
    usersView.hidden = true;
    crewsView.hidden = false;
    await cargarCuadrillas();
  }

  async function cargarCuadrillas() {
    crewsLoading.hidden = false;
    crewsLoading.textContent = 'Cargando cuadrillas…';
    crewsTable.hidden = true;
    crewsEmpty.hidden = true;
    refreshCrewsButton.disabled = true;

    try {
      const respuesta = await solicitarApi({
        accion: 'listar_cuadrillas',
        token: auth.token
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudieron cargar las cuadrillas.'
        );
      }

      cuadrillas = Array.isArray(respuesta.cuadrillas)
        ? respuesta.cuadrillas
        : [];

      puedeRegistrarCuadrillas = Boolean(respuesta.puedeRegistrar);
      puedeEditarCuadrillas = Boolean(respuesta.puedeEditar);
      catalogosCuadrillas = respuesta.catalogos || {
        sedes: [],
        plataformas: [],
        cargos: [],
        estados: [],
        supervisores: []
      };

      newCrewButton.hidden = !puedeRegistrarCuadrillas;
      actualizarCatalogosCuadrillas();
      renderizarCuadrillas();
      crewsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      crewsLoading.hidden = false;
      crewsLoading.textContent = error.message;
      crewsTable.hidden = true;
    } finally {
      refreshCrewsButton.disabled = false;
    }
  }

  function actualizarCatalogosCuadrillas() {
    llenarSelectConTodos(
      crewSiteFilter,
      catalogosCuadrillas.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      crewPlatformFilter,
      catalogosCuadrillas.plataformas || [],
      'Todas'
    );

    const supervisoresFiltro = [
      ...new Set(
        cuadrillas
          .map((cuadrilla) => cuadrilla.supervisor)
          .filter(Boolean)
      )
    ];

    llenarSelectConTodos(
      crewSupervisorFilter,
      supervisoresFiltro,
      'Todos'
    );

    llenarSelectFormulario(
      formCrewSite,
      catalogosCuadrillas.sedes || []
    );

    llenarSelectFormulario(
      formCrewPlatform,
      catalogosCuadrillas.plataformas || []
    );

    llenarSelectFormulario(
      formCrewRole1,
      catalogosCuadrillas.cargos || []
    );

    llenarSelectFormulario(
      formCrewRole2,
      catalogosCuadrillas.cargos || []
    );
  }

  function llenarSelectConTodos(select, valores, etiquetaTodos) {
    const actual = select.value;
    select.innerHTML = '';

    const todos = document.createElement('option');
    todos.value = '';
    todos.textContent = etiquetaTodos;
    select.appendChild(todos);

    [...new Set(valores.map((valor) => String(valor || '').trim()).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, 'es'))
      .forEach((valor) => {
        const option = document.createElement('option');
        option.value = valor.toUpperCase();
        option.textContent = formatearTexto(valor);
        select.appendChild(option);
      });

    if ([...select.options].some((option) => option.value === actual)) {
      select.value = actual;
    }
  }

  function renderizarCuadrillas() {
    const texto = normalizarBusqueda(crewSearch.value);
    const sede = String(crewSiteFilter.value || '').toUpperCase();
    const plataforma = String(crewPlatformFilter.value || '').toUpperCase();
    const supervisor = normalizarBusqueda(crewSupervisorFilter.value);
    const estado = String(crewStatusFilter.value || '').toUpperCase();

    const filtradas = cuadrillas.filter((cuadrilla) => {
      const coincideTexto = !texto || normalizarBusqueda([
        cuadrilla.codigoCuadrilla,
        cuadrilla.tecnico1,
        cuadrilla.dniTecnico1,
        cuadrilla.tecnico2,
        cuadrilla.dniTecnico2,
        cuadrilla.supervisor
      ].join(' ')).includes(texto);

      const coincideSede = !sede ||
        String(cuadrilla.sede || '').toUpperCase() === sede;

      const coincidePlataforma = !plataforma ||
        String(cuadrilla.plataforma || '').toUpperCase() === plataforma;

      const coincideSupervisor = !supervisor ||
        normalizarBusqueda(cuadrilla.supervisor) === supervisor;

      const coincideEstado = !estado ||
        String(cuadrilla.estado || '').toUpperCase() === estado;

      return coincideTexto && coincideSede && coincidePlataforma &&
        coincideSupervisor && coincideEstado;
    });

    crewsTableBody.innerHTML = '';

    filtradas.forEach((cuadrilla) => {
      crewsTableBody.appendChild(crearFilaCuadrilla(cuadrilla));
    });

    crewsLoading.hidden = true;
    crewsTable.hidden = filtradas.length === 0;
    crewsEmpty.hidden = filtradas.length !== 0;
  }

  function crearFilaCuadrilla(cuadrilla) {
    const fila = document.createElement('tr');

    const celdaCodigo = document.createElement('td');
    celdaCodigo.className = 'crew-code-cell';
    celdaCodigo.innerHTML =
      `<strong>${escaparHtml(cuadrilla.codigoCuadrilla || 'Sin código')}</strong>` +
      `<small>${escaparHtml(cuadrilla.idCuadrilla || '')}</small>`;
    fila.appendChild(celdaCodigo);

    const celdaSede = document.createElement('td');
    celdaSede.className = 'crew-code-cell';
    celdaSede.innerHTML =
      `<strong>${escaparHtml(formatearTexto(cuadrilla.sede))}</strong>` +
      `<small>${escaparHtml(formatearTexto(cuadrilla.plataforma))}</small>`;
    fila.appendChild(celdaSede);

    fila.appendChild(crearCeldaTecnico(
      cuadrilla.tecnico1,
      cuadrilla.dniTecnico1,
      cuadrilla.cargoTecnico1
    ));

    fila.appendChild(crearCeldaTecnico(
      cuadrilla.tecnico2,
      cuadrilla.dniTecnico2,
      cuadrilla.cargoTecnico2
    ));

    fila.appendChild(crearCelda(cuadrilla.supervisor || 'Sin asignar'));

    const celdaEstado = document.createElement('td');
    const estado = String(cuadrilla.estado || '').toUpperCase();
    const insignia = document.createElement('span');
    insignia.className = 'status-badge ' +
      (estado === 'ACTIVO' ? 'status-active' : 'status-inactive');
    insignia.textContent = formatearTexto(estado || 'Sin estado');
    celdaEstado.appendChild(insignia);
    fila.appendChild(celdaEstado);

    const celdaAcciones = document.createElement('td');
    celdaAcciones.className = 'actions-cell';

    if (puedeEditarCuadrillas) {
      celdaAcciones.appendChild(crearBotonAccion(
        'Editar',
        () => abrirEditarCuadrilla(cuadrilla)
      ));

      const nuevoEstado = estado === 'ACTIVO' ? 'INACTIVO' : 'ACTIVO';
      celdaAcciones.appendChild(crearBotonAccion(
        nuevoEstado === 'ACTIVO' ? 'Activar' : 'Inactivar',
        () => cambiarEstadoCuadrilla(cuadrilla, nuevoEstado)
      ));
    } else {
      celdaAcciones.textContent = 'Solo lectura';
    }

    fila.appendChild(celdaAcciones);
    return fila;
  }

  function crearCeldaTecnico(nombre, dni, cargo) {
    const celda = document.createElement('td');
    celda.className = 'crew-person-cell';

    if (!nombre && !dni) {
      celda.textContent = 'Sin asignar';
      return celda;
    }

    celda.innerHTML =
      `<strong>${escaparHtml(nombre || 'Sin nombre')}</strong>` +
      `<small>${escaparHtml(dni || 'Sin DNI')} · ${escaparHtml(formatearTexto(cargo || ''))}</small>`;
    return celda;
  }

  function abrirNuevaCuadrilla() {
    crewForm.reset();
    formCrewId.value = '';
    formCrewStatus.value = 'ACTIVO';
    crewModalTitle.textContent = 'Nueva cuadrilla';
    saveCrewButton.textContent = 'Registrar cuadrilla';
    crewFormMessage.textContent = '';

    if (formCrewSite.options.length) formCrewSite.selectedIndex = 0;
    if (formCrewPlatform.options.length) formCrewPlatform.selectedIndex = 0;

    seleccionarOpcionSiExiste(formCrewRole1, 'TECNICO 1');
    seleccionarOpcionSiExiste(formCrewRole2, 'TECNICO 2');
    actualizarSupervisoresFormulario();

    crewModal.hidden = false;
    formCrewCode.focus();
  }

  function abrirEditarCuadrilla(cuadrilla) {
    formCrewId.value = cuadrilla.idCuadrilla || '';
    formCrewCode.value = cuadrilla.codigoCuadrilla || '';
    formCrewSite.value = String(cuadrilla.sede || '').toUpperCase();
    formCrewPlatform.value = String(cuadrilla.plataforma || '').toUpperCase();
    formCrewTech1.value = cuadrilla.tecnico1 || '';
    formCrewDni1.value = cuadrilla.dniTecnico1 || '';
    formCrewRole1.value = String(cuadrilla.cargoTecnico1 || '').toUpperCase();
    formCrewTech2.value = cuadrilla.tecnico2 || '';
    formCrewDni2.value = cuadrilla.dniTecnico2 || '';
    formCrewRole2.value = String(cuadrilla.cargoTecnico2 || '').toUpperCase();
    formCrewStatus.value = String(cuadrilla.estado || 'ACTIVO').toUpperCase();
    formCrewNotes.value = cuadrilla.observaciones || '';
    crewModalTitle.textContent = 'Editar cuadrilla';
    saveCrewButton.textContent = 'Guardar cambios';
    crewFormMessage.textContent = '';

    actualizarSupervisoresFormulario(cuadrilla.idSupervisor || '');
    crewModal.hidden = false;
    formCrewCode.focus();
  }

  function actualizarSupervisoresFormulario(idSeleccionado = '') {
    const sede = String(formCrewSite.value || '').toUpperCase();
    const plataforma = String(formCrewPlatform.value || '').toUpperCase();
    const actual = idSeleccionado || formCrewSupervisor.value;

    formCrewSupervisor.innerHTML = '';
    const sinAsignar = document.createElement('option');
    sinAsignar.value = '';
    sinAsignar.textContent = 'Sin asignar';
    formCrewSupervisor.appendChild(sinAsignar);

    (catalogosCuadrillas.supervisores || [])
      .filter((supervisor) => {
        const mismaSede = !sede ||
          String(supervisor.sede || '').toUpperCase() === sede;
        const plataformasSupervisor = Array.isArray(supervisor.plataformas)
          ? supervisor.plataformas.map((item) => String(item).toUpperCase())
          : String(supervisor.plataforma || '')
              .split(',')
              .map((item) => item.trim().toUpperCase())
              .filter(Boolean);

        const supervisorActivo =
          String(supervisor.estado || 'ACTIVO').toUpperCase() === 'ACTIVO';

        const esSeleccionActual =
          String(supervisor.idSupervisor || '') === String(actual || '');

        const compatible =
          !plataforma ||
          plataformasSupervisor.includes(plataforma);

        return (
          mismaSede &&
          compatible &&
          (supervisorActivo || esSeleccionActual)
        );
      })
      .sort((a, b) => String(a.nombre).localeCompare(String(b.nombre), 'es'))
      .forEach((supervisor) => {
        const option = document.createElement('option');
        option.value = supervisor.idSupervisor;
        const plataformasTexto = Array.isArray(supervisor.plataformas)
          ? supervisor.plataformas.join(', ')
          : supervisor.plataforma || 'Sin plataforma';

        option.textContent =
          `${supervisor.nombre} · ${formatearTexto(plataformasTexto)}`;
        formCrewSupervisor.appendChild(option);
      });

    if ([...formCrewSupervisor.options].some((option) => option.value === actual)) {
      formCrewSupervisor.value = actual;
    }
  }

  function seleccionarOpcionSiExiste(select, valor) {
    if ([...select.options].some((option) => option.value === valor)) {
      select.value = valor;
    }
  }

  function cerrarFormularioCuadrilla() {
    crewModal.hidden = true;
    crewFormMessage.textContent = '';
  }

  async function guardarCuadrilla(event) {
    event.preventDefault();
    crewFormMessage.textContent = '';

    const payload = {
      accion: 'guardar_cuadrilla',
      token: auth.token,
      idCuadrilla: formCrewId.value.trim(),
      codigoCuadrilla: formCrewCode.value.trim(),
      sede: formCrewSite.value,
      plataforma: formCrewPlatform.value,
      tecnico1: formCrewTech1.value.trim(),
      dniTecnico1: formCrewDni1.value.trim(),
      cargoTecnico1: formCrewRole1.value,
      tecnico2: formCrewTech2.value.trim(),
      dniTecnico2: formCrewDni2.value.trim(),
      cargoTecnico2: formCrewRole2.value,
      idSupervisor: formCrewSupervisor.value,
      estado: formCrewStatus.value,
      observaciones: formCrewNotes.value.trim()
    };

    if (
      !payload.codigoCuadrilla ||
      !payload.sede ||
      !payload.plataforma ||
      !payload.tecnico1 ||
      !payload.dniTecnico1
    ) {
      crewFormMessage.textContent = 'Completa los campos obligatorios.';
      return;
    }

    saveCrewButton.disabled = true;
    saveCrewButton.textContent = 'Guardando…';

    try {
      const respuesta = await solicitarApi(payload);

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo guardar la cuadrilla.'
        );
      }

      cerrarFormularioCuadrilla();
      mostrarToast(respuesta.mensaje);
      await cargarCuadrillas();

    } catch (error) {
      crewFormMessage.textContent = error.message;
    } finally {
      saveCrewButton.disabled = false;
      saveCrewButton.textContent = formCrewId.value
        ? 'Guardar cambios'
        : 'Registrar cuadrilla';
    }
  }

  async function cambiarEstadoCuadrilla(cuadrilla, estado) {
    const accion = estado === 'ACTIVO' ? 'activar' : 'inactivar';
    const confirmado = window.confirm(
      `¿Deseas ${accion} la cuadrilla ${cuadrilla.codigoCuadrilla}?`
    );

    if (!confirmado) return;

    try {
      const respuesta = await solicitarApi({
        accion: 'cambiar_estado_cuadrilla',
        token: auth.token,
        idCuadrilla: cuadrilla.idCuadrilla,
        estado: estado
      });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje || 'No se pudo cambiar el estado.'
        );
      }

      mostrarToast(respuesta.mensaje);
      await cargarCuadrillas();

    } catch (error) {
      window.alert(error.message);
    }
  }

  async function abrirUsuarios() {
    dashboardView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = false;
    await cargarUsuarios();
  }

  function mostrarDashboard() {
    supervisorsView.hidden = true;
    crewsView.hidden = true;
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
    supervisores = [];
    cuadrillas = [];
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
