(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;

  const loginView = document.getElementById('loginView');
  const appView = document.getElementById('appView');
  const dashboardView = document.getElementById('dashboardView');
  const movementsView = document.getElementById('movementsView');
  const toolsView = document.getElementById('toolsView');
  const catalogView = document.getElementById('catalogView');
  const warehousesView = document.getElementById('warehousesView');
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

  const backMovementsButton = document.getElementById('backMovementsButton');
  const newMovementButton = document.getElementById('newMovementButton');
  const refreshMovementsButton = document.getElementById('refreshMovementsButton');
  const movementSearch = document.getElementById('movementSearch');
  const movementTypeFilter = document.getElementById('movementTypeFilter');
  const movementSiteFilter = document.getElementById('movementSiteFilter');
  const movementStateFilter = document.getElementById('movementStateFilter');
  const movementDateFrom = document.getElementById('movementDateFrom');
  const movementDateTo = document.getElementById('movementDateTo');
  const movementsLoading = document.getElementById('movementsLoading');
  const movementsTable = document.getElementById('movementsTable');
  const movementsTableBody = document.getElementById('movementsTableBody');
  const movementsEmpty = document.getElementById('movementsEmpty');
  const movementSummaryTotal = document.getElementById('movementSummaryTotal');
  const movementSummaryConfirmed = document.getElementById('movementSummaryConfirmed');
  const movementSummaryUnitary = document.getElementById('movementSummaryUnitary');
  const movementSummaryQuantity = document.getElementById('movementSummaryQuantity');

  const movementModal = document.getElementById('movementModal');
  const closeMovementModalButton = document.getElementById('closeMovementModalButton');
  const cancelMovementFormButton = document.getElementById('cancelMovementFormButton');
  const movementForm = document.getElementById('movementForm');
  const formMovementDate = document.getElementById('formMovementDate');
  const formMovementTime = document.getElementById('formMovementTime');
  const formMovementType = document.getElementById('formMovementType');
  const formMovementReason = document.getElementById('formMovementReason');
  const formMovementArticleType = document.getElementById('formMovementArticleType');
  const movementToolGroup = document.getElementById('movementToolGroup');
  const formMovementTool = document.getElementById('formMovementTool');
  const formMovementQuantity = document.getElementById('formMovementQuantity');
  const formMovementUnit = document.getElementById('formMovementUnit');

  const formMovementOriginType = document.getElementById('formMovementOriginType');
  const formMovementOriginSite = document.getElementById('formMovementOriginSite');
  const movementOriginEntityGroup = document.getElementById('movementOriginEntityGroup');
  const movementOriginEntityLabel = document.getElementById('movementOriginEntityLabel');
  const formMovementOriginEntity = document.getElementById('formMovementOriginEntity');
  const movementOriginResponsibleGroup = document.getElementById('movementOriginResponsibleGroup');
  const formMovementOriginResponsible = document.getElementById('formMovementOriginResponsible');
  const movementOriginExternalGroup = document.getElementById('movementOriginExternalGroup');
  const formMovementOriginExternal = document.getElementById('formMovementOriginExternal');

  const formMovementDestinationType = document.getElementById('formMovementDestinationType');
  const formMovementDestinationSite = document.getElementById('formMovementDestinationSite');
  const movementDestinationEntityGroup = document.getElementById('movementDestinationEntityGroup');
  const movementDestinationEntityLabel = document.getElementById('movementDestinationEntityLabel');
  const formMovementDestinationEntity = document.getElementById('formMovementDestinationEntity');
  const movementDestinationResponsibleGroup = document.getElementById('movementDestinationResponsibleGroup');
  const formMovementDestinationResponsible = document.getElementById('formMovementDestinationResponsible');
  const movementDestinationExternalGroup = document.getElementById('movementDestinationExternalGroup');
  const formMovementDestinationExternal = document.getElementById('formMovementDestinationExternal');

  const movementProvidersList = document.getElementById('movementProvidersList');
  const formMovementDeliver = document.getElementById('formMovementDeliver');
  const formMovementReceive = document.getElementById('formMovementReceive');
  const formMovementCargo = document.getElementById('formMovementCargo');
  const formMovementEvidence = document.getElementById('formMovementEvidence');
  const formMovementNotes = document.getElementById('formMovementNotes');
  const movementFormMessage = document.getElementById('movementFormMessage');
  const saveMovementButton = document.getElementById('saveMovementButton');

  const backToolsButton = document.getElementById('backToolsButton');
  const newToolButton = document.getElementById('newToolButton');
  const refreshToolsButton = document.getElementById('refreshToolsButton');
  const toolSearch = document.getElementById('toolSearch');
  const toolCategoryFilter = document.getElementById('toolCategoryFilter');
  const toolTypeFilter = document.getElementById('toolTypeFilter');
  const toolConditionFilter = document.getElementById('toolConditionFilter');
  const toolSeriesFilter = document.getElementById('toolSeriesFilter');
  const toolsLoading = document.getElementById('toolsLoading');
  const toolsTable = document.getElementById('toolsTable');
  const toolsTableBody = document.getElementById('toolsTableBody');
  const toolsEmpty = document.getElementById('toolsEmpty');

  const toolModal = document.getElementById('toolModal');
  const closeToolModalButton = document.getElementById('closeToolModalButton');
  const cancelToolFormButton = document.getElementById('cancelToolFormButton');
  const toolForm = document.getElementById('toolForm');
  const toolModalTitle = document.getElementById('toolModalTitle');
  const formToolId = document.getElementById('formToolId');
  const formToolCode = document.getElementById('formToolCode');
  const formToolType = document.getElementById('formToolType');
  const formToolBrand = document.getElementById('formToolBrand');
  const formToolModel = document.getElementById('formToolModel');
  const formToolSeries = document.getElementById('formToolSeries');
  const formToolSeriesLabel = document.getElementById('formToolSeriesLabel');
  const formToolSeriesHelp = document.getElementById('formToolSeriesHelp');
  const formToolCondition = document.getElementById('formToolCondition');
  const formToolPurchaseDate = document.getElementById('formToolPurchaseDate');
  const formToolPurchaseCost = document.getElementById('formToolPurchaseCost');
  const formToolProvider = document.getElementById('formToolProvider');
  const toolProvidersList = document.getElementById('toolProvidersList');
  const formToolPurchaseDocument = document.getElementById('formToolPurchaseDocument');
  const formToolNotes = document.getElementById('formToolNotes');
  const toolFormMessage = document.getElementById('toolFormMessage');
  const saveToolButton = document.getElementById('saveToolButton');

  const backCatalogButton = document.getElementById('backCatalogButton');
  const newCatalogButton = document.getElementById('newCatalogButton');
  const refreshCatalogButton = document.getElementById('refreshCatalogButton');
  const catalogSearch = document.getElementById('catalogSearch');
  const catalogCategoryFilter = document.getElementById('catalogCategoryFilter');
  const catalogControlFilter = document.getElementById('catalogControlFilter');
  const catalogSeriesFilter = document.getElementById('catalogSeriesFilter');
  const catalogStatusFilter = document.getElementById('catalogStatusFilter');
  const catalogLoading = document.getElementById('catalogLoading');
  const catalogTable = document.getElementById('catalogTable');
  const catalogTableBody = document.getElementById('catalogTableBody');
  const catalogEmpty = document.getElementById('catalogEmpty');

  const catalogModal = document.getElementById('catalogModal');
  const closeCatalogModalButton = document.getElementById('closeCatalogModalButton');
  const cancelCatalogFormButton = document.getElementById('cancelCatalogFormButton');
  const catalogForm = document.getElementById('catalogForm');
  const catalogModalTitle = document.getElementById('catalogModalTitle');
  const formCatalogId = document.getElementById('formCatalogId');
  const formCatalogName = document.getElementById('formCatalogName');
  const formCatalogCategory = document.getElementById('formCatalogCategory');
  const catalogCategoriesList = document.getElementById('catalogCategoriesList');
  const formCatalogControl = document.getElementById('formCatalogControl');
  const formCatalogUnit = document.getElementById('formCatalogUnit');
  const formCatalogSeries = document.getElementById('formCatalogSeries');
  const formCatalogStatus = document.getElementById('formCatalogStatus');
  const formCatalogNotes = document.getElementById('formCatalogNotes');
  const catalogFormMessage = document.getElementById('catalogFormMessage');
  const saveCatalogButton = document.getElementById('saveCatalogButton');

  const backWarehousesButton = document.getElementById('backWarehousesButton');
  const newWarehouseButton = document.getElementById('newWarehouseButton');
  const refreshWarehousesButton = document.getElementById('refreshWarehousesButton');
  const warehouseSearch = document.getElementById('warehouseSearch');
  const warehouseSiteFilter = document.getElementById('warehouseSiteFilter');
  const warehouseStatusFilter = document.getElementById('warehouseStatusFilter');
  const warehousesLoading = document.getElementById('warehousesLoading');
  const warehousesTable = document.getElementById('warehousesTable');
  const warehousesTableBody = document.getElementById('warehousesTableBody');
  const warehousesEmpty = document.getElementById('warehousesEmpty');

  const warehouseModal = document.getElementById('warehouseModal');
  const closeWarehouseModalButton = document.getElementById('closeWarehouseModalButton');
  const cancelWarehouseFormButton = document.getElementById('cancelWarehouseFormButton');
  const warehouseForm = document.getElementById('warehouseForm');
  const warehouseModalTitle = document.getElementById('warehouseModalTitle');
  const formWarehouseId = document.getElementById('formWarehouseId');
  const formWarehouseName = document.getElementById('formWarehouseName');
  const formWarehouseSite = document.getElementById('formWarehouseSite');
  const formWarehouseResponsible = document.getElementById('formWarehouseResponsible');
  const formWarehouseStatus = document.getElementById('formWarehouseStatus');
  const formWarehouseNotes = document.getElementById('formWarehouseNotes');
  const warehouseFormMessage = document.getElementById('warehouseFormMessage');
  const saveWarehouseButton = document.getElementById('saveWarehouseButton');

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
  let movimientos = [];
  let puedeRegistrarMovimientos = false;
  let catalogosMovimientos = {
    tiposMovimiento: [],
    motivos: [],
    estados: [],
    ubicaciones: [],
    reglas: {},
    sedes: [],
    tiposArticulo: [],
    herramientas: [],
    almacenes: [],
    cuadrillas: [],
    tecnicos: [],
    supervisores: [],
    proveedores: []
  };
  let herramientas = [];
  let puedeRegistrarHerramientas = false;
  let puedeEditarHerramientas = false;
  let catalogosHerramientas = {
    tipos: [],
    condiciones: [],
    proveedores: [],
    categorias: [],
    serie: []
  };
  let tiposCatalogo = [];
  let puedeRegistrarCatalogo = false;
  let puedeEditarCatalogo = false;
  let catalogosTipoHerramienta = {
    categorias: [],
    tiposControl: [],
    requiereSerie: [],
    unidades: [],
    estados: []
  };
  let almacenes = [];
  let puedeRegistrarAlmacenes = false;
  let puedeEditarAlmacenes = false;
  let catalogosAlmacenes = {
    sedes: [],
    estados: [],
    responsables: []
  };
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
    backMovementsButton.addEventListener('click', mostrarDashboard);
    newMovementButton.addEventListener('click', abrirNuevoMovimiento);
    refreshMovementsButton.addEventListener('click', cargarMovimientos);
    closeMovementModalButton.addEventListener('click', cerrarFormularioMovimiento);
    cancelMovementFormButton.addEventListener('click', cerrarFormularioMovimiento);
    movementForm.addEventListener('submit', guardarMovimiento);
    formMovementType.addEventListener('change', actualizarReglaMovimiento);
    formMovementArticleType.addEventListener('change', actualizarArticuloMovimiento);

    formMovementOriginType.addEventListener('change', () => actualizarUbicacionMovimiento('origen'));
    formMovementOriginSite.addEventListener('change', () => actualizarUbicacionMovimiento('origen'));
    formMovementOriginEntity.addEventListener('change', () => actualizarResponsableUbicacionMovimiento('origen'));
    formMovementOriginResponsible.addEventListener('change', actualizarResponsablesEntregaRecepcion);
    formMovementOriginExternal.addEventListener('input', actualizarResponsablesEntregaRecepcion);

    formMovementDestinationType.addEventListener('change', () => actualizarUbicacionMovimiento('destino'));
    formMovementDestinationSite.addEventListener('change', () => actualizarUbicacionMovimiento('destino'));
    formMovementDestinationEntity.addEventListener('change', () => actualizarResponsableUbicacionMovimiento('destino'));
    formMovementDestinationResponsible.addEventListener('change', actualizarResponsablesEntregaRecepcion);
    formMovementDestinationExternal.addEventListener('input', actualizarResponsablesEntregaRecepcion);

    formMovementDeliver.addEventListener('input', () => {
      formMovementDeliver.dataset.auto = '';
    });

    formMovementReceive.addEventListener('input', () => {
      formMovementReceive.dataset.auto = '';
    });

    movementModal.addEventListener('click', (event) => {
      if (event.target === movementModal) {
        cerrarFormularioMovimiento();
      }
    });

    [
      movementSearch,
      movementTypeFilter,
      movementSiteFilter,
      movementStateFilter,
      movementDateFrom,
      movementDateTo
    ].forEach((control) => {
      control.addEventListener('input', renderizarMovimientos);
      control.addEventListener('change', renderizarMovimientos);
    });

    backToolsButton.addEventListener('click', mostrarDashboard);
    newToolButton.addEventListener('click', abrirNuevaHerramienta);
    refreshToolsButton.addEventListener('click', cargarHerramientas);
    closeToolModalButton.addEventListener('click', cerrarFormularioHerramienta);
    cancelToolFormButton.addEventListener('click', cerrarFormularioHerramienta);
    toolForm.addEventListener('submit', guardarHerramienta);
    formToolType.addEventListener('change', actualizarRequisitoSerieHerramienta);

    toolModal.addEventListener('click', (event) => {
      if (event.target === toolModal) {
        cerrarFormularioHerramienta();
      }
    });

    [
      toolSearch,
      toolCategoryFilter,
      toolTypeFilter,
      toolConditionFilter,
      toolSeriesFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarHerramientas);
      control.addEventListener('change', renderizarHerramientas);
    });

    backCatalogButton.addEventListener('click', mostrarDashboard);
    newCatalogButton.addEventListener('click', abrirNuevoTipoCatalogo);
    refreshCatalogButton.addEventListener('click', cargarCatalogoHerramientas);
    closeCatalogModalButton.addEventListener('click', cerrarFormularioCatalogo);
    cancelCatalogFormButton.addEventListener('click', cerrarFormularioCatalogo);
    catalogForm.addEventListener('submit', guardarTipoCatalogo);
    formCatalogControl.addEventListener('change', ajustarControlCatalogo);
    formCatalogSeries.addEventListener('change', ajustarSerieCatalogo);

    catalogModal.addEventListener('click', (event) => {
      if (event.target === catalogModal) {
        cerrarFormularioCatalogo();
      }
    });

    [
      catalogSearch,
      catalogCategoryFilter,
      catalogControlFilter,
      catalogSeriesFilter,
      catalogStatusFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarCatalogo);
      control.addEventListener('change', renderizarCatalogo);
    });

    backWarehousesButton.addEventListener('click', mostrarDashboard);
    newWarehouseButton.addEventListener('click', abrirNuevoAlmacen);
    refreshWarehousesButton.addEventListener('click', cargarAlmacenes);
    closeWarehouseModalButton.addEventListener('click', cerrarFormularioAlmacen);
    cancelWarehouseFormButton.addEventListener('click', cerrarFormularioAlmacen);
    warehouseForm.addEventListener('submit', guardarAlmacen);
    formWarehouseSite.addEventListener('change', actualizarResponsablesAlmacenFormulario);

    warehouseModal.addEventListener('click', (event) => {
      if (event.target === warehouseModal) {
        cerrarFormularioAlmacen();
      }
    });

    [
      warehouseSearch,
      warehouseSiteFilter,
      warehouseStatusFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarAlmacenes);
      control.addEventListener('change', renderizarAlmacenes);
    });

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

    if (modulo === 'MOVIMIENTOS') {
      abrirMovimientos();
      return;
    }

    if (modulo === 'HERRAMIENTAS') {
      abrirHerramientas();
      return;
    }

    if (modulo === 'CATALOGO') {
      abrirCatalogoHerramientas();
      return;
    }

    if (modulo === 'ALMACENES') {
      abrirAlmacenes();
      return;
    }

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






  async function abrirMovimientos() {
    dashboardView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    movementsView.hidden = false;

    await cargarMovimientos();
  }

  async function cargarMovimientos() {
    movementsLoading.hidden = false;
    movementsLoading.textContent = 'Cargando movimientos…';
    movementsTable.hidden = true;
    movementsEmpty.hidden = true;
    refreshMovementsButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_movimientos',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los movimientos.'
        );
      }

      movimientos =
        Array.isArray(
          respuesta.movimientos
        )
          ? respuesta.movimientos
          : [];

      puedeRegistrarMovimientos =
        Boolean(
          respuesta.puedeRegistrar
        );

      catalogosMovimientos =
        respuesta.catalogos || {
          tiposMovimiento: [],
          motivos: [],
          estados: [],
          ubicaciones: [],
          reglas: {},
          sedes: [],
          tiposArticulo: [],
          herramientas: [],
          almacenes: [],
          cuadrillas: [],
          tecnicos: [],
          supervisores: [],
          proveedores: []
        };

      newMovementButton.hidden =
        !puedeRegistrarMovimientos;

      actualizarCatalogosMovimientos();
      renderizarMovimientos();
      movementsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      movementsLoading.hidden = false;
      movementsLoading.textContent = error.message;
      movementsTable.hidden = true;

    } finally {
      refreshMovementsButton.disabled = false;
    }
  }

  function actualizarCatalogosMovimientos() {
    llenarSelectObjetosMovimiento(
      movementTypeFilter,
      catalogosMovimientos.tiposMovimiento || [],
      'Todos'
    );

    llenarSelectConTodos(
      movementSiteFilter,
      catalogosMovimientos.sedes || [],
      'Todas'
    );

    llenarSelectObjetosMovimiento(
      movementStateFilter,
      catalogosMovimientos.estados || [],
      'Todos'
    );

    llenarSelectObjetosMovimiento(
      formMovementType,
      catalogosMovimientos.tiposMovimiento || []
    );

    llenarSelectTiposArticuloMovimiento();

    movementProvidersList.innerHTML = '';

    (
      catalogosMovimientos.proveedores || []
    ).forEach(proveedor => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        proveedor;

      movementProvidersList.appendChild(
        option
      );
    });
  }

  function llenarSelectObjetosMovimiento(
    select,
    valores,
    etiquetaTodos
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    if (
      etiquetaTodos !==
      undefined
    ) {
      const optionTodos =
        document.createElement(
          'option'
        );

      optionTodos.value = '';
      optionTodos.textContent =
        etiquetaTodos;

      select.appendChild(
        optionTodos
      );
    }

    valores.forEach(item => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        item.valor ||
        item.value ||
        '';

      option.textContent =
        formatearTexto(
          item.valor ||
          item.value ||
          ''
        );

      if (
        item.descripcion
      ) {
        option.title =
          item.descripcion;
      }

      select.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        select.options
      ).some(option =>
        option.value === actual
      )
    ) {
      select.value =
        actual;
    }
  }

  function llenarSelectTiposArticuloMovimiento() {
    const actual =
      formMovementArticleType.value;

    formMovementArticleType.innerHTML = '';

    (
      catalogosMovimientos.tiposArticulo || []
    )
      .slice()
      .sort((a, b) =>
        String(
          a.tipoHerramienta || ''
        ).localeCompare(
          String(
            b.tipoHerramienta || ''
          ),
          'es'
        )
      )
      .forEach(tipo => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          tipo.idTipo;

        option.textContent =
          `${tipo.tipoHerramienta} · ${formatearTexto(
            tipo.tipoControl
          )}`;

        option.dataset.control =
          tipo.tipoControl;

        option.dataset.unidad =
          tipo.unidadMedida;

        formMovementArticleType.appendChild(
          option
        );
      });

    if (
      actual &&
      Array.from(
        formMovementArticleType.options
      ).some(option =>
        option.value === actual
      )
    ) {
      formMovementArticleType.value =
        actual;
    }
  }

  function renderizarMovimientos() {
    const texto =
      normalizarBusqueda(
        movementSearch.value
      );

    const tipo =
      String(
        movementTypeFilter.value || ''
      ).toUpperCase();

    const sede =
      String(
        movementSiteFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        movementStateFilter.value || ''
      ).toUpperCase();

    const desde =
      movementDateFrom.value;

    const hasta =
      movementDateTo.value;

    const filtrados =
      movimientos.filter(movimiento => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            movimiento.idMovimiento,
            movimiento.tipoMovimiento,
            movimiento.tipoHerramienta,
            movimiento.codigoInterno,
            movimiento.origenResponsable,
            movimiento.destinoResponsable,
            movimiento.numeroCargo,
            movimiento.responsableEntrega,
            movimiento.responsableRecibe
          ].join(' ')).includes(
            texto
          );

        const coincideTipo =
          !tipo ||
          movimiento.tipoMovimiento ===
            tipo;

        const coincideSede =
          !sede ||
          movimiento.origenSede === sede ||
          movimiento.destinoSede === sede;

        const coincideEstado =
          !estado ||
          movimiento.estadoMovimiento ===
            estado;

        const fechaIso =
          convertirFechaMovimientoIso(
            movimiento.fecha
          );

        const coincideDesde =
          !desde ||
          !fechaIso ||
          fechaIso >= desde;

        const coincideHasta =
          !hasta ||
          !fechaIso ||
          fechaIso <= hasta;

        return (
          coincideTexto &&
          coincideTipo &&
          coincideSede &&
          coincideEstado &&
          coincideDesde &&
          coincideHasta
        );
      });

    movementsTableBody.innerHTML = '';

    filtrados.forEach(movimiento => {
      movementsTableBody.appendChild(
        crearFilaMovimiento(
          movimiento
        )
      );
    });

    movementSummaryTotal.textContent =
      String(
        filtrados.length
      );

    movementSummaryConfirmed.textContent =
      String(
        filtrados.filter(item =>
          item.estadoMovimiento ===
          'CONFIRMADO'
        ).length
      );

    movementSummaryUnitary.textContent =
      String(
        filtrados.filter(item =>
          item.tipoControl ===
          'UNITARIO'
        ).length
      );

    movementSummaryQuantity.textContent =
      String(
        filtrados.filter(item =>
          item.tipoControl ===
          'CANTIDAD'
        ).length
      );

    movementsLoading.hidden = true;
    movementsTable.hidden =
      filtrados.length === 0;
    movementsEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaMovimiento(
    movimiento
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaMovimiento =
      document.createElement(
        'td'
      );

    celdaMovimiento.className =
      'movement-main-cell';

    celdaMovimiento.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          movimiento.tipoMovimiento
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          movimiento.fecha,
          movimiento.hora
        ].filter(Boolean).join(' · ')
      )}</small>` +
      `<span class="movement-code">${escaparHtml(
        movimiento.idMovimiento
      )}</span>`;

    fila.appendChild(
      celdaMovimiento
    );

    const celdaArticulo =
      document.createElement(
        'td'
      );

    celdaArticulo.className =
      'movement-article-cell';

    celdaArticulo.innerHTML =
      `<strong>${escaparHtml(
        movimiento.tipoHerramienta ||
        'Sin artículo'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            movimiento.tipoControl
          ),
          movimiento.codigoInterno
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      celdaArticulo
    );

    fila.appendChild(
      crearCeldaUbicacionMovimiento(
        movimiento.origenTipo,
        movimiento.origenSede,
        movimiento.origenCuadrilla,
        movimiento.origenResponsable
      )
    );

    fila.appendChild(
      crearCeldaUbicacionMovimiento(
        movimiento.destinoTipo,
        movimiento.destinoSede,
        movimiento.destinoCuadrilla,
        movimiento.destinoResponsable
      )
    );

    fila.appendChild(
      crearCelda(
        `${formatearCantidadMovimiento(
          movimiento.cantidad
        )} ${formatearTexto(
          movimiento.unidadMedida
        )}`
      )
    );

    const celdaDetalle =
      document.createElement(
        'td'
      );

    celdaDetalle.className =
      'movement-detail-cell';

    celdaDetalle.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          movimiento.motivo
        )
      )}</strong>` +
      `<small>${escaparHtml(
        movimiento.numeroCargo
          ? `Cargo: ${movimiento.numeroCargo}`
          : 'Sin cargo'
      )}</small>`;

    if (
      /^https?:\/\//i.test(
        movimiento.evidenciaUrl || ''
      )
    ) {
      const enlace =
        document.createElement(
          'a'
        );

      enlace.className =
        'movement-evidence-link';

      enlace.href =
        movimiento.evidenciaUrl;

      enlace.target =
        '_blank';

      enlace.rel =
        'noopener noreferrer';

      enlace.textContent =
        'Ver evidencia';

      celdaDetalle.appendChild(
        enlace
      );
    }

    fila.appendChild(
      celdaDetalle
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    const estado =
      movimiento.estadoMovimiento ||
      'REGISTRADO';

    insignia.className =
      'status-badge ' +
      (
        estado === 'CONFIRMADO'
          ? 'status-active'
          : estado === 'ANULADO'
            ? 'status-inactive'
            : ''
      );

    insignia.textContent =
      formatearTexto(
        estado
      );

    celdaEstado.appendChild(
      insignia
    );

    fila.appendChild(
      celdaEstado
    );

    const celdaRegistro =
      document.createElement(
        'td'
      );

    celdaRegistro.className =
      'movement-detail-cell';

    celdaRegistro.innerHTML =
      `<strong>${escaparHtml(
        movimiento.usuarioRegistra ||
        'Sin usuario'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          movimiento.responsableEntrega,
          movimiento.responsableRecibe
        ].filter(Boolean).join(' → ')
      )}</small>`;

    fila.appendChild(
      celdaRegistro
    );

    return fila;
  }

  function crearCeldaUbicacionMovimiento(
    tipo,
    sede,
    cuadrilla,
    responsable
  ) {
    const celda =
      document.createElement(
        'td'
      );

    celda.className =
      'movement-location-cell';

    celda.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          tipo
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            sede
          ),
          cuadrilla,
          responsable
        ].filter(Boolean).join(' · ')
      )}</small>`;

    return celda;
  }

  function formatearCantidadMovimiento(
    valor
  ) {
    const numero =
      Number(
        valor || 0
      );

    return numero.toLocaleString(
      'es-PE',
      {
        minimumFractionDigits:
          Number.isInteger(numero)
            ? 0
            : 2,
        maximumFractionDigits: 2
      }
    );
  }

  function convertirFechaMovimientoIso(
    valor
  ) {
    const texto =
      String(
        valor || ''
      ).trim();

    let coincidencia =
      texto.match(
        /^(\d{4})-(\d{2})-(\d{2})/
      );

    if (coincidencia) {
      return (
        coincidencia[1] +
        '-' +
        coincidencia[2] +
        '-' +
        coincidencia[3]
      );
    }

    coincidencia =
      texto.match(
        /^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})/
      );

    if (!coincidencia) {
      return '';
    }

    return (
      coincidencia[3] +
      '-' +
      String(
        coincidencia[2]
      ).padStart(
        2,
        '0'
      ) +
      '-' +
      String(
        coincidencia[1]
      ).padStart(
        2,
        '0'
      )
    );
  }

  function abrirNuevoMovimiento() {
    movementForm.reset();
    movementFormMessage.textContent = '';

    const ahora =
      new Date();

    const fechaLocal =
      new Date(
        ahora.getTime() -
        ahora.getTimezoneOffset() *
        60000
      );

    formMovementDate.value =
      fechaLocal
        .toISOString()
        .slice(
          0,
          10
        );

    formMovementTime.value =
      String(
        ahora.getHours()
      ).padStart(
        2,
        '0'
      ) +
      ':' +
      String(
        ahora.getMinutes()
      ).padStart(
        2,
        '0'
      );

    actualizarCatalogosMovimientos();

    if (
      formMovementType.options.length
    ) {
      formMovementType.selectedIndex =
        0;
    }

    if (
      formMovementArticleType.options.length
    ) {
      formMovementArticleType.selectedIndex =
        0;
    }

    actualizarReglaMovimiento();
    actualizarArticuloMovimiento();

    movementModal.hidden = false;
    formMovementType.focus();
  }

  function actualizarReglaMovimiento() {
    const tipo =
      formMovementType.value;

    const regla =
      (
        catalogosMovimientos.reglas || {}
      )[tipo];

    if (!regla) {
      llenarSelectValoresMovimiento(
        formMovementOriginType,
        []
      );

      llenarSelectValoresMovimiento(
        formMovementDestinationType,
        []
      );

      llenarSelectValoresMovimiento(
        formMovementReason,
        []
      );

      return;
    }

    llenarSelectValoresMovimiento(
      formMovementOriginType,
      regla.origenTipos || []
    );

    llenarSelectValoresMovimiento(
      formMovementDestinationType,
      regla.destinoTipos || []
    );

    llenarSelectValoresMovimiento(
      formMovementReason,
      regla.motivos || []
    );

    actualizarUbicacionMovimiento(
      'origen'
    );

    actualizarUbicacionMovimiento(
      'destino'
    );
  }

  function llenarSelectValoresMovimiento(
    select,
    valores
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    valores.forEach(valor => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        valor;

      option.textContent =
        formatearTexto(
          valor
        );

      select.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        select.options
      ).some(option =>
        option.value === actual
      )
    ) {
      select.value =
        actual;
    } else if (
      select.options.length
    ) {
      select.selectedIndex =
        0;
    }
  }

  function actualizarArticuloMovimiento() {
    const tipo =
      (
        catalogosMovimientos.tiposArticulo || []
      ).find(item =>
        item.idTipo ===
        formMovementArticleType.value
      );

    if (!tipo) {
      movementToolGroup.hidden = true;
      formMovementQuantity.value = '';
      formMovementUnit.value = '';
      return;
    }

    const esUnitario =
      tipo.tipoControl ===
      'UNITARIO';

    movementToolGroup.hidden =
      !esUnitario;

    formMovementQuantity.disabled =
      esUnitario;

    formMovementQuantity.value =
      esUnitario
        ? '1'
        : (
            formMovementQuantity.value ||
            ''
          );

    formMovementUnit.value =
      formatearTexto(
        tipo.unidadMedida
      );

    formMovementTool.required =
      esUnitario;

    formMovementTool.innerHTML = '';

    if (esUnitario) {
      (
        catalogosMovimientos.herramientas || []
      )
        .filter(herramienta =>
          herramienta.idTipo ===
          tipo.idTipo
        )
        .sort((a, b) =>
          String(
            a.codigoInterno || ''
          ).localeCompare(
            String(
              b.codigoInterno || ''
            ),
            'es'
          )
        )
        .forEach(herramienta => {
          const option =
            document.createElement(
              'option'
            );

          option.value =
            herramienta.idHerramienta;

          const ubicacion =
            herramienta.stock
              ? [
                  herramienta.stock.tipoUbicacion,
                  herramienta.stock.sede,
                  herramienta.stock.responsable
                ]
                  .filter(Boolean)
                  .map(formatearTexto)
                  .join(' · ')
              : 'Sin stock';

          option.textContent =
            `${herramienta.codigoInterno || herramienta.idHerramienta} · ` +
            `${herramienta.marca || 'Sin marca'} · ${ubicacion}`;

          formMovementTool.appendChild(
            option
          );
        });
    }
  }

  function obtenerControlesUbicacionMovimiento(
    lado
  ) {
    if (lado === 'origen') {
      return {
        type:
          formMovementOriginType,
        site:
          formMovementOriginSite,
        entityGroup:
          movementOriginEntityGroup,
        entityLabel:
          movementOriginEntityLabel,
        entity:
          formMovementOriginEntity,
        responsibleGroup:
          movementOriginResponsibleGroup,
        responsible:
          formMovementOriginResponsible,
        externalGroup:
          movementOriginExternalGroup,
        external:
          formMovementOriginExternal
      };
    }

    return {
      type:
        formMovementDestinationType,
      site:
        formMovementDestinationSite,
      entityGroup:
        movementDestinationEntityGroup,
      entityLabel:
        movementDestinationEntityLabel,
      entity:
        formMovementDestinationEntity,
      responsibleGroup:
        movementDestinationResponsibleGroup,
      responsible:
        formMovementDestinationResponsible,
      externalGroup:
        movementDestinationExternalGroup,
      external:
        formMovementDestinationExternal
    };
  }

  function actualizarUbicacionMovimiento(
    lado
  ) {
    const controles =
      obtenerControlesUbicacionMovimiento(
        lado
      );

    const tipo =
      controles.type.value;

    const sedeActual =
      controles.site.value;

    controles.site.innerHTML = '';

    if (tipo === 'LIMA') {
      const option =
        document.createElement(
          'option'
        );

      option.value = 'LIMA';
      option.textContent = 'Lima';

      controles.site.appendChild(
        option
      );

      controles.site.disabled =
        true;

    } else {
      controles.site.disabled =
        false;

      (
        catalogosMovimientos.sedes || []
      ).forEach(sede => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          sede;

        option.textContent =
          formatearTexto(
            sede
          );

        controles.site.appendChild(
          option
        );
      });

      if (
        sedeActual &&
        Array.from(
          controles.site.options
        ).some(option =>
          option.value ===
          sedeActual
        )
      ) {
        controles.site.value =
          sedeActual;
      }
    }

    controles.entity.innerHTML = '';
    controles.responsible.innerHTML = '';
    controles.external.value =
      controles.external.value || '';

    const sede =
      controles.site.value;

    const externo =
      [
        'PROVEEDOR',
        'REPARACION'
      ].includes(
        tipo
      );

    const sinEntidad =
      [
        'LIMA',
        'BAJA'
      ].includes(
        tipo
      );

    controles.externalGroup.hidden =
      !externo;

    controles.external.required =
      externo;

    controles.entityGroup.hidden =
      externo ||
      sinEntidad;

    controles.entity.required =
      !externo &&
      !sinEntidad;

    controles.responsibleGroup.hidden =
      true;

    controles.responsible.required =
      false;

    if (tipo === 'ALMACEN') {
      controles.entityLabel.textContent =
        'Almacén';

      llenarEntidadesMovimiento(
        controles.entity,
        (
          catalogosMovimientos.almacenes || []
        )
          .filter(item =>
            item.sede === sede
          )
          .map(item => ({
            value:
              item.idAlmacen,
            text:
              `${item.nombreAlmacen} · ${item.responsable || 'Sin responsable'}`
          }))
      );
    }

    if (tipo === 'CUADRILLA') {
      controles.entityLabel.textContent =
        'Cuadrilla';

      llenarEntidadesMovimiento(
        controles.entity,
        (
          catalogosMovimientos.cuadrillas || []
        )
          .filter(item =>
            item.sede === sede
          )
          .map(item => ({
            value:
              item.idCuadrilla,
            text:
              `${item.codigoCuadrilla} · ${formatearTexto(
                item.plataforma
              )}`
          }))
      );

      controles.responsibleGroup.hidden =
        false;

      controles.responsible.required =
        true;
    }

    if (tipo === 'TECNICO') {
      controles.entityLabel.textContent =
        'Técnico';

      llenarEntidadesMovimiento(
        controles.entity,
        (
          catalogosMovimientos.tecnicos || []
        )
          .filter(item =>
            item.sede === sede
          )
          .map(item => ({
            value:
              item.dni,
            text:
              `${item.nombre} · ${item.codigoCuadrilla} · ${item.dni}`
          }))
      );
    }

    if (tipo === 'SUPERVISOR') {
      controles.entityLabel.textContent =
        'Supervisor';

      llenarEntidadesMovimiento(
        controles.entity,
        (
          catalogosMovimientos.supervisores || []
        )
          .filter(item =>
            item.sede === sede
          )
          .map(item => ({
            value:
              item.idSupervisor,
            text:
              `${item.nombre} · ${item.dni}`
          }))
      );
    }

    actualizarResponsableUbicacionMovimiento(
      lado
    );
  }

  function llenarEntidadesMovimiento(
    select,
    valores
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    valores.forEach(item => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        item.value;

      option.textContent =
        item.text;

      select.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        select.options
      ).some(option =>
        option.value === actual
      )
    ) {
      select.value =
        actual;
    } else if (
      select.options.length
    ) {
      select.selectedIndex =
        0;
    }
  }

  function actualizarResponsableUbicacionMovimiento(
    lado
  ) {
    const controles =
      obtenerControlesUbicacionMovimiento(
        lado
      );

    if (
      controles.type.value ===
      'CUADRILLA'
    ) {
      const cuadrilla =
        (
          catalogosMovimientos.cuadrillas || []
        ).find(item =>
          item.idCuadrilla ===
          controles.entity.value
        );

      llenarEntidadesMovimiento(
        controles.responsible,
        cuadrilla
          ? cuadrilla.tecnicos.map(tecnico => ({
              value:
                tecnico.dni,
              text:
                `${tecnico.nombre} · ${tecnico.dni}`
            }))
          : []
      );
    }

    actualizarResponsablesEntregaRecepcion();
  }

  function obtenerNombreUbicacionMovimiento(
    lado
  ) {
    const controles =
      obtenerControlesUbicacionMovimiento(
        lado
      );

    const tipo =
      controles.type.value;

    if (
      [
        'PROVEEDOR',
        'REPARACION'
      ].includes(
        tipo
      )
    ) {
      return controles.external.value.trim();
    }

    if (tipo === 'LIMA') {
      return 'LIMA';
    }

    if (tipo === 'BAJA') {
      return 'BAJA';
    }

    if (
      tipo === 'CUADRILLA'
    ) {
      const option =
        controles.responsible.options[
          controles.responsible.selectedIndex
        ];

      return option
        ? option.textContent
            .split(' · ')[0]
        : '';
    }

    const option =
      controles.entity.options[
        controles.entity.selectedIndex
      ];

    return option
      ? option.textContent
          .split(' · ')[0]
      : '';
  }

  function actualizarResponsablesEntregaRecepcion() {
    const entrega =
      obtenerNombreUbicacionMovimiento(
        'origen'
      );

    const recibe =
      obtenerNombreUbicacionMovimiento(
        'destino'
      );

    if (
      !formMovementDeliver.value.trim() ||
      formMovementDeliver.dataset.auto ===
        'SI'
    ) {
      formMovementDeliver.value =
        entrega;

      formMovementDeliver.dataset.auto =
        'SI';
    }

    if (
      !formMovementReceive.value.trim() ||
      formMovementReceive.dataset.auto ===
        'SI'
    ) {
      formMovementReceive.value =
        recibe;

      formMovementReceive.dataset.auto =
        'SI';
    }
  }

  function construirUbicacionMovimientoPayload(
    lado
  ) {
    const controles =
      obtenerControlesUbicacionMovimiento(
        lado
      );

    return {
      tipo:
        controles.type.value,
      sede:
        controles.site.value,
      idEntidad:
        controles.entity.value,
      dniResponsable:
        controles.responsible.value,
      nombreExterno:
        controles.external.value.trim()
    };
  }

  function cerrarFormularioMovimiento() {
    movementModal.hidden = true;
    movementFormMessage.textContent = '';
    formMovementDeliver.dataset.auto = '';
    formMovementReceive.dataset.auto = '';
  }

  async function guardarMovimiento(
    event
  ) {
    event.preventDefault();
    movementFormMessage.textContent = '';

    const tipoArticulo =
      (
        catalogosMovimientos.tiposArticulo || []
      ).find(item =>
        item.idTipo ===
        formMovementArticleType.value
      );

    const payload = {
      accion:
        'guardar_movimiento',
      token:
        auth.token,
      fecha:
        formMovementDate.value,
      hora:
        formMovementTime.value,
      tipoMovimiento:
        formMovementType.value,
      motivo:
        formMovementReason.value,
      idTipo:
        formMovementArticleType.value,
      idHerramienta:
        tipoArticulo &&
        tipoArticulo.tipoControl ===
          'UNITARIO'
          ? formMovementTool.value
          : '',
      cantidad:
        tipoArticulo &&
        tipoArticulo.tipoControl ===
          'UNITARIO'
          ? 1
          : formMovementQuantity.value,
      origen:
        construirUbicacionMovimientoPayload(
          'origen'
        ),
      destino:
        construirUbicacionMovimientoPayload(
          'destino'
        ),
      responsableEntrega:
        formMovementDeliver.value.trim(),
      responsableRecibe:
        formMovementReceive.value.trim(),
      numeroCargo:
        formMovementCargo.value.trim(),
      evidenciaUrl:
        formMovementEvidence.value.trim(),
      observaciones:
        formMovementNotes.value.trim()
    };

    if (
      !payload.fecha ||
      !payload.hora ||
      !payload.tipoMovimiento ||
      !payload.motivo ||
      !payload.idTipo ||
      !payload.responsableEntrega ||
      !payload.responsableRecibe
    ) {
      movementFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    if (
      tipoArticulo &&
      tipoArticulo.tipoControl ===
        'UNITARIO' &&
      !payload.idHerramienta
    ) {
      movementFormMessage.textContent =
        'No hay una herramienta individual seleccionada.';
      return;
    }

    saveMovementButton.disabled = true;
    saveMovementButton.textContent =
      'Registrando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo registrar el movimiento.'
        );
      }

      cerrarFormularioMovimiento();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarMovimientos();

    } catch (error) {
      movementFormMessage.textContent =
        error.message;

    } finally {
      saveMovementButton.disabled = false;
      saveMovementButton.textContent =
        'Registrar movimiento';
    }
  }

  async function abrirHerramientas() {
    dashboardView.hidden = true;
    movementsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    toolsView.hidden = false;

    await cargarHerramientas();
  }

  async function cargarHerramientas() {
    toolsLoading.hidden = false;
    toolsLoading.textContent = 'Cargando herramientas…';
    toolsTable.hidden = true;
    toolsEmpty.hidden = true;
    refreshToolsButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_herramientas',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar las herramientas.'
        );
      }

      herramientas =
        Array.isArray(
          respuesta.herramientas
        )
          ? respuesta.herramientas
          : [];

      puedeRegistrarHerramientas =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarHerramientas =
        Boolean(
          respuesta.puedeEditar
        );

      catalogosHerramientas =
        respuesta.catalogos || {
          tipos: [],
          condiciones: [],
          proveedores: [],
          categorias: [],
          serie: []
        };

      newToolButton.hidden =
        !puedeRegistrarHerramientas;

      actualizarCatalogosHerramientas();
      renderizarHerramientas();
      toolsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      toolsLoading.hidden = false;
      toolsLoading.textContent = error.message;
      toolsTable.hidden = true;

    } finally {
      refreshToolsButton.disabled = false;
    }
  }

  function actualizarCatalogosHerramientas() {
    const tipos =
      Array.isArray(
        catalogosHerramientas.tipos
      )
        ? catalogosHerramientas.tipos
        : [];

    const tiposFiltro =
      tipos.map(tipo => ({
        value:
          tipo.idTipo,
        text:
          tipo.tipoHerramienta
      }));

    llenarSelectObjetosConTodos(
      toolTypeFilter,
      tiposFiltro,
      'Todos'
    );

    llenarSelectConTodos(
      toolCategoryFilter,
      catalogosHerramientas.categorias || [],
      'Todas'
    );

    const condiciones =
      (
        catalogosHerramientas.condiciones || []
      ).map(item =>
        item.condicionFisica
      );

    llenarSelectConTodos(
      toolConditionFilter,
      condiciones,
      'Todas'
    );

    llenarSelectTiposHerramientaFormulario(
      formToolType,
      tipos
    );

    llenarSelectCondicionesHerramienta(
      formToolCondition,
      catalogosHerramientas.condiciones || []
    );

    toolProvidersList.innerHTML = '';

    (
      catalogosHerramientas.proveedores || []
    ).forEach(
      proveedor => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          proveedor;

        toolProvidersList.appendChild(
          option
        );
      }
    );
  }

  function llenarSelectObjetosConTodos(
    select,
    valores,
    etiquetaTodos
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    const todos =
      document.createElement(
        'option'
      );

    todos.value = '';
    todos.textContent =
      etiquetaTodos;

    select.appendChild(
      todos
    );

    valores.forEach(item => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        String(
          item.value || ''
        );

      option.textContent =
        item.text || item.value;

      select.appendChild(
        option
      );
    });

    if (
      Array.from(
        select.options
      ).some(
        option =>
          option.value === actual
      )
    ) {
      select.value =
        actual;
    }
  }

  function llenarSelectTiposHerramientaFormulario(
    select,
    tipos
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    tipos
      .filter(tipo =>
        String(
          tipo.estado || ''
        ).toUpperCase() ===
          'ACTIVO' ||
        tipo.idTipo === actual
      )
      .sort((a, b) =>
        String(
          a.tipoHerramienta || ''
        ).localeCompare(
          String(
            b.tipoHerramienta || ''
          ),
          'es'
        )
      )
      .forEach(tipo => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          tipo.idTipo;

        option.textContent =
          `${tipo.tipoHerramienta} · ${formatearTexto(
            tipo.categoria
          )}`;

        option.dataset.requiereSerie =
          tipo.requiereSerie ||
          'NO';

        select.appendChild(
          option
        );
      });

    if (
      actual &&
      Array.from(
        select.options
      ).some(
        option =>
          option.value === actual
      )
    ) {
      select.value =
        actual;
    } else if (
      select.options.length
    ) {
      select.selectedIndex =
        0;
    }
  }

  function llenarSelectCondicionesHerramienta(
    select,
    condiciones
  ) {
    const actual =
      select.value;

    select.innerHTML = '';

    condiciones
      .filter(item =>
        String(
          item.estado || ''
        ).toUpperCase() ===
          'ACTIVO' ||
        item.condicionFisica === actual
      )
      .forEach(item => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          item.condicionFisica;

        option.textContent =
          formatearTexto(
            item.condicionFisica
          );

        option.title =
          item.descripcion || '';

        select.appendChild(
          option
        );
      });

    if (
      actual &&
      Array.from(
        select.options
      ).some(
        option =>
          option.value === actual
      )
    ) {
      select.value =
        actual;
    } else if (
      Array.from(
        select.options
      ).some(
        option =>
          option.value === 'NUEVA'
      )
    ) {
      select.value = 'NUEVA';
    } else if (
      select.options.length
    ) {
      select.selectedIndex = 0;
    }
  }

  function renderizarHerramientas() {
    const texto =
      normalizarBusqueda(
        toolSearch.value
      );

    const categoria =
      String(
        toolCategoryFilter.value || ''
      ).toUpperCase();

    const idTipo =
      String(
        toolTypeFilter.value || ''
      );

    const condicion =
      String(
        toolConditionFilter.value || ''
      ).toUpperCase();

    const serie =
      String(
        toolSeriesFilter.value || ''
      ).toUpperCase();

    const tiposPorId =
      new Map(
        (
          catalogosHerramientas.tipos || []
        ).map(tipo => [
          tipo.idTipo,
          tipo
        ])
      );

    const filtradas =
      herramientas.filter(
        herramienta => {
          const tipo =
            tiposPorId.get(
              herramienta.idTipo
            ) || {};

          const coincideTexto =
            !texto ||
            normalizarBusqueda([
              herramienta.idHerramienta,
              herramienta.codigoInterno,
              herramienta.tipoHerramienta,
              herramienta.marca,
              herramienta.modelo,
              herramienta.serie,
              herramienta.proveedor,
              herramienta.documentoCompra
            ].join(' ')).includes(
              texto
            );

          const coincideCategoria =
            !categoria ||
            String(
              tipo.categoria || ''
            ).toUpperCase() ===
              categoria;

          const coincideTipo =
            !idTipo ||
            herramienta.idTipo ===
              idTipo;

          const coincideCondicion =
            !condicion ||
            String(
              herramienta.condicionFisica || ''
            ).toUpperCase() ===
              condicion;

          const tieneSerie =
            Boolean(
              String(
                herramienta.serie || ''
              ).trim()
            );

          const coincideSerie =
            !serie ||
            (
              serie === 'CON_SERIE' &&
              tieneSerie
            ) ||
            (
              serie === 'SIN_SERIE' &&
              !tieneSerie
            );

          return (
            coincideTexto &&
            coincideCategoria &&
            coincideTipo &&
            coincideCondicion &&
            coincideSerie
          );
        }
      );

    toolsTableBody.innerHTML = '';

    filtradas.forEach(
      herramienta => {
        toolsTableBody.appendChild(
          crearFilaHerramienta(
            herramienta
          )
        );
      }
    );

    toolsLoading.hidden = true;
    toolsTable.hidden =
      filtradas.length === 0;
    toolsEmpty.hidden =
      filtradas.length !== 0;
  }

  function crearFilaHerramienta(
    herramienta
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaNombre =
      document.createElement(
        'td'
      );

    celdaNombre.className =
      'tool-name-cell';

    celdaNombre.innerHTML =
      `<strong>${escaparHtml(
        herramienta.tipoHerramienta ||
        'Sin tipo'
      )}</strong>` +
      `<small>${escaparHtml(
        herramienta.idHerramienta || ''
      )}</small>` +
      `<span class="tool-code">${escaparHtml(
        herramienta.codigoInterno ||
        'Sin código'
      )}</span>`;

    fila.appendChild(
      celdaNombre
    );

    const celdaDetalle =
      document.createElement(
        'td'
      );

    celdaDetalle.className =
      'tool-detail-cell';

    celdaDetalle.innerHTML =
      `<strong>${escaparHtml(
        herramienta.marca ||
        'Sin marca'
      )}</strong>` +
      `<small>${escaparHtml(
        herramienta.modelo ||
        'Sin modelo'
      )}</small>`;

    fila.appendChild(
      celdaDetalle
    );

    fila.appendChild(
      crearCelda(
        herramienta.serie ||
        'Sin serie'
      )
    );

    const celdaCondicion =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'condition-badge';

    insignia.textContent =
      formatearTexto(
        herramienta.condicionFisica ||
        'Sin condición'
      );

    celdaCondicion.appendChild(
      insignia
    );

    fila.appendChild(
      celdaCondicion
    );

    const celdaCompra =
      document.createElement(
        'td'
      );

    celdaCompra.className =
      'tool-purchase-cell';

    celdaCompra.innerHTML =
      `<strong>${escaparHtml(
        formatearCostoHerramienta(
          herramienta.costoCompra
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          herramienta.fechaCompra,
          herramienta.proveedor
        ].filter(Boolean).join(' · ') ||
        'Sin datos de compra'
      )}</small>`;

    fila.appendChild(
      celdaCompra
    );

    const uso =
      herramienta.uso || {};

    const celdaUso =
      document.createElement(
        'td'
      );

    celdaUso.className =
      'tool-usage-cell';

    celdaUso.innerHTML =
      `<strong>${Number(
        uso.stockRegistros || 0
      )} en stock</strong>` +
      `<small>${Number(
        uso.movimientos || 0
      )} movimientos</small>`;

    fila.appendChild(
      celdaUso
    );

    const celdaAcciones =
      document.createElement(
        'td'
      );

    celdaAcciones.className =
      'actions-cell';

    if (puedeEditarHerramientas) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarHerramienta(
              herramienta
            )
        )
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

  function formatearCostoHerramienta(
    valor
  ) {
    const numero =
      Number(
        valor || 0
      );

    if (
      !Number.isFinite(
        numero
      ) ||
      numero === 0
    ) {
      return 'Sin costo';
    }

    return (
      'S/ ' +
      numero.toLocaleString(
        'es-PE',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      )
    );
  }

  function abrirNuevaHerramienta() {
    toolForm.reset();
    formToolId.value = '';
    formToolCode.value = '';
    toolModalTitle.textContent =
      'Nueva herramienta';
    saveToolButton.textContent =
      'Registrar herramienta';
    toolFormMessage.textContent =
      '';

    actualizarCatalogosHerramientas();
    actualizarRequisitoSerieHerramienta();

    toolModal.hidden = false;
    formToolType.focus();
  }

  function abrirEditarHerramienta(
    herramienta
  ) {
    actualizarCatalogosHerramientas();

    asegurarTipoHerramientaFormulario(
      herramienta
    );

    asegurarCondicionHerramientaFormulario(
      herramienta.condicionFisica
    );

    formToolId.value =
      herramienta.idHerramienta || '';

    formToolCode.value =
      herramienta.codigoInterno || '';

    formToolType.value =
      herramienta.idTipo || '';

    formToolBrand.value =
      herramienta.marca || '';

    formToolModel.value =
      herramienta.modelo || '';

    formToolSeries.value =
      herramienta.serie || '';

    formToolCondition.value =
      herramienta.condicionFisica || '';

    formToolPurchaseDate.value =
      herramienta.fechaCompraIso || '';

    formToolPurchaseCost.value =
      Number(
        herramienta.costoCompra || 0
      ) || '';

    formToolProvider.value =
      herramienta.proveedor || '';

    formToolPurchaseDocument.value =
      herramienta.documentoCompra || '';

    formToolNotes.value =
      herramienta.observaciones || '';

    toolModalTitle.textContent =
      'Editar herramienta';

    saveToolButton.textContent =
      'Guardar cambios';

    toolFormMessage.textContent =
      '';

    actualizarRequisitoSerieHerramienta();

    toolModal.hidden = false;
    formToolCode.focus();
  }

  function asegurarTipoHerramientaFormulario(
    herramienta
  ) {
    const existe =
      Array.from(
        formToolType.options
      ).some(
        option =>
          option.value ===
          herramienta.idTipo
      );

    if (existe) {
      return;
    }

    const option =
      document.createElement(
        'option'
      );

    option.value =
      herramienta.idTipo;

    option.textContent =
      herramienta.tipoHerramienta ||
      herramienta.idTipo;

    option.dataset.requiereSerie =
      'NO';

    formToolType.appendChild(
      option
    );
  }

  function asegurarCondicionHerramientaFormulario(
    condicion
  ) {
    const valor =
      String(
        condicion || ''
      ).toUpperCase();

    if (!valor) {
      return;
    }

    const existe =
      Array.from(
        formToolCondition.options
      ).some(
        option =>
          option.value === valor
      );

    if (existe) {
      return;
    }

    const option =
      document.createElement(
        'option'
      );

    option.value =
      valor;

    option.textContent =
      formatearTexto(
        valor
      );

    formToolCondition.appendChild(
      option
    );
  }

  function actualizarRequisitoSerieHerramienta() {
    const option =
      formToolType.options[
        formToolType.selectedIndex
      ];

    const requiere =
      option &&
      String(
        option.dataset.requiereSerie ||
        'NO'
      ).toUpperCase() ===
        'SI';

    formToolSeries.required =
      requiere;

    formToolSeriesLabel.textContent =
      requiere
        ? 'Serie *'
        : 'Serie';

    formToolSeriesLabel.classList.toggle(
      'required-series',
      requiere
    );

    formToolSeriesHelp.textContent =
      requiere
        ? 'La serie es obligatoria para este tipo.'
        : 'La serie es opcional para este tipo.';
  }

  function cerrarFormularioHerramienta() {
    toolModal.hidden = true;
    toolFormMessage.textContent = '';
  }

  async function guardarHerramienta(
    event
  ) {
    event.preventDefault();
    toolFormMessage.textContent = '';

    const payload = {
      accion:
        'guardar_herramienta',
      token:
        auth.token,
      idHerramienta:
        formToolId.value.trim(),
      codigoInterno:
        formToolCode.value.trim(),
      idTipo:
        formToolType.value,
      marca:
        formToolBrand.value.trim(),
      modelo:
        formToolModel.value.trim(),
      serie:
        formToolSeries.value.trim(),
      condicionFisica:
        formToolCondition.value,
      fechaCompra:
        formToolPurchaseDate.value,
      costoCompra:
        formToolPurchaseCost.value,
      proveedor:
        formToolProvider.value.trim(),
      documentoCompra:
        formToolPurchaseDocument.value.trim(),
      observaciones:
        formToolNotes.value.trim()
    };

    if (
      !payload.idTipo ||
      !payload.condicionFisica
    ) {
      toolFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    if (
      formToolSeries.required &&
      !payload.serie
    ) {
      toolFormMessage.textContent =
        'Este tipo de herramienta requiere número de serie.';
      return;
    }

    saveToolButton.disabled = true;
    saveToolButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar la herramienta.'
        );
      }

      if (respuesta.herramienta) {
        incorporarHerramientaLocal(
          respuesta.herramienta
        );
      }

      cerrarFormularioHerramienta();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarHerramientas();

    } catch (error) {
      toolFormMessage.textContent =
        error.message;

    } finally {
      saveToolButton.disabled = false;

      saveToolButton.textContent =
        formToolId.value
          ? 'Guardar cambios'
          : 'Registrar herramienta';
    }
  }

  function incorporarHerramientaLocal(
    herramienta
  ) {
    const id =
      String(
        herramienta.idHerramienta || ''
      );

    const indice =
      herramientas.findIndex(
        item =>
          String(
            item.idHerramienta || ''
          ) === id
      );

    if (indice === -1) {
      herramientas.unshift(
        herramienta
      );
    } else {
      herramientas[indice] = {
        ...herramientas[indice],
        ...herramienta
      };
    }

    renderizarHerramientas();
  }

  async function abrirCatalogoHerramientas() {
    dashboardView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    catalogView.hidden = false;

    await cargarCatalogoHerramientas();
  }

  async function cargarCatalogoHerramientas() {
    catalogLoading.hidden = false;
    catalogLoading.textContent = 'Cargando catálogo…';
    catalogTable.hidden = true;
    catalogEmpty.hidden = true;
    refreshCatalogButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_catalogo_herramientas',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cargar el catálogo.'
        );
      }

      tiposCatalogo =
        Array.isArray(
          respuesta.tipos
        )
          ? respuesta.tipos
          : [];

      puedeRegistrarCatalogo =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarCatalogo =
        Boolean(
          respuesta.puedeEditar
        );

      catalogosTipoHerramienta =
        respuesta.catalogos || {
          categorias: [],
          tiposControl: [],
          requiereSerie: [],
          unidades: [],
          estados: []
        };

      newCatalogButton.hidden =
        !puedeRegistrarCatalogo;

      actualizarCatalogosTipoHerramienta();
      renderizarCatalogo();
      catalogLoading.hidden = true;

    } catch (error) {
      console.error(error);
      catalogLoading.hidden = false;
      catalogLoading.textContent = error.message;
      catalogTable.hidden = true;

    } finally {
      refreshCatalogButton.disabled = false;
    }
  }

  function actualizarCatalogosTipoHerramienta() {
    llenarSelectConTodos(
      catalogCategoryFilter,
      catalogosTipoHerramienta.categorias || [],
      'Todas'
    );

    llenarSelectConTodos(
      catalogControlFilter,
      catalogosTipoHerramienta.tiposControl || [],
      'Todos'
    );

    llenarSelectFormulario(
      formCatalogControl,
      catalogosTipoHerramienta.tiposControl || [
        'UNITARIO',
        'CANTIDAD'
      ]
    );

    llenarSelectFormulario(
      formCatalogUnit,
      catalogosTipoHerramienta.unidades || [
        'UNIDAD',
        'PAR'
      ]
    );

    catalogCategoriesList.innerHTML = '';

    (
      catalogosTipoHerramienta.categorias || []
    ).forEach(
      categoria => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          categoria;

        catalogCategoriesList
          .appendChild(
            option
          );
      }
    );
  }

  function renderizarCatalogo() {
    const texto =
      normalizarBusqueda(
        catalogSearch.value
      );

    const categoria =
      String(
        catalogCategoryFilter.value || ''
      ).toUpperCase();

    const control =
      String(
        catalogControlFilter.value || ''
      ).toUpperCase();

    const serie =
      String(
        catalogSeriesFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        catalogStatusFilter.value || ''
      ).toUpperCase();

    const filtrados =
      tiposCatalogo.filter(
        tipo => {
          const coincideTexto =
            !texto ||
            normalizarBusqueda([
              tipo.idTipo,
              tipo.tipoHerramienta,
              tipo.categoria,
              tipo.observaciones
            ].join(' ')).includes(
              texto
            );

          const coincideCategoria =
            !categoria ||
            String(
              tipo.categoria || ''
            ).toUpperCase() ===
              categoria;

          const coincideControl =
            !control ||
            String(
              tipo.tipoControl || ''
            ).toUpperCase() ===
              control;

          const coincideSerie =
            !serie ||
            String(
              tipo.requiereSerie || ''
            ).toUpperCase() ===
              serie;

          const coincideEstado =
            !estado ||
            String(
              tipo.estado || ''
            ).toUpperCase() ===
              estado;

          return (
            coincideTexto &&
            coincideCategoria &&
            coincideControl &&
            coincideSerie &&
            coincideEstado
          );
        }
      );

    catalogTableBody.innerHTML = '';

    filtrados.forEach(
      tipo => {
        catalogTableBody.appendChild(
          crearFilaCatalogo(
            tipo
          )
        );
      }
    );

    catalogLoading.hidden = true;
    catalogTable.hidden =
      filtrados.length === 0;
    catalogEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaCatalogo(
    tipo
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaNombre =
      document.createElement(
        'td'
      );

    celdaNombre.className =
      'catalog-name-cell';

    celdaNombre.innerHTML =
      `<strong>${escaparHtml(
        tipo.tipoHerramienta ||
        'Sin nombre'
      )}</strong>` +
      `<small>${escaparHtml(
        tipo.idTipo || ''
      )}</small>`;

    fila.appendChild(
      celdaNombre
    );

    fila.appendChild(
      crearCelda(
        formatearTexto(
          tipo.categoria
        )
      )
    );

    const celdaControl =
      document.createElement(
        'td'
      );

    const control =
      String(
        tipo.tipoControl || ''
      ).toUpperCase();

    const insigniaControl =
      document.createElement(
        'span'
      );

    insigniaControl.className =
      'control-badge ' +
      (
        control === 'UNITARIO'
          ? 'control-unitario'
          : 'control-cantidad'
      );

    insigniaControl.textContent =
      formatearTexto(
        control
      );

    celdaControl.appendChild(
      insigniaControl
    );

    fila.appendChild(
      celdaControl
    );

    const celdaSerie =
      document.createElement(
        'td'
      );

    const requiereSerie =
      String(
        tipo.requiereSerie || 'NO'
      ).toUpperCase();

    const insigniaSerie =
      document.createElement(
        'span'
      );

    insigniaSerie.className =
      'series-badge ' +
      (
        requiereSerie === 'SI'
          ? 'series-yes'
          : 'series-no'
      );

    insigniaSerie.textContent =
      requiereSerie === 'SI'
        ? 'Sí'
        : 'No';

    celdaSerie.appendChild(
      insigniaSerie
    );

    fila.appendChild(
      celdaSerie
    );

    const celdaUnidad =
      document.createElement(
        'td'
      );

    const insigniaUnidad =
      document.createElement(
        'span'
      );

    insigniaUnidad.className =
      'unit-badge';

    insigniaUnidad.textContent =
      formatearTexto(
        tipo.unidadMedida
      );

    celdaUnidad.appendChild(
      insigniaUnidad
    );

    fila.appendChild(
      celdaUnidad
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const estado =
      String(
        tipo.estado || ''
      ).toUpperCase();

    const insigniaEstado =
      document.createElement(
        'span'
      );

    insigniaEstado.className =
      'status-badge ' +
      (
        estado === 'ACTIVO'
          ? 'status-active'
          : 'status-inactive'
      );

    insigniaEstado.textContent =
      formatearTexto(
        estado ||
        'Sin estado'
      );

    celdaEstado.appendChild(
      insigniaEstado
    );

    fila.appendChild(
      celdaEstado
    );

    const uso =
      tipo.uso || {};

    const celdaUso =
      document.createElement(
        'td'
      );

    celdaUso.className =
      'catalog-usage-cell';

    celdaUso.innerHTML =
      `<strong>${Number(
        uso.herramientas || 0
      )} herramientas</strong>` +
      `<small>${Number(
        uso.stockCantidad || 0
      )} en stock · ${Number(
        uso.movimientos || 0
      )} movimientos</small>`;

    fila.appendChild(
      celdaUso
    );

    const celdaAcciones =
      document.createElement(
        'td'
      );

    celdaAcciones.className =
      'actions-cell';

    if (puedeEditarCatalogo) {
      const botonEditar =
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarTipoCatalogo(
              tipo
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
            cambiarEstadoTipoCatalogo(
              tipo,
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

  function abrirNuevoTipoCatalogo() {
    catalogForm.reset();
    formCatalogId.value = '';
    formCatalogStatus.value = 'ACTIVO';
    formCatalogSeries.value = 'NO';
    catalogModalTitle.textContent =
      'Nuevo tipo de herramienta';
    saveCatalogButton.textContent =
      'Registrar tipo';
    catalogFormMessage.textContent =
      '';

    actualizarCatalogosTipoHerramienta();

    if (
      formCatalogControl.options.length
    ) {
      formCatalogControl.value =
        'UNITARIO';
    }

    ajustarControlCatalogo();

    catalogModal.hidden = false;
    formCatalogName.focus();
  }

  function abrirEditarTipoCatalogo(
    tipo
  ) {
    actualizarCatalogosTipoHerramienta();

    formCatalogId.value =
      tipo.idTipo || '';

    formCatalogName.value =
      tipo.tipoHerramienta || '';

    formCatalogCategory.value =
      tipo.categoria || '';

    asegurarOpcionSelect(
      formCatalogControl,
      tipo.tipoControl
    );

    formCatalogControl.value =
      String(
        tipo.tipoControl || ''
      ).toUpperCase();

    asegurarOpcionSelect(
      formCatalogUnit,
      tipo.unidadMedida
    );

    formCatalogUnit.value =
      String(
        tipo.unidadMedida || ''
      ).toUpperCase();

    formCatalogSeries.value =
      String(
        tipo.requiereSerie ||
        'NO'
      ).toUpperCase();

    formCatalogStatus.value =
      String(
        tipo.estado ||
        'ACTIVO'
      ).toUpperCase();

    formCatalogNotes.value =
      tipo.observaciones || '';

    catalogModalTitle.textContent =
      'Editar tipo de herramienta';

    saveCatalogButton.textContent =
      'Guardar cambios';

    catalogFormMessage.textContent =
      '';

    ajustarControlCatalogo();

    catalogModal.hidden = false;
    formCatalogName.focus();
  }

  function asegurarOpcionSelect(
    select,
    valor
  ) {
    const valorNormalizado =
      String(
        valor || ''
      ).toUpperCase();

    if (!valorNormalizado) {
      return;
    }

    const existe =
      Array.from(
        select.options
      ).some(
        option =>
          option.value ===
          valorNormalizado
      );

    if (!existe) {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        valorNormalizado;

      option.textContent =
        formatearTexto(
          valorNormalizado
        );

      select.appendChild(
        option
      );
    }
  }

  function ajustarControlCatalogo() {
    const control =
      String(
        formCatalogControl.value || ''
      ).toUpperCase();

    if (control === 'UNITARIO') {
      asegurarOpcionSelect(
        formCatalogUnit,
        'UNIDAD'
      );

      formCatalogUnit.value =
        'UNIDAD';

      formCatalogUnit.disabled =
        true;

    } else {
      formCatalogUnit.disabled =
        false;

      if (
        formCatalogSeries.value ===
        'SI'
      ) {
        formCatalogSeries.value =
          'NO';
      }
    }
  }

  function ajustarSerieCatalogo() {
    if (
      formCatalogSeries.value ===
      'SI'
    ) {
      formCatalogControl.value =
        'UNITARIO';

      ajustarControlCatalogo();
    }
  }

  function cerrarFormularioCatalogo() {
    catalogModal.hidden = true;
    catalogFormMessage.textContent = '';
    formCatalogUnit.disabled = false;
  }

  async function guardarTipoCatalogo(
    event
  ) {
    event.preventDefault();
    catalogFormMessage.textContent =
      '';

    const payload = {
      accion:
        'guardar_tipo_herramienta',
      token:
        auth.token,
      idTipo:
        formCatalogId.value.trim(),
      tipoHerramienta:
        formCatalogName.value.trim(),
      categoria:
        formCatalogCategory.value.trim(),
      tipoControl:
        formCatalogControl.value,
      unidadMedida:
        formCatalogUnit.value,
      requiereSerie:
        formCatalogSeries.value,
      estado:
        formCatalogStatus.value,
      observaciones:
        formCatalogNotes.value.trim()
    };

    if (
      !payload.tipoHerramienta ||
      !payload.categoria ||
      !payload.tipoControl ||
      !payload.unidadMedida
    ) {
      catalogFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    saveCatalogButton.disabled = true;
    saveCatalogButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el tipo de herramienta.'
        );
      }

      if (respuesta.tipo) {
        incorporarTipoCatalogoLocal(
          respuesta.tipo
        );
      }

      cerrarFormularioCatalogo();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarCatalogoHerramientas();

    } catch (error) {
      catalogFormMessage.textContent =
        error.message;

    } finally {
      saveCatalogButton.disabled =
        false;

      saveCatalogButton.textContent =
        formCatalogId.value
          ? 'Guardar cambios'
          : 'Registrar tipo';
    }
  }

  function incorporarTipoCatalogoLocal(
    tipo
  ) {
    const id =
      String(
        tipo.idTipo || ''
      );

    const indice =
      tiposCatalogo.findIndex(
        item =>
          String(
            item.idTipo || ''
          ) === id
      );

    if (indice === -1) {
      tiposCatalogo.unshift(
        tipo
      );
    } else {
      tiposCatalogo[indice] = {
        ...tiposCatalogo[indice],
        ...tipo
      };
    }

    renderizarCatalogo();
  }

  async function cambiarEstadoTipoCatalogo(
    tipo,
    estado
  ) {
    const accion =
      estado === 'ACTIVO'
        ? 'activar'
        : 'inactivar';

    const confirmado =
      window.confirm(
        `¿Deseas ${accion} el tipo ` +
        `${tipo.tipoHerramienta}?`
      );

    if (!confirmado) {
      return;
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_tipo_herramienta',
          token:
            auth.token,
          idTipo:
            tipo.idTipo,
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

      await cargarCatalogoHerramientas();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  async function abrirAlmacenes() {
    dashboardView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    warehousesView.hidden = false;

    await cargarAlmacenes();
  }

  async function cargarAlmacenes() {
    warehousesLoading.hidden = false;
    warehousesLoading.textContent = 'Cargando almacenes…';
    warehousesTable.hidden = true;
    warehousesEmpty.hidden = true;
    refreshWarehousesButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_almacenes',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los almacenes.'
        );
      }

      almacenes =
        Array.isArray(
          respuesta.almacenes
        )
          ? respuesta.almacenes
          : [];

      puedeRegistrarAlmacenes =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarAlmacenes =
        Boolean(
          respuesta.puedeEditar
        );

      catalogosAlmacenes =
        respuesta.catalogos || {
          sedes: [],
          estados: [],
          responsables: []
        };

      newWarehouseButton.hidden =
        !puedeRegistrarAlmacenes;

      actualizarCatalogosAlmacenes();
      renderizarAlmacenes();
      warehousesLoading.hidden = true;

    } catch (error) {
      console.error(error);
      warehousesLoading.hidden = false;
      warehousesLoading.textContent = error.message;
      warehousesTable.hidden = true;

    } finally {
      refreshWarehousesButton.disabled = false;
    }
  }

  function actualizarCatalogosAlmacenes() {
    llenarSelectConTodos(
      warehouseSiteFilter,
      catalogosAlmacenes.sedes || [],
      'Todas'
    );

    llenarSelectFormulario(
      formWarehouseSite,
      catalogosAlmacenes.sedes || []
    );

    actualizarResponsablesAlmacenFormulario();
  }

  function actualizarResponsablesAlmacenFormulario(
    responsableActual = ''
  ) {
    const sede =
      String(
        formWarehouseSite.value || ''
      ).toUpperCase();

    const actual =
      responsableActual ||
      formWarehouseResponsible.value;

    const responsables =
      Array.isArray(
        catalogosAlmacenes.responsables
      )
        ? catalogosAlmacenes.responsables
        : [];

    const compatibles =
      responsables.filter(
        responsable => {
          const sedeBase =
            String(
              responsable.sedeBase || ''
            ).toUpperCase();

          return (
            !sede ||
            !sedeBase ||
            sedeBase === 'ZONA_NORTE' ||
            sedeBase === sede
          );
        }
      );

    formWarehouseResponsible.innerHTML = '';

    compatibles
      .sort((a, b) =>
        String(a.nombre || '')
          .localeCompare(
            String(b.nombre || ''),
            'es'
          )
      )
      .forEach(
        responsable => {
          const option =
            document.createElement(
              'option'
            );

          option.value =
            responsable.nombre || '';

          const sedeTexto =
            responsable.sedeBase
              ? ` · ${formatearTexto(
                  responsable.sedeBase
                )}`
              : '';

          option.textContent =
            `${responsable.nombre}${sedeTexto}`;

          formWarehouseResponsible
            .appendChild(option);
        }
      );

    if (
      actual &&
      !Array.from(
        formWarehouseResponsible.options
      ).some(
        option =>
          option.value === actual
      )
    ) {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        actual;

      option.textContent =
        actual;

      formWarehouseResponsible
        .appendChild(option);
    }

    if (
      actual &&
      Array.from(
        formWarehouseResponsible.options
      ).some(
        option =>
          option.value === actual
      )
    ) {
      formWarehouseResponsible.value =
        actual;
    } else if (
      formWarehouseResponsible.options.length
    ) {
      formWarehouseResponsible.selectedIndex =
        0;
    }
  }

  function renderizarAlmacenes() {
    const texto =
      normalizarBusqueda(
        warehouseSearch.value
      );

    const sede =
      String(
        warehouseSiteFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        warehouseStatusFilter.value || ''
      ).toUpperCase();

    const filtrados =
      almacenes.filter(
        almacen => {
          const coincideTexto =
            !texto ||
            normalizarBusqueda([
              almacen.nombreAlmacen,
              almacen.responsable,
              almacen.idAlmacen,
              almacen.observaciones
            ].join(' ')).includes(
              texto
            );

          const coincideSede =
            !sede ||
            String(
              almacen.sede || ''
            ).toUpperCase() === sede;

          const coincideEstado =
            !estado ||
            String(
              almacen.estado || ''
            ).toUpperCase() === estado;

          return (
            coincideTexto &&
            coincideSede &&
            coincideEstado
          );
        }
      );

    warehousesTableBody.innerHTML = '';

    filtrados.forEach(
      almacen => {
        warehousesTableBody.appendChild(
          crearFilaAlmacen(
            almacen
          )
        );
      }
    );

    warehousesLoading.hidden = true;
    warehousesTable.hidden =
      filtrados.length === 0;
    warehousesEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaAlmacen(
    almacen
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaNombre =
      document.createElement(
        'td'
      );

    celdaNombre.className =
      'warehouse-name-cell';

    celdaNombre.innerHTML =
      `<strong>${escaparHtml(
        almacen.nombreAlmacen ||
        'Sin nombre'
      )}</strong>` +
      `<small>${escaparHtml(
        almacen.idAlmacen || ''
      )}</small>`;

    fila.appendChild(
      celdaNombre
    );

    fila.appendChild(
      crearCelda(
        formatearTexto(
          almacen.sede
        )
      )
    );

    fila.appendChild(
      crearCelda(
        almacen.responsable ||
        'Sin responsable'
      )
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const estado =
      String(
        almacen.estado || ''
      ).toUpperCase();

    const insignia =
      document.createElement(
        'span'
      );

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

    const celdaObservaciones =
      document.createElement(
        'td'
      );

    celdaObservaciones.className =
      'warehouse-notes';

    celdaObservaciones.textContent =
      almacen.observaciones ||
      'Sin observaciones';

    fila.appendChild(
      celdaObservaciones
    );

    const celdaAcciones =
      document.createElement(
        'td'
      );

    celdaAcciones.className =
      'actions-cell';

    if (puedeEditarAlmacenes) {
      const botonEditar =
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarAlmacen(
              almacen
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
            cambiarEstadoAlmacen(
              almacen,
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

  function abrirNuevoAlmacen() {
    warehouseForm.reset();
    formWarehouseId.value = '';
    formWarehouseStatus.value = 'ACTIVO';
    warehouseModalTitle.textContent =
      'Nuevo almacén';
    saveWarehouseButton.textContent =
      'Registrar almacén';
    warehouseFormMessage.textContent =
      '';

    actualizarCatalogosAlmacenes();

    if (
      formWarehouseSite.options.length
    ) {
      formWarehouseSite.selectedIndex =
        0;
    }

    actualizarResponsablesAlmacenFormulario();

    warehouseModal.hidden = false;
    formWarehouseName.focus();
  }

  function abrirEditarAlmacen(
    almacen
  ) {
    actualizarCatalogosAlmacenes();

    formWarehouseId.value =
      almacen.idAlmacen || '';

    formWarehouseName.value =
      almacen.nombreAlmacen || '';

    formWarehouseSite.value =
      String(
        almacen.sede || ''
      ).toUpperCase();

    formWarehouseStatus.value =
      String(
        almacen.estado ||
        'ACTIVO'
      ).toUpperCase();

    formWarehouseNotes.value =
      almacen.observaciones || '';

    actualizarResponsablesAlmacenFormulario(
      almacen.responsable || ''
    );

    warehouseModalTitle.textContent =
      'Editar almacén';

    saveWarehouseButton.textContent =
      'Guardar cambios';

    warehouseFormMessage.textContent =
      '';

    warehouseModal.hidden = false;
    formWarehouseName.focus();
  }

  function cerrarFormularioAlmacen() {
    warehouseModal.hidden = true;
    warehouseFormMessage.textContent = '';
  }

  async function guardarAlmacen(
    event
  ) {
    event.preventDefault();
    warehouseFormMessage.textContent =
      '';

    const payload = {
      accion:
        'guardar_almacen',
      token:
        auth.token,
      idAlmacen:
        formWarehouseId.value.trim(),
      nombreAlmacen:
        formWarehouseName.value.trim(),
      sede:
        formWarehouseSite.value,
      responsable:
        formWarehouseResponsible.value,
      estado:
        formWarehouseStatus.value,
      observaciones:
        formWarehouseNotes.value.trim()
    };

    if (
      !payload.nombreAlmacen ||
      !payload.sede ||
      !payload.responsable
    ) {
      warehouseFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    saveWarehouseButton.disabled = true;
    saveWarehouseButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el almacén.'
        );
      }

      if (respuesta.almacen) {
        incorporarAlmacenLocal(
          respuesta.almacen
        );
      }

      cerrarFormularioAlmacen();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarAlmacenes();

    } catch (error) {
      warehouseFormMessage.textContent =
        error.message;

    } finally {
      saveWarehouseButton.disabled =
        false;

      saveWarehouseButton.textContent =
        formWarehouseId.value
          ? 'Guardar cambios'
          : 'Registrar almacén';
    }
  }

  function incorporarAlmacenLocal(
    almacen
  ) {
    const id =
      String(
        almacen.idAlmacen || ''
      );

    const indice =
      almacenes.findIndex(
        item =>
          String(
            item.idAlmacen || ''
          ) === id
      );

    if (indice === -1) {
      almacenes.unshift(
        almacen
      );
    } else {
      almacenes[indice] = {
        ...almacenes[indice],
        ...almacen
      };
    }

    renderizarAlmacenes();
  }

  async function cambiarEstadoAlmacen(
    almacen,
    estado
  ) {
    const accion =
      estado === 'ACTIVO'
        ? 'activar'
        : 'inactivar';

    const confirmado =
      window.confirm(
        `¿Deseas ${accion} el almacén ` +
        `${almacen.nombreAlmacen}?`
      );

    if (!confirmado) {
      return;
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_almacen',
          token:
            auth.token,
          idAlmacen:
            almacen.idAlmacen,
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

      await cargarAlmacenes();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  async function abrirSupervisores() {
    dashboardView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
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
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    usersView.hidden = true;
    crewsView.hidden = false;
    await cargarCuadrillas();
  }

  async function cargarCuadrillas(
    opciones = {}
  ) {
    const preservarEnError =
      Boolean(
        opciones.preservarEnError
      );
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

      if (
        preservarEnError &&
        cuadrillas.length
      ) {
        crewsLoading.hidden = true;
        renderizarCuadrillas();

        mostrarToast(
          'Registro guardado. La actualización automática se reintentará al pulsar Actualizar.'
        );

        return false;
      }

      crewsLoading.hidden = false;
      crewsLoading.textContent = error.message;
      crewsTable.hidden = true;

      return false;

    } finally {
      refreshCrewsButton.disabled = false;
    }

    return true;
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
      estado: formCrewStatus.value || 'ACTIVO',
      observaciones: formCrewNotes.value.trim()
    };

    if (
      !payload.codigoCuadrilla ||
      !payload.sede ||
      !payload.plataforma ||
      !payload.tecnico1 ||
      !payload.dniTecnico1
    ) {
      crewFormMessage.textContent =
        'Completa los campos obligatorios.';
      return;
    }

    saveCrewButton.disabled = true;
    saveCrewButton.textContent = 'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar la cuadrilla.'
        );
      }

      if (respuesta.cuadrilla) {
        incorporarCuadrillaLocal(
          respuesta.cuadrilla
        );
      }

      cerrarFormularioCuadrilla();
      mostrarToast(
        respuesta.mensaje
      );

      await cargarCuadrillas({
        preservarEnError: true
      });

    } catch (error) {
      console.error(error);

      const encontrada =
        await verificarCuadrillaGuardada(
          payload
        );

      if (encontrada) {
        cerrarFormularioCuadrilla();

        mostrarToast(
          'La cuadrilla quedó registrada y fue verificada correctamente.'
        );

        return;
      }

      crewFormMessage.textContent =
        error.message;

    } finally {
      saveCrewButton.disabled = false;

      saveCrewButton.textContent =
        formCrewId.value
          ? 'Guardar cambios'
          : 'Registrar cuadrilla';
    }
  }

  function incorporarCuadrillaLocal(
    cuadrilla
  ) {
    const id =
      String(
        cuadrilla.idCuadrilla || ''
      ).trim();

    const codigo =
      String(
        cuadrilla.codigoCuadrilla || ''
      )
        .trim()
        .toUpperCase();

    const indice =
      cuadrillas.findIndex(
        item =>
          (
            id &&
            String(
              item.idCuadrilla || ''
            ) === id
          ) ||
          (
            codigo &&
            String(
              item.codigoCuadrilla || ''
            )
              .trim()
              .toUpperCase() ===
              codigo
          )
      );

    const registro = {
      ...cuadrilla,
      estado:
        String(
          cuadrilla.estado ||
          'ACTIVO'
        ).toUpperCase()
    };

    if (indice === -1) {
      cuadrillas.unshift(
        registro
      );
    } else {
      cuadrillas[indice] = {
        ...cuadrillas[indice],
        ...registro
      };
    }

    renderizarCuadrillas();
  }

  async function verificarCuadrillaGuardada(
    payload
  ) {
    try {
      await esperar(
        700
      );

      const respuesta =
        await solicitarApi({
          accion:
            'listar_cuadrillas',
          token:
            auth.token
        });

      if (
        !respuesta.correcto ||
        !Array.isArray(
          respuesta.cuadrillas
        )
      ) {
        return false;
      }

      cuadrillas =
        respuesta.cuadrillas;

      catalogosCuadrillas =
        respuesta.catalogos ||
        catalogosCuadrillas;

      puedeRegistrarCuadrillas =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarCuadrillas =
        Boolean(
          respuesta.puedeEditar
        );

      actualizarCatalogosCuadrillas();
      renderizarCuadrillas();

      const idBuscado =
        String(
          payload.idCuadrilla || ''
        ).trim();

      const codigoBuscado =
        String(
          payload.codigoCuadrilla || ''
        )
          .trim()
          .toUpperCase();

      return cuadrillas.some(
        cuadrilla =>
          (
            idBuscado &&
            String(
              cuadrilla.idCuadrilla || ''
            ) === idBuscado
          ) ||
          (
            codigoBuscado &&
            String(
              cuadrilla.codigoCuadrilla || ''
            )
              .trim()
              .toUpperCase() ===
              codigoBuscado
          )
      );

    } catch (error) {
      console.warn(
        'No se pudo verificar automáticamente la cuadrilla.',
        error
      );

      return false;
    }
  }

  function esperar(
    milisegundos
  ) {
    return new Promise(
      resolver =>
        window.setTimeout(
          resolver,
          milisegundos
        )
    );
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
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = false;
    await cargarUsuarios();
  }

  function mostrarDashboard() {
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
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
    movimientos = [];
    herramientas = [];
    tiposCatalogo = [];
    almacenes = [];
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
