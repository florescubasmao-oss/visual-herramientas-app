(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;

  const loginView = document.getElementById('loginView');
  const appView = document.getElementById('appView');
  const dashboardView = document.getElementById('dashboardView');
  const administrationView = document.getElementById('administrationView');
  const reportsView = document.getElementById('reportsView');
  const alertsView = document.getElementById('alertsView');
  const bajasView = document.getElementById('bajasView');
  const maintenanceView = document.getElementById('maintenanceView');
  const inventoriesView = document.getElementById('inventoriesView');
  const cargosView = document.getElementById('cargosView');
  const stockView = document.getElementById('stockView');
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
  const appVersion = document.getElementById('appVersion');
  const userName = document.getElementById('userName');
  const userProfile = document.getElementById('userProfile');
  const welcomeText = document.getElementById('welcomeText');
  const toast = document.getElementById('toast');

  const backAdministrationButton = document.getElementById('backAdministrationButton');
  const newProfileButton = document.getElementById('newProfileButton');
  const refreshAdministrationButton = document.getElementById('refreshAdministrationButton');
  const administrationSummaryProfiles = document.getElementById('administrationSummaryProfiles');
  const administrationSummaryModules = document.getElementById('administrationSummaryModules');
  const administrationSummaryUsers = document.getElementById('administrationSummaryUsers');
  const administrationSummarySheets = document.getElementById('administrationSummarySheets');
  const administrationTabButtons = Array.from(document.querySelectorAll('[data-administration-tab]'));
  const administrationPermissionsPanel = document.getElementById('administrationPermissionsPanel');
  const administrationDiagnosticsPanel = document.getElementById('administrationDiagnosticsPanel');
  const administrationProfileSelect = document.getElementById('administrationProfileSelect');
  const administrationProfileState = document.getElementById('administrationProfileState');
  const administrationProfileUsers = document.getElementById('administrationProfileUsers');
  const administrationProfileCoverage = document.getElementById('administrationProfileCoverage');
  const saveAdministrationPermissionsButton = document.getElementById('saveAdministrationPermissionsButton');
  const administrationProtectedMessage = document.getElementById('administrationProtectedMessage');
  const administrationLoading = document.getElementById('administrationLoading');
  const administrationPermissionsTable = document.getElementById('administrationPermissionsTable');
  const administrationPermissionsBody = document.getElementById('administrationPermissionsBody');
  const administrationPermissionsEmpty = document.getElementById('administrationPermissionsEmpty');
  const administrationSystemName = document.getElementById('administrationSystemName');
  const administrationSystemVersion = document.getElementById('administrationSystemVersion');
  const administrationSystemDatabase = document.getElementById('administrationSystemDatabase');
  const administrationSystemTimezone = document.getElementById('administrationSystemTimezone');
  const administrationSystemSession = document.getElementById('administrationSystemSession');
  const administrationSheetsBody = document.getElementById('administrationSheetsBody');
  const administrationProfilesBody = document.getElementById('administrationProfilesBody');

  const profileModal = document.getElementById('profileModal');
  const closeProfileModalButton = document.getElementById('closeProfileModalButton');
  const cancelProfileFormButton = document.getElementById('cancelProfileFormButton');
  const profileForm = document.getElementById('profileForm');
  const formProfileName = document.getElementById('formProfileName');
  const formProfileSource = document.getElementById('formProfileSource');
  const formProfileState = document.getElementById('formProfileState');
  const profileFormMessage = document.getElementById('profileFormMessage');
  const saveProfileButton = document.getElementById('saveProfileButton');

  const backReportsButton = document.getElementById('backReportsButton');
  const downloadReportsButton = document.getElementById('downloadReportsButton');
  const refreshReportsButton = document.getElementById('refreshReportsButton');
  const reportSiteFilter = document.getElementById('reportSiteFilter');
  const reportDateFrom = document.getElementById('reportDateFrom');
  const reportDateTo = document.getElementById('reportDateTo');
  const reportRangeLabel = document.getElementById('reportRangeLabel');
  const reportKpiStock = document.getElementById('reportKpiStock');
  const reportKpiUnitary = document.getElementById('reportKpiUnitary');
  const reportKpiMovements = document.getElementById('reportKpiMovements');
  const reportKpiObserved = document.getElementById('reportKpiObserved');
  const reportKpiPending = document.getElementById('reportKpiPending');
  const reportKpiCritical = document.getElementById('reportKpiCritical');
  const reportKpiAssetValue = document.getElementById('reportKpiAssetValue');
  const reportKpiOperationalCost = document.getElementById('reportKpiOperationalCost');
  const reportsLoading = document.getElementById('reportsLoading');
  const reportsTable = document.getElementById('reportsTable');
  const reportsTableHead = document.getElementById('reportsTableHead');
  const reportsTableBody = document.getElementById('reportsTableBody');
  const reportsEmpty = document.getElementById('reportsEmpty');
  const reportTabButtons = Array.from(document.querySelectorAll('[data-report-tab]'));

  const backAlertsButton = document.getElementById('backAlertsButton');
  const downloadAlertsButton = document.getElementById('downloadAlertsButton');
  const refreshAlertsButton = document.getElementById('refreshAlertsButton');
  const alertSearch = document.getElementById('alertSearch');
  const alertSiteFilter = document.getElementById('alertSiteFilter');
  const alertSourceFilter = document.getElementById('alertSourceFilter');
  const alertPriorityFilter = document.getElementById('alertPriorityFilter');
  const alertSituationFilter = document.getElementById('alertSituationFilter');
  const alertsLoading = document.getElementById('alertsLoading');
  const alertsTable = document.getElementById('alertsTable');
  const alertsTableBody = document.getElementById('alertsTableBody');
  const alertsEmpty = document.getElementById('alertsEmpty');
  const alertSummaryTotal = document.getElementById('alertSummaryTotal');
  const alertSummaryCritical = document.getElementById('alertSummaryCritical');
  const alertSummaryHigh = document.getElementById('alertSummaryHigh');
  const alertSummaryOverdue = document.getElementById('alertSummaryOverdue');

  const backBajasButton = document.getElementById('backBajasButton');
  const downloadBajasButton = document.getElementById('downloadBajasButton');
  const newBajaButton = document.getElementById('newBajaButton');
  const refreshBajasButton = document.getElementById('refreshBajasButton');
  const bajaSearch = document.getElementById('bajaSearch');
  const bajaSiteFilter = document.getElementById('bajaSiteFilter');
  const bajaReasonFilter = document.getElementById('bajaReasonFilter');
  const bajaStateFilter = document.getElementById('bajaStateFilter');
  const bajaDateFrom = document.getElementById('bajaDateFrom');
  const bajaDateTo = document.getElementById('bajaDateTo');
  const bajasLoading = document.getElementById('bajasLoading');
  const bajasTable = document.getElementById('bajasTable');
  const bajasTableBody = document.getElementById('bajasTableBody');
  const bajasEmpty = document.getElementById('bajasEmpty');
  const bajaSummaryTotal = document.getElementById('bajaSummaryTotal');
  const bajaSummaryRequested = document.getElementById('bajaSummaryRequested');
  const bajaSummaryApproved = document.getElementById('bajaSummaryApproved');
  const bajaSummaryExecuted = document.getElementById('bajaSummaryExecuted');

  const bajaModal = document.getElementById('bajaModal');
  const closeBajaModalButton = document.getElementById('closeBajaModalButton');
  const cancelBajaFormButton = document.getElementById('cancelBajaFormButton');
  const bajaForm = document.getElementById('bajaForm');
  const bajaModalTitle = document.getElementById('bajaModalTitle');
  const formBajaId = document.getElementById('formBajaId');
  const formBajaTool = document.getElementById('formBajaTool');
  const formBajaDate = document.getElementById('formBajaDate');
  const formBajaReason = document.getElementById('formBajaReason');
  const formBajaPhysicalState = document.getElementById('formBajaPhysicalState');
  const formBajaValue = document.getElementById('formBajaValue');
  const formBajaMaintenance = document.getElementById('formBajaMaintenance');
  const formBajaEvidence = document.getElementById('formBajaEvidence');
  const formBajaDetail = document.getElementById('formBajaDetail');
  const formBajaNotes = document.getElementById('formBajaNotes');
  const bajaFormMessage = document.getElementById('bajaFormMessage');
  const saveBajaButton = document.getElementById('saveBajaButton');

  const backMaintenanceButton = document.getElementById('backMaintenanceButton');
  const downloadMaintenanceButton = document.getElementById('downloadMaintenanceButton');
  const newMaintenanceButton = document.getElementById('newMaintenanceButton');
  const refreshMaintenanceButton = document.getElementById('refreshMaintenanceButton');
  const maintenanceSearch = document.getElementById('maintenanceSearch');
  const maintenanceSiteFilter = document.getElementById('maintenanceSiteFilter');
  const maintenanceTypeFilter = document.getElementById('maintenanceTypeFilter');
  const maintenanceStateFilter = document.getElementById('maintenanceStateFilter');
  const maintenanceResultFilter = document.getElementById('maintenanceResultFilter');
  const maintenanceDateFrom = document.getElementById('maintenanceDateFrom');
  const maintenanceDateTo = document.getElementById('maintenanceDateTo');
  const maintenanceLoading = document.getElementById('maintenanceLoading');
  const maintenanceTable = document.getElementById('maintenanceTable');
  const maintenanceTableBody = document.getElementById('maintenanceTableBody');
  const maintenanceEmpty = document.getElementById('maintenanceEmpty');
  const maintenanceSummaryTotal = document.getElementById('maintenanceSummaryTotal');
  const maintenanceSummaryScheduled = document.getElementById('maintenanceSummaryScheduled');
  const maintenanceSummaryProgress = document.getElementById('maintenanceSummaryProgress');
  const maintenanceSummaryOverdue = document.getElementById('maintenanceSummaryOverdue');

  const maintenanceModal = document.getElementById('maintenanceModal');
  const closeMaintenanceModalButton = document.getElementById('closeMaintenanceModalButton');
  const cancelMaintenanceFormButton = document.getElementById('cancelMaintenanceFormButton');
  const maintenanceForm = document.getElementById('maintenanceForm');
  const maintenanceModalTitle = document.getElementById('maintenanceModalTitle');
  const formMaintenanceId = document.getElementById('formMaintenanceId');
  const formMaintenanceTool = document.getElementById('formMaintenanceTool');
  const formMaintenanceScheduledDate = document.getElementById('formMaintenanceScheduledDate');
  const formMaintenanceType = document.getElementById('formMaintenanceType');
  const formMaintenanceReason = document.getElementById('formMaintenanceReason');
  const formMaintenanceWorkshop = document.getElementById('formMaintenanceWorkshop');
  const maintenanceProvidersList = document.getElementById('maintenanceProvidersList');
  const formMaintenanceEstimatedCost = document.getElementById('formMaintenanceEstimatedCost');
  const formMaintenanceRealCost = document.getElementById('formMaintenanceRealCost');
  const formMaintenanceResult = document.getElementById('formMaintenanceResult');
  const formMaintenanceEndDate = document.getElementById('formMaintenanceEndDate');
  const formMaintenanceNextDate = document.getElementById('formMaintenanceNextDate');
  const formMaintenanceSendMovement = document.getElementById('formMaintenanceSendMovement');
  const formMaintenanceReturnMovement = document.getElementById('formMaintenanceReturnMovement');
  const formMaintenanceEvidence = document.getElementById('formMaintenanceEvidence');
  const formMaintenanceNotes = document.getElementById('formMaintenanceNotes');
  const maintenanceFormMessage = document.getElementById('maintenanceFormMessage');
  const saveMaintenanceButton = document.getElementById('saveMaintenanceButton');

  const backInventoriesButton = document.getElementById('backInventoriesButton');
  const newInventoryButton = document.getElementById('newInventoryButton');
  const refreshInventoriesButton = document.getElementById('refreshInventoriesButton');
  const inventorySearch = document.getElementById('inventorySearch');
  const inventorySiteFilter = document.getElementById('inventorySiteFilter');
  const inventoryLocationFilter = document.getElementById('inventoryLocationFilter');
  const inventoryStateFilter = document.getElementById('inventoryStateFilter');
  const inventoryDateFrom = document.getElementById('inventoryDateFrom');
  const inventoryDateTo = document.getElementById('inventoryDateTo');
  const inventoriesLoading = document.getElementById('inventoriesLoading');
  const inventoriesTable = document.getElementById('inventoriesTable');
  const inventoriesTableBody = document.getElementById('inventoriesTableBody');
  const inventoriesEmpty = document.getElementById('inventoriesEmpty');
  const inventorySummaryTotal = document.getElementById('inventorySummaryTotal');
  const inventorySummaryDraft = document.getElementById('inventorySummaryDraft');
  const inventorySummaryFinished = document.getElementById('inventorySummaryFinished');
  const inventorySummaryDifferences = document.getElementById('inventorySummaryDifferences');

  const inventoryModal = document.getElementById('inventoryModal');
  const closeInventoryModalButton = document.getElementById('closeInventoryModalButton');
  const cancelInventoryFormButton = document.getElementById('cancelInventoryFormButton');
  const inventoryForm = document.getElementById('inventoryForm');
  const inventoryModalTitle = document.getElementById('inventoryModalTitle');
  const formInventoryId = document.getElementById('formInventoryId');
  const formInventoryDate = document.getElementById('formInventoryDate');
  const formInventoryLocation = document.getElementById('formInventoryLocation');
  const loadInventoryStockButton = document.getElementById('loadInventoryStockButton');
  const inventoryCountSection = document.getElementById('inventoryCountSection');
  const inventoryLocationSummary = document.getElementById('inventoryLocationSummary');
  const inventoryItemSearch = document.getElementById('inventoryItemSearch');
  const inventoryCountRecords = document.getElementById('inventoryCountRecords');
  const inventoryCountConforming = document.getElementById('inventoryCountConforming');
  const inventoryCountMissing = document.getElementById('inventoryCountMissing');
  const inventoryCountSurplus = document.getElementById('inventoryCountSurplus');
  const inventoryCountTableBody = document.getElementById('inventoryCountTableBody');
  const formInventoryNotes = document.getElementById('formInventoryNotes');
  const inventoryFormMessage = document.getElementById('inventoryFormMessage');
  const saveInventoryButton = document.getElementById('saveInventoryButton');

  const backCargosButton = document.getElementById('backCargosButton');
  const newCargoButton = document.getElementById('newCargoButton');
  const refreshCargosButton = document.getElementById('refreshCargosButton');
  const cargoSearch = document.getElementById('cargoSearch');
  const cargoSiteFilter = document.getElementById('cargoSiteFilter');
  const cargoTypeFilter = document.getElementById('cargoTypeFilter');
  const cargoStateFilter = document.getElementById('cargoStateFilter');
  const cargoDateFrom = document.getElementById('cargoDateFrom');
  const cargoDateTo = document.getElementById('cargoDateTo');
  const cargosLoading = document.getElementById('cargosLoading');
  const cargosTable = document.getElementById('cargosTable');
  const cargosTableBody = document.getElementById('cargosTableBody');
  const cargosEmpty = document.getElementById('cargosEmpty');
  const cargoSummaryTotal = document.getElementById('cargoSummaryTotal');
  const cargoSummaryIssued = document.getElementById('cargoSummaryIssued');
  const cargoSummaryAccepted = document.getElementById('cargoSummaryAccepted');
  const cargoSummaryClosed = document.getElementById('cargoSummaryClosed');

  const cargoModal = document.getElementById('cargoModal');
  const closeCargoModalButton = document.getElementById('closeCargoModalButton');
  const cancelCargoFormButton = document.getElementById('cancelCargoFormButton');
  const cargoForm = document.getElementById('cargoForm');
  const cargoModalTitle = document.getElementById('cargoModalTitle');
  const formCargoId = document.getElementById('formCargoId');
  const formCargoDate = document.getElementById('formCargoDate');
  const formCargoType = document.getElementById('formCargoType');
  const formCargoEvidence = document.getElementById('formCargoEvidence');
  const formCargoSignature = document.getElementById('formCargoSignature');
  const cargoMovementSearch = document.getElementById('cargoMovementSearch');
  const cargoMovementList = document.getElementById('cargoMovementList');
  const cargoMovementEmpty = document.getElementById('cargoMovementEmpty');
  const cargoRecipientName = document.getElementById('cargoRecipientName');
  const cargoRecipientDni = document.getElementById('cargoRecipientDni');
  const cargoRecipientSite = document.getElementById('cargoRecipientSite');
  const cargoDeliverName = document.getElementById('cargoDeliverName');
  const cargoSelectedCount = document.getElementById('cargoSelectedCount');
  const formCargoNotes = document.getElementById('formCargoNotes');
  const cargoFormMessage = document.getElementById('cargoFormMessage');
  const saveCargoButton = document.getElementById('saveCargoButton');

  const backStockButton = document.getElementById('backStockButton');
  const downloadStockButton = document.getElementById('downloadStockButton');
  const refreshStockButton = document.getElementById('refreshStockButton');
  const stockSearch = document.getElementById('stockSearch');
  const stockSiteFilter = document.getElementById('stockSiteFilter');
  const stockLocationFilter = document.getElementById('stockLocationFilter');
  const stockCategoryFilter = document.getElementById('stockCategoryFilter');
  const stockTypeFilter = document.getElementById('stockTypeFilter');
  const stockControlFilter = document.getElementById('stockControlFilter');
  const stockStateFilter = document.getElementById('stockStateFilter');
  const stockLoading = document.getElementById('stockLoading');
  const stockTable = document.getElementById('stockTable');
  const stockTableBody = document.getElementById('stockTableBody');
  const stockEmpty = document.getElementById('stockEmpty');
  const stockSummaryRecords = document.getElementById('stockSummaryRecords');
  const stockSummaryUnitary = document.getElementById('stockSummaryUnitary');
  const stockSummaryAvailable = document.getElementById('stockSummaryAvailable');
  const stockSummaryAssigned = document.getElementById('stockSummaryAssigned');

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

  const initialLoadSummaryTotal = document.getElementById('initialLoadSummaryTotal');
  const initialLoadSummaryValid = document.getElementById('initialLoadSummaryValid');
  const initialLoadSummaryErrors = document.getElementById('initialLoadSummaryErrors');
  const initialLoadSummaryLoaded = document.getElementById('initialLoadSummaryLoaded');

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
  let administracionActual = null;
  let administracionPerfilSeleccionado = '';
  let administracionPestanaActiva = 'PERMISOS';
  let puedeAdministrarSistema = false;
  let reporteActual = null;
  let reporteVistaActiva = 'RESUMEN';
  let puedeDescargarReportes = false;
  let alertas = [];
  let alertasFiltradas = [];
  let puedeDescargarAlertas = false;
  let catalogosAlertas = {
    sedes: [],
    fuentes: [],
    prioridades: [],
    situaciones: []
  };
  let bajas = [];
  let bajasFiltradas = [];
  let puedeRegistrarBajas = false;
  let puedeEditarBajas = false;
  let puedeAprobarBajas = false;
  let puedeAnularBajas = false;
  let puedeDescargarBajas = false;
  let catalogosBajas = {
    herramientas: [],
    sedes: [],
    motivos: [],
    estadosFisicos: [],
    estados: []
  };
  let mantenimientos = [];
  let mantenimientosFiltrados = [];
  let puedeRegistrarMantenimientos = false;
  let puedeEditarMantenimientos = false;
  let puedeAprobarMantenimientos = false;
  let puedeAnularMantenimientos = false;
  let puedeDescargarMantenimientos = false;
  let catalogosMantenimientos = {
    herramientas: [],
    sedes: [],
    tiposMantenimiento: [],
    estados: [],
    resultados: [],
    proveedores: []
  };
  let inventarios = [];
  let inventarioActual = null;
  let itemsConteoInventario = [];
  let puedeRegistrarInventarios = false;
  let puedeEditarInventarios = false;
  let puedeAprobarInventarios = false;
  let puedeAnularInventarios = false;
  let puedeDescargarInventarios = false;
  let catalogosInventarios = {
    ubicaciones: [],
    sedes: [],
    estados: []
  };
  let cargos = [];
  let cargoSeleccionado = null;
  let movimientosCargoSeleccionados = new Set();
  let puedeRegistrarCargos = false;
  let puedeEditarCargos = false;
  let puedeAprobarCargos = false;
  let puedeAnularCargos = false;
  let puedeDescargarCargos = false;
  let catalogosCargos = {
    tiposCargo: [],
    estadosCargo: [],
    sedes: [],
    movimientos: []
  };
  let stockActual = [];
  let stockFiltradoActual = [];
  let puedeDescargarStock = false;
  let catalogosStockActual = {
    sedes: [],
    categorias: [],
    tiposControl: [],
    tiposUbicacion: [],
    estadosStock: [],
    tiposArticulo: []
  };
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
  let cargaInicialFiltrada = [];
  let resumenCargaInicial = {
    total: 0,
    pendientes: 0,
    validas: 0,
    errores: 0,
    cargadas: 0
  };
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

    appVersion.textContent = `Versión ${config.VERSION}`;

    loginForm.addEventListener('submit', manejarLogin);
    togglePassword.addEventListener('click', alternarClaveVisible);
    themeToggle.addEventListener('click', alternarTema);
    logoutButton.addEventListener('click', cerrarSesion);
    backAdministrationButton.addEventListener('click', mostrarDashboard);
    refreshAdministrationButton.addEventListener('click', cargarAdministracion);
    newProfileButton.addEventListener('click', abrirNuevoPerfil);
    saveAdministrationPermissionsButton.addEventListener('click', guardarPermisosAdministracion);
    administrationProfileSelect.addEventListener('change', () => {
      administracionPerfilSeleccionado =
        administrationProfileSelect.value;
      renderizarPerfilAdministracion();
    });

    administrationTabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        administracionPestanaActiva =
          String(
            button.dataset.administrationTab || 'PERMISOS'
          ).toUpperCase();

        actualizarPestanasAdministracion();
      });
    });

    closeProfileModalButton.addEventListener('click', cerrarFormularioPerfil);
    cancelProfileFormButton.addEventListener('click', cerrarFormularioPerfil);
    profileForm.addEventListener('submit', crearPerfilAdministracion);

    profileModal.addEventListener('click', (event) => {
      if (event.target === profileModal) {
        cerrarFormularioPerfil();
      }
    });

    backReportsButton.addEventListener('click', mostrarDashboard);
    refreshReportsButton.addEventListener('click', cargarReportes);
    downloadReportsButton.addEventListener('click', descargarVistaReporte);

    reportTabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        reporteVistaActiva =
          String(
            button.dataset.reportTab || 'RESUMEN'
          ).toUpperCase();

        actualizarPestanasReporte();
        renderizarReporteActivo();
      });
    });

    reportSiteFilter.addEventListener('change', cargarReportes);
    reportDateFrom.addEventListener('change', validarRangoReportesFrontend);
    reportDateTo.addEventListener('change', validarRangoReportesFrontend);

    backAlertsButton.addEventListener('click', mostrarDashboard);
    refreshAlertsButton.addEventListener('click', cargarAlertas);
    downloadAlertsButton.addEventListener('click', descargarAlertasCsv);

    [
      alertSearch,
      alertSiteFilter,
      alertSourceFilter,
      alertPriorityFilter,
      alertSituationFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarAlertas);
      control.addEventListener('change', renderizarAlertas);
    });

    backBajasButton.addEventListener('click', mostrarDashboard);
    newBajaButton.addEventListener('click', abrirNuevaBaja);
    refreshBajasButton.addEventListener('click', cargarBajas);
    downloadBajasButton.addEventListener('click', descargarBajasCsv);
    closeBajaModalButton.addEventListener('click', cerrarFormularioBaja);
    cancelBajaFormButton.addEventListener('click', cerrarFormularioBaja);
    bajaForm.addEventListener('submit', guardarBaja);

    bajaModal.addEventListener('click', (event) => {
      if (event.target === bajaModal) {
        cerrarFormularioBaja();
      }
    });

    [
      bajaSearch,
      bajaSiteFilter,
      bajaReasonFilter,
      bajaStateFilter,
      bajaDateFrom,
      bajaDateTo
    ].forEach((control) => {
      control.addEventListener('input', renderizarBajas);
      control.addEventListener('change', renderizarBajas);
    });

    backMaintenanceButton.addEventListener('click', mostrarDashboard);
    newMaintenanceButton.addEventListener('click', abrirNuevoMantenimiento);
    refreshMaintenanceButton.addEventListener('click', cargarMantenimientos);
    downloadMaintenanceButton.addEventListener('click', descargarMantenimientosCsv);
    closeMaintenanceModalButton.addEventListener('click', cerrarFormularioMantenimiento);
    cancelMaintenanceFormButton.addEventListener('click', cerrarFormularioMantenimiento);
    maintenanceForm.addEventListener('submit', guardarMantenimiento);

    maintenanceModal.addEventListener('click', (event) => {
      if (event.target === maintenanceModal) {
        cerrarFormularioMantenimiento();
      }
    });

    [
      maintenanceSearch,
      maintenanceSiteFilter,
      maintenanceTypeFilter,
      maintenanceStateFilter,
      maintenanceResultFilter,
      maintenanceDateFrom,
      maintenanceDateTo
    ].forEach((control) => {
      control.addEventListener('input', renderizarMantenimientos);
      control.addEventListener('change', renderizarMantenimientos);
    });

    backInventoriesButton.addEventListener('click', mostrarDashboard);
    newInventoryButton.addEventListener('click', abrirNuevoInventario);
    refreshInventoriesButton.addEventListener('click', cargarInventarios);
    closeInventoryModalButton.addEventListener('click', cerrarFormularioInventario);
    cancelInventoryFormButton.addEventListener('click', cerrarFormularioInventario);
    loadInventoryStockButton.addEventListener('click', cargarStockParaInventario);
    inventoryForm.addEventListener('submit', guardarInventario);
    inventoryItemSearch.addEventListener('input', renderizarConteoInventario);

    inventoryModal.addEventListener('click', (event) => {
      if (event.target === inventoryModal) {
        cerrarFormularioInventario();
      }
    });

    [
      inventorySearch,
      inventorySiteFilter,
      inventoryLocationFilter,
      inventoryStateFilter,
      inventoryDateFrom,
      inventoryDateTo
    ].forEach((control) => {
      control.addEventListener('input', renderizarInventarios);
      control.addEventListener('change', renderizarInventarios);
    });

    backCargosButton.addEventListener('click', mostrarDashboard);
    newCargoButton.addEventListener('click', abrirNuevoCargo);
    refreshCargosButton.addEventListener('click', cargarCargos);
    closeCargoModalButton.addEventListener('click', cerrarFormularioCargo);
    cancelCargoFormButton.addEventListener('click', cerrarFormularioCargo);
    cargoForm.addEventListener('submit', guardarCargo);
    formCargoType.addEventListener('change', renderizarMovimientosCargoDisponibles);
    cargoMovementSearch.addEventListener('input', renderizarMovimientosCargoDisponibles);

    cargoModal.addEventListener('click', (event) => {
      if (event.target === cargoModal) {
        cerrarFormularioCargo();
      }
    });

    [
      cargoSearch,
      cargoSiteFilter,
      cargoTypeFilter,
      cargoStateFilter,
      cargoDateFrom,
      cargoDateTo
    ].forEach((control) => {
      control.addEventListener('input', renderizarCargos);
      control.addEventListener('change', renderizarCargos);
    });

    backStockButton.addEventListener('click', mostrarDashboard);
    refreshStockButton.addEventListener('click', cargarStockActual);
    downloadStockButton.addEventListener('click', descargarStockCsv);

    [
      stockSearch,
      stockSiteFilter,
      stockLocationFilter,
      stockCategoryFilter,
      stockTypeFilter,
      stockControlFilter,
      stockStateFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarStockActual);
      control.addEventListener('change', renderizarStockActual);
    });

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
    newToolButton.addEventListener('click', procesarCargaInicial);
    refreshToolsButton.addEventListener('click', cargarHerramientas);

    [
      toolSearch,
      toolCategoryFilter,
      toolTypeFilter,
      toolConditionFilter,
      toolSeriesFilter
    ].forEach((control) => {
      control.addEventListener('input', renderizarCargaInicial);
      control.addEventListener('change', renderizarCargaInicial);
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

    if (modulo === 'ADMINISTRACION') {
      abrirAdministracion();
      return;
    }

    if (modulo === 'REPORTES') {
      abrirReportes();
      return;
    }

    if (modulo === 'ALERTAS') {
      abrirAlertas();
      return;
    }

    if (modulo === 'BAJAS') {
      abrirBajas();
      return;
    }

    if (modulo === 'MANTENIMIENTOS') {
      abrirMantenimientos();
      return;
    }

    if (modulo === 'INVENTARIOS') {
      abrirInventarios();
      return;
    }

    if (modulo === 'CARGOS') {
      abrirCargos();
      return;
    }

    if (modulo === 'STOCK_ACTUAL') {
      abrirStockActual();
      return;
    }

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














  async function abrirAdministracion() {
    dashboardView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    administrationView.hidden = false;

    actualizarPestanasAdministracion();
    await cargarAdministracion();
  }

  async function cargarAdministracion() {
    administrationLoading.hidden = false;
    administrationLoading.textContent = 'Cargando perfiles y diagnóstico…';
    administrationPermissionsTable.hidden = true;
    administrationPermissionsEmpty.hidden = true;
    refreshAdministrationButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_administracion',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cargar la administración.'
        );
      }

      administracionActual =
        respuesta;

      puedeAdministrarSistema =
        Boolean(
          respuesta.puedeAdministrar
        );

      newProfileButton.hidden =
        !puedeAdministrarSistema;

      actualizarResumenAdministracion();
      actualizarSelectorPerfilesAdministracion();
      renderizarPerfilAdministracion();
      renderizarDiagnosticoAdministracion();

      administrationLoading.hidden = true;

    } catch (error) {
      console.error(error);
      administracionActual = null;
      administrationLoading.hidden = false;
      administrationLoading.textContent = error.message;
      administrationPermissionsTable.hidden = true;
      administrationPermissionsEmpty.hidden = true;

    } finally {
      refreshAdministrationButton.disabled = false;
    }
  }

  function actualizarResumenAdministracion() {
    const diagnostico =
      administracionActual &&
      administracionActual.diagnostico
        ? administracionActual.diagnostico
        : {};

    administrationSummaryProfiles.textContent =
      String(
        diagnostico.totalPerfiles || 0
      );

    administrationSummaryModules.textContent =
      String(
        diagnostico.totalModulos || 0
      );

    administrationSummaryUsers.textContent =
      String(
        diagnostico.usuariosActivos || 0
      );

    administrationSummarySheets.textContent =
      `${diagnostico.hojasCorrectas || 0}/${diagnostico.totalHojas || 0}`;
  }

  function actualizarSelectorPerfilesAdministracion() {
    const anterior =
      administracionPerfilSeleccionado ||
      administrationProfileSelect.value;

    administrationProfileSelect.innerHTML = '';

    const perfiles =
      administracionActual &&
      Array.isArray(
        administracionActual.perfiles
      )
        ? administracionActual.perfiles
        : [];

    perfiles.forEach(perfil => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        perfil.perfil;

      option.textContent =
        `${formatearTexto(
          perfil.perfil
        )} · ${formatearTexto(
          perfil.estadoPerfil
        )}`;

      administrationProfileSelect.appendChild(
        option
      );
    });

    if (
      anterior &&
      perfiles.some(perfil =>
        perfil.perfil === anterior
      )
    ) {
      administracionPerfilSeleccionado =
        anterior;

    } else if (
      administracionActual.perfilSesion &&
      perfiles.some(perfil =>
        perfil.perfil ===
        administracionActual.perfilSesion
      )
    ) {
      administracionPerfilSeleccionado =
        administracionActual.perfilSesion;

    } else {
      administracionPerfilSeleccionado =
        perfiles.length
          ? perfiles[0].perfil
          : '';
    }

    administrationProfileSelect.value =
      administracionPerfilSeleccionado;
  }

  function obtenerPerfilAdministracionSeleccionado() {
    if (
      !administracionActual ||
      !Array.isArray(
        administracionActual.perfiles
      )
    ) {
      return null;
    }

    return administracionActual.perfiles.find(perfil =>
      perfil.perfil ===
      administracionPerfilSeleccionado
    ) || null;
  }

  function renderizarPerfilAdministracion() {
    administrationPermissionsBody.innerHTML = '';

    const perfil =
      obtenerPerfilAdministracionSeleccionado();

    if (!perfil) {
      administrationPermissionsTable.hidden = true;
      administrationPermissionsEmpty.hidden = false;
      saveAdministrationPermissionsButton.hidden = true;
      administrationProtectedMessage.hidden = true;
      administrationProfileUsers.textContent = '0';
      administrationProfileCoverage.textContent = '0/0';
      return;
    }

    administrationProfileState.value =
      perfil.estadoPerfil ||
      'INACTIVO';

    administrationProfileUsers.textContent =
      String(
        perfil.usuariosActivos || 0
      );

    const permisos =
      Array.isArray(
        perfil.permisos
      )
        ? perfil.permisos
        : [];

    const registrados =
      permisos.filter(item =>
        item.idPermiso
      ).length;

    administrationProfileCoverage.textContent =
      `${registrados}/${permisos.length}`;

    const protegido =
      Boolean(
        perfil.protegido
      );

    const editable =
      puedeAdministrarSistema &&
      !protegido;

    administrationProfileState.disabled =
      !editable;

    saveAdministrationPermissionsButton.hidden =
      !editable;

    administrationProtectedMessage.hidden =
      !protegido;

    permisos.forEach(permiso => {
      administrationPermissionsBody.appendChild(
        crearFilaPermisoAdministracion(
          permiso,
          editable
        )
      );
    });

    administrationPermissionsTable.hidden =
      permisos.length === 0;

    administrationPermissionsEmpty.hidden =
      permisos.length !== 0;
  }

  function crearFilaPermisoAdministracion(
    permiso,
    editable
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    fila.dataset.module =
      permiso.modulo;

    const modulo =
      document.createElement(
        'td'
      );

    modulo.className =
      'administration-module-cell';

    modulo.innerHTML =
      `<strong>${escaparHtml(
        permiso.etiqueta ||
        formatearTexto(
          permiso.modulo
        )
      )}</strong>` +
      `<small>${escaparHtml(
        `${permiso.idModulo || ''} · ${permiso.modulo || ''}`
      )}</small>`;

    fila.appendChild(
      modulo
    );

    const campos = [
      'ver',
      'registrar',
      'editar',
      'aprobar',
      'anular',
      'descargar',
      'administrar'
    ];

    const capacidades =
      new Set(
        (
          permiso.capacidades || []
        ).map(valor =>
          String(valor).toUpperCase()
        )
      );

    campos.forEach(campo => {
      const celda =
        document.createElement(
          'td'
        );

      celda.className =
        'administration-permission-cell';

      const checkbox =
        document.createElement(
          'input'
        );

      checkbox.type =
        'checkbox';

      checkbox.dataset.permissionField =
        campo;

      checkbox.checked =
        Boolean(
          permiso[campo]
        );

      const capacidad =
        campo.toUpperCase();

      checkbox.disabled =
        !editable ||
        !capacidades.has(
          capacidad
        );

      checkbox.addEventListener(
        'change',
        () => {
          if (
            campo !== 'ver' &&
            checkbox.checked
          ) {
            const ver =
              fila.querySelector(
                '[data-permission-field="ver"]'
              );

            if (
              ver &&
              !ver.disabled
            ) {
              ver.checked = true;
            }
          }

          if (
            campo === 'ver' &&
            !checkbox.checked
          ) {
            fila
              .querySelectorAll(
                '[data-permission-field]'
              )
              .forEach(control => {
                if (
                  control !== checkbox &&
                  !control.disabled
                ) {
                  control.checked = false;
                }
              });
          }

          actualizarEstadoAlcanceFilaAdministracion(
            fila
          );
        }
      );

      celda.appendChild(
        checkbox
      );

      fila.appendChild(
        celda
      );
    });

    const celdaAlcance =
      document.createElement(
        'td'
      );

    const select =
      document.createElement(
        'select'
      );

    select.className =
      'administration-scope-select';

    select.dataset.permissionScope =
      'SI';

    const alcances =
      administracionActual &&
      Array.isArray(
        administracionActual.alcances
      )
        ? administracionActual.alcances
        : [];

    alcances.forEach(alcance => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        alcance.valor;

      option.textContent =
        alcance.etiqueta;

      select.appendChild(
        option
      );
    });

    select.value =
      permiso.alcanceSede ===
        'SEDE_BASE'
        ? 'SEDE_BASE'
        : 'ZONA_NORTE';

    select.disabled =
      !editable;

    celdaAlcance.appendChild(
      select
    );

    fila.appendChild(
      celdaAlcance
    );

    actualizarEstadoAlcanceFilaAdministracion(
      fila
    );

    return fila;
  }

  function actualizarEstadoAlcanceFilaAdministracion(
    fila
  ) {
    const ver =
      fila.querySelector(
        '[data-permission-field="ver"]'
      );

    const alcance =
      fila.querySelector(
        '[data-permission-scope]'
      );

    if (
      alcance &&
      !alcance.dataset.locked
    ) {
      alcance.disabled =
        Boolean(
          alcance.disabled
        ) ||
        !(
          ver &&
          ver.checked
        );
    }
  }

  async function guardarPermisosAdministracion() {
    const perfil =
      obtenerPerfilAdministracionSeleccionado();

    if (
      !perfil ||
      perfil.protegido
    ) {
      return;
    }

    const filas =
      Array.from(
        administrationPermissionsBody.querySelectorAll(
          'tr[data-module]'
        )
      );

    const permisos =
      filas.map(fila => {
        const leer =
          campo => {
            const control =
              fila.querySelector(
                `[data-permission-field="${campo}"]`
              );

            return Boolean(
              control &&
              control.checked
            );
          };

        const alcance =
          fila.querySelector(
            '[data-permission-scope]'
          );

        return {
          modulo:
            fila.dataset.module,
          ver:
            leer('ver'),
          registrar:
            leer('registrar'),
          editar:
            leer('editar'),
          aprobar:
            leer('aprobar'),
          anular:
            leer('anular'),
          descargar:
            leer('descargar'),
          administrar:
            leer('administrar'),
          alcanceSede:
            alcance
              ? alcance.value
              : 'ZONA_NORTE'
        };
      });

    const confirmado =
      window.confirm(
        `¿Deseas guardar la matriz completa del perfil ${formatearTexto(
          perfil.perfil
        )}?`
      );

    if (!confirmado) {
      return;
    }

    saveAdministrationPermissionsButton.disabled =
      true;

    saveAdministrationPermissionsButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'guardar_permisos_perfil',
          token:
            auth.token,
          perfil:
            perfil.perfil,
          estadoPerfil:
            administrationProfileState.value,
          permisos:
            permisos
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron guardar los permisos.'
        );
      }

      mostrarToast(
        respuesta.mensaje
      );

      await cargarAdministracion();

    } catch (error) {
      window.alert(
        error.message
      );

    } finally {
      saveAdministrationPermissionsButton.disabled =
        false;

      saveAdministrationPermissionsButton.textContent =
        'Guardar permisos';
    }
  }

  function abrirNuevoPerfil() {
    profileForm.reset();
    profileFormMessage.textContent = '';
    formProfileState.value = 'INACTIVO';
    formProfileSource.innerHTML =
      '<option value="">Perfil vacío</option>';

    const perfiles =
      administracionActual &&
      Array.isArray(
        administracionActual.perfiles
      )
        ? administracionActual.perfiles
        : [];

    perfiles
      .filter(perfil =>
        perfil.perfil !==
        'ADMINISTRADOR'
      )
      .forEach(perfil => {
        const option =
          document.createElement(
            'option'
          );

        option.value =
          perfil.perfil;

        option.textContent =
          formatearTexto(
            perfil.perfil
          );

        formProfileSource.appendChild(
          option
        );
      });

    profileModal.hidden = false;
    formProfileName.focus();
  }

  function cerrarFormularioPerfil() {
    profileModal.hidden = true;
    profileFormMessage.textContent = '';
  }

  async function crearPerfilAdministracion(
    event
  ) {
    event.preventDefault();
    profileFormMessage.textContent = '';

    const nombre =
      formProfileName.value.trim();

    if (!nombre) {
      profileFormMessage.textContent =
        'Ingresa el nombre del perfil.';
      return;
    }

    saveProfileButton.disabled = true;
    saveProfileButton.textContent = 'Creando…';

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'crear_perfil',
          token:
            auth.token,
          perfil:
            nombre,
          perfilOrigen:
            formProfileSource.value,
          estadoPerfil:
            formProfileState.value
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo crear el perfil.'
        );
      }

      administracionPerfilSeleccionado =
        respuesta.perfil;

      cerrarFormularioPerfil();

      mostrarToast(
        respuesta.mensaje
      );

      await cargarAdministracion();

    } catch (error) {
      profileFormMessage.textContent =
        error.message;

    } finally {
      saveProfileButton.disabled = false;
      saveProfileButton.textContent = 'Crear perfil';
    }
  }

  function actualizarPestanasAdministracion() {
    administrationTabButtons.forEach(button => {
      button.classList.toggle(
        'is-active',
        String(
          button.dataset.administrationTab || ''
        ).toUpperCase() ===
          administracionPestanaActiva
      );
    });

    administrationPermissionsPanel.hidden =
      administracionPestanaActiva !==
      'PERMISOS';

    administrationDiagnosticsPanel.hidden =
      administracionPestanaActiva !==
      'DIAGNOSTICO';
  }

  function renderizarDiagnosticoAdministracion() {
    const diagnostico =
      administracionActual &&
      administracionActual.diagnostico
        ? administracionActual.diagnostico
        : {};

    administrationSystemName.textContent =
      diagnostico.aplicacion || '—';

    administrationSystemVersion.textContent =
      diagnostico.version || '—';

    administrationSystemDatabase.textContent =
      diagnostico.nombreBase || '—';

    administrationSystemTimezone.textContent =
      diagnostico.zonaHoraria || '—';

    administrationSystemSession.textContent =
      diagnostico.duracionSesionHoras
        ? `${diagnostico.duracionSesionHoras} horas`
        : '—';

    administrationSheetsBody.innerHTML = '';

    (
      diagnostico.hojas || []
    ).forEach(item => {
      const fila =
        document.createElement(
          'tr'
        );

      fila.appendChild(
        crearCelda(
          item.hoja
        )
      );

      const estado =
        document.createElement(
          'td'
        );

      estado.className =
        item.existe
          ? 'administration-status-ok'
          : 'administration-status-error';

      estado.textContent =
        formatearTexto(
          item.estado
        );

      fila.appendChild(
        estado
      );

      fila.appendChild(
        crearCelda(
          String(
            item.filas || 0
          )
        )
      );

      fila.appendChild(
        crearCelda(
          String(
            item.columnas || 0
          )
        )
      );

      administrationSheetsBody.appendChild(
        fila
      );
    });

    administrationProfilesBody.innerHTML = '';

    (
      diagnostico.perfiles || []
    ).forEach(item => {
      const fila =
        document.createElement(
          'tr'
        );

      fila.appendChild(
        crearCelda(
          formatearTexto(
            item.perfil
          )
        )
      );

      fila.appendChild(
        crearCelda(
          formatearTexto(
            item.estadoPerfil
          )
        )
      );

      fila.appendChild(
        crearCelda(
          `${item.modulosRegistrados || 0}/${item.modulosEsperados || 0}`
        )
      );

      fila.appendChild(
        crearCelda(
          String(
            item.usuariosActivos || 0
          )
        )
      );

      const diagnosticoCelda =
        document.createElement(
          'td'
        );

      diagnosticoCelda.className =
        item.completo
          ? 'administration-status-ok'
          : 'administration-status-error';

      diagnosticoCelda.textContent =
        item.completo
          ? 'Completo'
          : 'Faltan módulos';

      fila.appendChild(
        diagnosticoCelda
      );

      administrationProfilesBody.appendChild(
        fila
      );
    });
  }

  async function abrirReportes() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    reportsView.hidden = false;

    prepararFechasReportes();
    actualizarPestanasReporte();

    await cargarReportes();
  }

  function prepararFechasReportes() {
    const hoy =
      new Date();

    const hoyLocal =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      );

    const hoyIso =
      hoyLocal
        .toISOString()
        .slice(
          0,
          10
        );

    const primerDia =
      `${hoyIso.slice(0, 7)}-01`;

    if (!reportDateFrom.value) {
      reportDateFrom.value =
        primerDia;
    }

    if (!reportDateTo.value) {
      reportDateTo.value =
        hoyIso;
    }
  }

  function validarRangoReportesFrontend() {
    if (
      reportDateFrom.value &&
      reportDateTo.value &&
      reportDateFrom.value >
        reportDateTo.value
    ) {
      window.alert(
        'La fecha inicial no puede ser posterior a la fecha final.'
      );

      return;
    }

    cargarReportes();
  }

  async function cargarReportes() {
    reportsLoading.hidden = false;
    reportsLoading.textContent = 'Consolidando información…';
    reportsTable.hidden = true;
    reportsEmpty.hidden = true;
    refreshReportsButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_reportes',
          token:
            auth.token,
          sede:
            reportSiteFilter.value,
          fechaDesde:
            reportDateFrom.value,
          fechaHasta:
            reportDateTo.value
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo generar el reporte.'
        );
      }

      reporteActual =
        respuesta;

      puedeDescargarReportes =
        Boolean(
          respuesta.puedeDescargar
        );

      downloadReportsButton.hidden =
        !puedeDescargarReportes;

      actualizarFiltrosReportes(
        respuesta.filtros || {}
      );

      actualizarIndicadoresReportes();
      renderizarReporteActivo();

      reportsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      reporteActual = null;
      reportsLoading.hidden = false;
      reportsLoading.textContent = error.message;
      reportsTable.hidden = true;
      reportsEmpty.hidden = true;

    } finally {
      refreshReportsButton.disabled = false;
    }
  }

  function actualizarFiltrosReportes(
    filtros
  ) {
    const sedeActual =
      reportSiteFilter.value;

    llenarSelectConTodos(
      reportSiteFilter,
      filtros.sedesVisibles || [],
      'Todas'
    );

    if (
      sedeActual &&
      Array.from(
        reportSiteFilter.options
      ).some(option =>
        option.value === sedeActual
      )
    ) {
      reportSiteFilter.value =
        sedeActual;

    } else if (
      filtros.sede
    ) {
      reportSiteFilter.value =
        filtros.sede;
    }

    if (
      filtros.fechaDesde
    ) {
      reportDateFrom.value =
        filtros.fechaDesde;
    }

    if (
      filtros.fechaHasta
    ) {
      reportDateTo.value =
        filtros.fechaHasta;
    }

    reportRangeLabel.textContent =
      `${formatearFechaIsoReporte(
        reportDateFrom.value
      )} al ${formatearFechaIsoReporte(
        reportDateTo.value
      )}`;
  }

  function formatearFechaIsoReporte(
    valor
  ) {
    const partes =
      String(
        valor || ''
      ).split('-');

    if (
      partes.length !== 3
    ) {
      return valor || '—';
    }

    return [
      partes[2],
      partes[1],
      partes[0]
    ].join('/');
  }

  function actualizarIndicadoresReportes() {
    const resumen =
      reporteActual &&
      reporteActual.resumen
        ? reporteActual.resumen
        : {};

    reportKpiStock.textContent =
      formatearNumeroReporte(
        resumen.registrosStock
      );

    reportKpiUnitary.textContent =
      formatearDecimalReporte(
        resumen.cantidadStock
      );

    reportKpiMovements.textContent =
      formatearNumeroReporte(
        resumen.movimientos
      );

    reportKpiObserved.textContent =
      formatearNumeroReporte(
        resumen.movimientosObservados
      );

    reportKpiPending.textContent =
      formatearNumeroReporte(
        resumen.pendientes
      );

    reportKpiCritical.textContent =
      formatearNumeroReporte(
        resumen.alertasCriticas
      );

    reportKpiAssetValue.textContent =
      formatearMonedaReporte(
        resumen.valorHerramientas
      );

    reportKpiOperationalCost.textContent =
      formatearMonedaReporte(
        resumen.costoOperativo
      );
  }

  function actualizarPestanasReporte() {
    reportTabButtons.forEach(button => {
      button.classList.toggle(
        'is-active',
        String(
          button.dataset.reportTab || ''
        ).toUpperCase() ===
          reporteVistaActiva
      );
    });
  }

  function renderizarReporteActivo() {
    reportsTableHead.innerHTML = '';
    reportsTableBody.innerHTML = '';

    if (!reporteActual) {
      reportsTable.hidden = true;
      reportsEmpty.hidden = true;
      return;
    }

    const configuracion =
      obtenerConfiguracionReporteActivo();

    const filas =
      configuracion.filas || [];

    const filaEncabezado =
      document.createElement(
        'tr'
      );

    configuracion.columnas.forEach(columna => {
      const th =
        document.createElement(
          'th'
        );

      th.textContent =
        columna.etiqueta;

      filaEncabezado.appendChild(
        th
      );
    });

    reportsTableHead.appendChild(
      filaEncabezado
    );

    filas.forEach(fila => {
      const tr =
        document.createElement(
          'tr'
        );

      configuracion.columnas.forEach(columna => {
        tr.appendChild(
          crearCeldaReporte(
            fila,
            columna
          )
        );
      });

      reportsTableBody.appendChild(
        tr
      );
    });

    reportsLoading.hidden = true;
    reportsTable.hidden =
      filas.length === 0;
    reportsEmpty.hidden =
      filas.length !== 0;
  }

  function obtenerConfiguracionReporteActivo() {
    const configuraciones = {
      RESUMEN: {
        filas:
          reporteActual.porSede || [],

        columnas: [
          {
            campo: 'sede',
            etiqueta: 'Sede',
            tipo: 'texto-principal'
          },
          {
            campo: 'registrosStock',
            etiqueta: 'Registros stock',
            tipo: 'numero'
          },
          {
            campo: 'herramientasUnitarias',
            etiqueta: 'Herramientas unitarias',
            tipo: 'numero'
          },
          {
            campo: 'cantidadStock',
            etiqueta: 'Cantidad stock',
            tipo: 'numero-decimal'
          },
          {
            campo: 'movimientos',
            etiqueta: 'Movimientos',
            tipo: 'numero'
          },
          {
            campo: 'movimientosObservados',
            etiqueta: 'Observados',
            tipo: 'numero-alerta'
          },
          {
            campo: 'pendientes',
            etiqueta: 'Pendientes',
            tipo: 'numero-alerta'
          },
          {
            campo: 'alertasCriticas',
            etiqueta: 'Críticos',
            tipo: 'numero-alerta'
          },
          {
            campo: 'valorHerramientas',
            etiqueta: 'Valor herramientas',
            tipo: 'moneda'
          },
          {
            campo: 'costoOperativo',
            etiqueta: 'Costo operativo',
            tipo: 'moneda'
          }
        ]
      },

      STOCK: {
        filas:
          reporteActual.stock
            ? reporteActual.stock.detalle || []
            : [],

        columnas: [
          {
            campo: 'sede',
            etiqueta: 'Sede',
            tipo: 'texto-principal'
          },
          {
            campo: 'tipoUbicacion',
            etiqueta: 'Ubicación',
            tipo: 'texto'
          },
          {
            campo: 'categoria',
            etiqueta: 'Categoría',
            tipo: 'texto'
          },
          {
            campo: 'estadoStock',
            etiqueta: 'Estado',
            tipo: 'texto'
          },
          {
            campo: 'registros',
            etiqueta: 'Registros',
            tipo: 'numero'
          },
          {
            campo: 'herramientasUnitarias',
            etiqueta: 'Unitarias',
            tipo: 'numero'
          },
          {
            campo: 'cantidadTotal',
            etiqueta: 'Cantidad',
            tipo: 'numero-decimal'
          },
          {
            campo: 'valorCompra',
            etiqueta: 'Valor compra',
            tipo: 'moneda'
          }
        ]
      },

      MOVIMIENTOS: {
        filas:
          reporteActual.movimientos
            ? reporteActual.movimientos.detalle || []
            : [],

        columnas: [
          {
            campo: 'sede',
            etiqueta: 'Sede',
            tipo: 'texto-principal'
          },
          {
            campo: 'tipoMovimiento',
            etiqueta: 'Tipo de movimiento',
            tipo: 'texto'
          },
          {
            campo: 'estadoMovimiento',
            etiqueta: 'Estado',
            tipo: 'texto'
          },
          {
            campo: 'registros',
            etiqueta: 'Registros',
            tipo: 'numero'
          },
          {
            campo: 'unitarios',
            etiqueta: 'Unitarios',
            tipo: 'numero'
          },
          {
            campo: 'cantidadTotal',
            etiqueta: 'Cantidad',
            tipo: 'numero-decimal'
          }
        ]
      },

      CONTROL: {
        filas:
          reporteActual.control
            ? reporteActual.control.detalle || []
            : [],

        columnas: [
          {
            campo: 'modulo',
            etiqueta: 'Módulo',
            tipo: 'texto-principal'
          },
          {
            campo: 'sede',
            etiqueta: 'Sede',
            tipo: 'texto'
          },
          {
            campo: 'estado',
            etiqueta: 'Estado / prioridad',
            tipo: 'texto'
          },
          {
            campo: 'cantidad',
            etiqueta: 'Registros',
            tipo: 'numero'
          },
          {
            campo: 'pendientes',
            etiqueta: 'Pendientes',
            tipo: 'numero-alerta'
          },
          {
            campo: 'diferencias',
            etiqueta: 'Diferencias',
            tipo: 'numero-alerta'
          },
          {
            campo: 'vencidos',
            etiqueta: 'Vencidos',
            tipo: 'numero-alerta'
          },
          {
            campo: 'criticos',
            etiqueta: 'Críticos',
            tipo: 'numero-alerta'
          },
          {
            campo: 'valor',
            etiqueta: 'Valor / costo',
            tipo: 'moneda'
          },
          {
            campo: 'observacion',
            etiqueta: 'Observación',
            tipo: 'texto'
          }
        ]
      },

      COSTOS: {
        filas:
          reporteActual.costos
            ? reporteActual.costos.detalle || []
            : [],

        columnas: [
          {
            campo: 'sede',
            etiqueta: 'Sede',
            tipo: 'texto-principal'
          },
          {
            campo: 'valorHerramientas',
            etiqueta: 'Valor herramientas',
            tipo: 'moneda'
          },
          {
            campo: 'costoMantenimientoEstimado',
            etiqueta: 'Mantenimiento estimado',
            tipo: 'moneda'
          },
          {
            campo: 'costoMantenimientoReal',
            etiqueta: 'Mantenimiento real',
            tipo: 'moneda'
          },
          {
            campo: 'valorBajas',
            etiqueta: 'Valor de bajas',
            tipo: 'moneda'
          },
          {
            campo: 'costoOperativo',
            etiqueta: 'Costo operativo',
            tipo: 'moneda'
          }
        ]
      }
    };

    return (
      configuraciones[
        reporteVistaActiva
      ] ||
      configuraciones.RESUMEN
    );
  }

  function crearCeldaReporte(
    fila,
    columna
  ) {
    const td =
      document.createElement(
        'td'
      );

    const valor =
      fila[
        columna.campo
      ];

    if (
      columna.tipo ===
        'texto-principal'
    ) {
      td.className =
        'report-primary-cell';

      td.innerHTML =
        `<strong>${escaparHtml(
          formatearTexto(
            valor || 'Sin dato'
          )
        )}</strong>`;

      return td;
    }

    if (
      columna.tipo ===
        'numero' ||
      columna.tipo ===
        'numero-decimal' ||
      columna.tipo ===
        'numero-alerta'
    ) {
      td.className =
        'report-number';

      if (
        columna.tipo ===
          'numero-alerta' &&
        Number(
          valor || 0
        ) > 0
      ) {
        td.classList.add(
          'report-warning-number'
        );
      }

      td.textContent =
        columna.tipo ===
          'numero'
          ? formatearNumeroReporte(
              valor
            )
          : formatearDecimalReporte(
              valor
            );

      return td;
    }

    if (
      columna.tipo ===
        'moneda'
    ) {
      td.className =
        'report-money';

      td.textContent =
        formatearMonedaReporte(
          valor
        );

      return td;
    }

    td.textContent =
      formatearTexto(
        valor || '—'
      );

    return td;
  }

  function formatearNumeroReporte(
    valor
  ) {
    const numero =
      Number(
        valor || 0
      );

    return numero.toLocaleString(
      'es-PE',
      {
        maximumFractionDigits: 0
      }
    );
  }

  function formatearDecimalReporte(
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

  function formatearMonedaReporte(
    valor
  ) {
    const numero =
      Number(
        valor || 0
      );

    return numero.toLocaleString(
      'es-PE',
      {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    );
  }

  function descargarVistaReporte() {
    if (
      !puedeDescargarReportes ||
      !reporteActual
    ) {
      window.alert(
        'No tienes permiso para descargar reportes.'
      );

      return;
    }

    const configuracion =
      obtenerConfiguracionReporteActivo();

    const encabezados =
      configuracion.columnas.map(
        columna =>
          columna.etiqueta
            .toUpperCase()
            .replace(
              /\s+/g,
              '_'
            )
      );

    const filas =
      configuracion.filas.map(fila =>
        configuracion.columnas.map(columna =>
          fila[
            columna.campo
          ] ?? ''
        )
      );

    descargarCsvGenerico(
      `reporte_${reporteVistaActiva.toLowerCase()}_${reportDateFrom.value}_${reportDateTo.value}.csv`,
      encabezados,
      filas
    );
  }

  async function abrirAlertas() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    alertsView.hidden = false;

    await cargarAlertas();
  }

  async function cargarAlertas() {
    alertsLoading.hidden = false;
    alertsLoading.textContent = 'Generando alertas del sistema…';
    alertsTable.hidden = true;
    alertsEmpty.hidden = true;
    refreshAlertsButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_alertas',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron generar las alertas.'
        );
      }

      alertas =
        Array.isArray(
          respuesta.alertas
        )
          ? respuesta.alertas
          : [];

      puedeDescargarAlertas =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosAlertas =
        respuesta.catalogos || {
          sedes: [],
          fuentes: [],
          prioridades: [],
          situaciones: []
        };

      downloadAlertsButton.hidden =
        !puedeDescargarAlertas;

      actualizarCatalogosAlertas();
      renderizarAlertas();
      alertsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      alertsLoading.hidden = false;
      alertsLoading.textContent = error.message;
      alertsTable.hidden = true;

    } finally {
      refreshAlertsButton.disabled = false;
    }
  }

  function actualizarCatalogosAlertas() {
    llenarSelectConTodos(
      alertSiteFilter,
      catalogosAlertas.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      alertSourceFilter,
      catalogosAlertas.fuentes || [],
      'Todas'
    );

    llenarSelectConTodos(
      alertPriorityFilter,
      catalogosAlertas.prioridades || [],
      'Todas'
    );

    llenarSelectConTodos(
      alertSituationFilter,
      catalogosAlertas.situaciones || [],
      'Todas'
    );
  }

  function renderizarAlertas() {
    const texto =
      normalizarBusqueda(
        alertSearch.value
      );

    const sede =
      String(
        alertSiteFilter.value || ''
      ).toUpperCase();

    const fuente =
      String(
        alertSourceFilter.value || ''
      ).toUpperCase();

    const prioridad =
      String(
        alertPriorityFilter.value || ''
      ).toUpperCase();

    const situacion =
      String(
        alertSituationFilter.value || ''
      ).toUpperCase();

    alertasFiltradas =
      alertas.filter(alerta => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            alerta.idAlerta,
            alerta.titulo,
            alerta.detalle,
            alerta.fuente,
            alerta.referencia,
            alerta.sede,
            alerta.responsable,
            alerta.codigoInterno,
            alerta.tipoHerramienta,
            alerta.datoAdicional,
            alerta.accionRecomendada
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          alerta.sede === sede;

        const coincideFuente =
          !fuente ||
          alerta.fuente === fuente;

        const coincidePrioridad =
          !prioridad ||
          alerta.prioridad ===
            prioridad;

        const coincideSituacion =
          !situacion ||
          alerta.situacion ===
            situacion;

        return (
          coincideTexto &&
          coincideSede &&
          coincideFuente &&
          coincidePrioridad &&
          coincideSituacion
        );
      });

    alertsTableBody.innerHTML = '';

    alertasFiltradas.forEach(alerta => {
      alertsTableBody.appendChild(
        crearFilaAlerta(
          alerta
        )
      );
    });

    alertSummaryTotal.textContent =
      String(
        alertasFiltradas.length
      );

    alertSummaryCritical.textContent =
      String(
        alertasFiltradas.filter(item =>
          item.prioridad ===
          'CRITICA'
        ).length
      );

    alertSummaryHigh.textContent =
      String(
        alertasFiltradas.filter(item =>
          item.prioridad ===
          'ALTA'
        ).length
      );

    alertSummaryOverdue.textContent =
      String(
        alertasFiltradas.filter(item =>
          item.vencida === true ||
          item.situacion ===
            'VENCIDA'
        ).length
      );

    alertsLoading.hidden = true;
    alertsTable.hidden =
      alertasFiltradas.length === 0;
    alertsEmpty.hidden =
      alertasFiltradas.length !== 0;
  }

  function crearFilaAlerta(
    alerta
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const prioridad =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    const clasePrioridad = {
      CRITICA:
        'alert-priority-critical',
      ALTA:
        'alert-priority-high',
      MEDIA:
        'alert-priority-medium',
      BAJA:
        'alert-priority-low'
    };

    insignia.className =
      'alert-priority ' +
      (
        clasePrioridad[
          alerta.prioridad
        ] ||
        'alert-priority-medium'
      );

    insignia.textContent =
      formatearTexto(
        alerta.prioridad
      );

    prioridad.appendChild(
      insignia
    );

    const situacion =
      document.createElement(
        'span'
      );

    situacion.className =
      'alert-situation';

    situacion.textContent =
      formatearTexto(
        alerta.situacion
      );

    prioridad.appendChild(
      situacion
    );

    fila.appendChild(
      prioridad
    );

    const principal =
      document.createElement(
        'td'
      );

    principal.className =
      'alert-main-cell';

    principal.innerHTML =
      `<strong>${escaparHtml(
        alerta.titulo ||
        'Alerta'
      )}</strong>` +
      `<small>${escaparHtml(
        alerta.detalle ||
        'Sin detalle'
      )}</small>`;

    if (
      alerta.codigoInterno ||
      alerta.tipoHerramienta
    ) {
      const codigo =
        document.createElement(
          'span'
        );

      codigo.className =
        'alert-reference';

      codigo.textContent =
        [
          alerta.codigoInterno,
          alerta.tipoHerramienta
        ]
          .filter(Boolean)
          .join(' · ');

      principal.appendChild(
        codigo
      );
    }

    fila.appendChild(
      principal
    );

    const fuente =
      document.createElement(
        'td'
      );

    fuente.className =
      'alert-source-cell';

    fuente.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          alerta.fuente
        )
      )}</strong>` +
      `<small>${escaparHtml(
        alerta.datoAdicional
          ? formatearTexto(
              alerta.datoAdicional
            )
          : ''
      )}</small>` +
      `<span class="alert-reference">${escaparHtml(
        alerta.referencia ||
        alerta.idAlerta
      )}</span>`;

    fila.appendChild(
      fuente
    );

    const responsable =
      document.createElement(
        'td'
      );

    responsable.className =
      'alert-owner-cell';

    responsable.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          alerta.sede
        )
      )}</strong>` +
      `<small>${escaparHtml(
        alerta.responsable ||
        'Sin responsable'
      )}</small>`;

    fila.appendChild(
      responsable
    );

    const fecha =
      document.createElement(
        'td'
      );

    fecha.className =
      'alert-date-cell';

    fecha.innerHTML =
      `<strong class="${alerta.vencida ? 'alert-overdue-text' : ''}">${escaparHtml(
        alerta.fechaReferencia ||
        'Sin fecha'
      )}</strong>` +
      `<small>${escaparHtml(
        formatearPlazoAlerta(
          alerta
        )
      )}</small>`;

    fila.appendChild(
      fecha
    );

    const accion =
      document.createElement(
        'td'
      );

    accion.className =
      'alert-action-text';

    accion.textContent =
      alerta.accionRecomendada ||
      'Revisar el registro de origen.';

    fila.appendChild(
      accion
    );

    const acciones =
      document.createElement(
        'td'
      );

    acciones.className =
      'actions-cell';

    const botonModulo =
      obtenerBotonModulo(
        alerta.modulo
      );

    if (
      botonModulo &&
      !botonModulo.hidden
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Abrir módulo',
          () =>
            abrirModuloDesdeAlerta(
              alerta.modulo
            )
        )
      );

    } else {
      acciones.textContent =
        'Solo seguimiento';
    }

    fila.appendChild(
      acciones
    );

    return fila;
  }

  function formatearPlazoAlerta(
    alerta
  ) {
    const dias =
      Number(
        alerta.dias || 0
      );

    if (
      alerta.situacion ===
        'PROXIMA'
    ) {
      if (dias === 0) {
        return 'Corresponde hoy';
      }

      return (
        'Faltan ' +
        dias +
        (
          dias === 1
            ? ' día'
            : ' días'
        )
      );
    }

    if (
      alerta.vencida ||
      alerta.situacion ===
        'VENCIDA'
    ) {
      if (dias === 0) {
        return 'Vence hoy';
      }

      return (
        dias +
        (
          dias === 1
            ? ' día vencida'
            : ' días vencida'
        )
      );
    }

    if (dias > 0) {
      return (
        dias +
        (
          dias === 1
            ? ' día pendiente'
            : ' días pendiente'
        )
      );
    }

    return 'Revisión inmediata';
  }

  function obtenerBotonModulo(
    modulo
  ) {
    return document.querySelector(
      `[data-module="${String(
        modulo || ''
      ).toUpperCase()}"]`
    );
  }

  function abrirModuloDesdeAlerta(
    modulo
  ) {
    const boton =
      obtenerBotonModulo(
        modulo
      );

    if (
      !boton ||
      boton.hidden
    ) {
      mostrarToast(
        'Tu perfil no tiene acceso al módulo de origen.'
      );

      return;
    }

    abrirModulo(
      boton
    );
  }

  function descargarAlertasCsv() {
    const encabezados = [
      'ID_ALERTA',
      'PRIORIDAD',
      'SITUACION',
      'FUENTE',
      'MODULO',
      'REFERENCIA',
      'TITULO',
      'DETALLE',
      'SEDE',
      'RESPONSABLE',
      'FECHA_REFERENCIA',
      'DIAS',
      'VENCIDA',
      'CODIGO_INTERNO',
      'TIPO_HERRAMIENTA',
      'DATO_ADICIONAL',
      'ACCION_RECOMENDADA'
    ];

    const filas =
      alertasFiltradas.map(item => [
        item.idAlerta,
        item.prioridad,
        item.situacion,
        item.fuente,
        item.modulo,
        item.referencia,
        item.titulo,
        item.detalle,
        item.sede,
        item.responsable,
        item.fechaReferencia,
        item.dias,
        item.vencida
          ? 'SI'
          : 'NO',
        item.codigoInterno,
        item.tipoHerramienta,
        item.datoAdicional,
        item.accionRecomendada
      ]);

    descargarCsvGenerico(
      `alertas_${new Date().toISOString().slice(0, 10)}.csv`,
      encabezados,
      filas
    );
  }

  async function abrirBajas() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    bajasView.hidden = false;

    await cargarBajas();
  }

  async function cargarBajas() {
    bajasLoading.hidden = false;
    bajasLoading.textContent = 'Cargando solicitudes de baja…';
    bajasTable.hidden = true;
    bajasEmpty.hidden = true;
    refreshBajasButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_bajas',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar las bajas.'
        );
      }

      bajas =
        Array.isArray(
          respuesta.bajas
        )
          ? respuesta.bajas
          : [];

      puedeRegistrarBajas =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarBajas =
        Boolean(
          respuesta.puedeEditar
        );

      puedeAprobarBajas =
        Boolean(
          respuesta.puedeAprobar
        );

      puedeAnularBajas =
        Boolean(
          respuesta.puedeAnular
        );

      puedeDescargarBajas =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosBajas =
        respuesta.catalogos || {
          herramientas: [],
          sedes: [],
          motivos: [],
          estadosFisicos: [],
          estados: []
        };

      newBajaButton.hidden =
        !puedeRegistrarBajas;

      downloadBajasButton.hidden =
        !puedeDescargarBajas;

      actualizarCatalogosBajas();
      renderizarBajas();
      bajasLoading.hidden = true;

    } catch (error) {
      console.error(error);
      bajasLoading.hidden = false;
      bajasLoading.textContent = error.message;
      bajasTable.hidden = true;

    } finally {
      refreshBajasButton.disabled = false;
    }
  }

  function actualizarCatalogosBajas() {
    llenarSelectConTodos(
      bajaSiteFilter,
      catalogosBajas.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      bajaReasonFilter,
      catalogosBajas.motivos || [],
      'Todos'
    );

    llenarSelectConTodos(
      bajaStateFilter,
      catalogosBajas.estados || [],
      'Todos'
    );

    llenarSelectFormulario(
      formBajaReason,
      catalogosBajas.motivos || []
    );

    llenarSelectFormulario(
      formBajaPhysicalState,
      catalogosBajas.estadosFisicos || []
    );

    llenarHerramientasBajaFormulario();
  }

  function llenarHerramientasBajaFormulario() {
    const actual =
      formBajaTool.value;

    formBajaTool.innerHTML = '';

    (
      catalogosBajas.herramientas || []
    ).forEach(herramienta => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        herramienta.idHerramienta;

      option.textContent =
        `${herramienta.codigoInterno || herramienta.idHerramienta} · ` +
        `${herramienta.tipoHerramienta} · ${formatearTexto(
          herramienta.sede
        )} · ${herramienta.responsable || 'Sin responsable'}`;

      formBajaTool.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        formBajaTool.options
      ).some(option =>
        option.value === actual
      )
    ) {
      formBajaTool.value =
        actual;
    }
  }

  function renderizarBajas() {
    const texto =
      normalizarBusqueda(
        bajaSearch.value
      );

    const sede =
      String(
        bajaSiteFilter.value || ''
      ).toUpperCase();

    const motivo =
      String(
        bajaReasonFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        bajaStateFilter.value || ''
      ).toUpperCase();

    const desde =
      bajaDateFrom.value;

    const hasta =
      bajaDateTo.value;

    bajasFiltradas =
      bajas.filter(item => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            item.idBaja,
            item.idHerramienta,
            item.codigoInterno,
            item.tipoHerramienta,
            item.marca,
            item.modelo,
            item.serie,
            item.responsableActual,
            item.detalle,
            item.idMantenimiento,
            item.idMovimientoBaja,
            item.observaciones
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          item.sede === sede;

        const coincideMotivo =
          !motivo ||
          item.motivoBaja ===
            motivo;

        const coincideEstado =
          !estado ||
          item.estadoBaja ===
            estado;

        const fecha =
          item.fechaSolicitudIso ||
          convertirFechaMovimientoIso(
            item.fechaSolicitud
          );

        const coincideDesde =
          !desde ||
          !fecha ||
          fecha >= desde;

        const coincideHasta =
          !hasta ||
          !fecha ||
          fecha <= hasta;

        return (
          coincideTexto &&
          coincideSede &&
          coincideMotivo &&
          coincideEstado &&
          coincideDesde &&
          coincideHasta
        );
      });

    bajasTableBody.innerHTML = '';

    bajasFiltradas.forEach(item => {
      bajasTableBody.appendChild(
        crearFilaBaja(
          item
        )
      );
    });

    bajaSummaryTotal.textContent =
      String(
        bajasFiltradas.length
      );

    bajaSummaryRequested.textContent =
      String(
        bajasFiltradas.filter(item =>
          item.estadoBaja ===
          'SOLICITADA'
        ).length
      );

    bajaSummaryApproved.textContent =
      String(
        bajasFiltradas.filter(item =>
          item.estadoBaja ===
          'APROBADA'
        ).length
      );

    bajaSummaryExecuted.textContent =
      String(
        bajasFiltradas.filter(item =>
          item.estadoBaja ===
          'EJECUTADA'
        ).length
      );

    bajasLoading.hidden = true;
    bajasTable.hidden =
      bajasFiltradas.length === 0;
    bajasEmpty.hidden =
      bajasFiltradas.length !== 0;
  }

  function crearFilaBaja(
    baja
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const principal =
      document.createElement(
        'td'
      );

    principal.className =
      'baja-main-cell';

    principal.innerHTML =
      `<strong>${escaparHtml(
        baja.fechaSolicitud ||
        'Sin fecha'
      )}</strong>` +
      `<small>${escaparHtml(
        baja.solicitante ||
        baja.usuarioRegistra ||
        ''
      )}</small>` +
      `<span class="baja-id">${escaparHtml(
        baja.idBaja
      )}</span>`;

    fila.appendChild(
      principal
    );

    const herramienta =
      document.createElement(
        'td'
      );

    herramienta.className =
      'baja-tool-cell';

    herramienta.innerHTML =
      `<strong>${escaparHtml(
        baja.tipoHerramienta ||
        'Sin herramienta'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          baja.codigoInterno,
          baja.marca,
          baja.modelo,
          baja.serie
            ? `Serie ${baja.serie}`
            : ''
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      herramienta
    );

    const motivo =
      document.createElement(
        'td'
      );

    motivo.className =
      'baja-detail-cell';

    motivo.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          baja.motivoBaja
        )
      )}</strong>` +
      `<small>${escaparHtml(
        `${formatearTexto(
          baja.estadoFisico
        )} · ${baja.detalle || 'Sin detalle'}`
      )}</small>`;

    fila.appendChild(
      motivo
    );

    const ubicacion =
      document.createElement(
        'td'
      );

    ubicacion.className =
      'baja-detail-cell';

    ubicacion.innerHTML =
      `<strong>${escaparHtml(
        baja.ubicacionActual ||
        'Sin ubicación'
      )}</strong>` +
      `<small>${escaparHtml(
        baja.responsableActual ||
        'Sin responsable'
      )}</small>`;

    fila.appendChild(
      ubicacion
    );

    fila.appendChild(
      crearCelda(
        formatearCostoMantenimiento(
          baja.valorReferencial
        )
      )
    );

    const estado =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'status-badge ' +
      (
        baja.estadoBaja ===
          'EJECUTADA'
          ? 'status-active'
          : [
              'RECHAZADA',
              'ANULADA'
            ].includes(
              baja.estadoBaja
            )
            ? 'status-inactive'
            : ''
      );

    insignia.textContent =
      formatearTexto(
        baja.estadoBaja ||
        'SOLICITADA'
      );

    estado.appendChild(
      insignia
    );

    fila.appendChild(
      estado
    );

    const sustento =
      document.createElement(
        'td'
      );

    sustento.className =
      'baja-support-links';

    if (
      baja.idMantenimiento
    ) {
      const mantenimiento =
        document.createElement(
          'span'
        );

      mantenimiento.textContent =
        `Mantenimiento: ${baja.idMantenimiento}`;

      sustento.appendChild(
        mantenimiento
      );
    }

    if (
      baja.idMovimientoBaja
    ) {
      const movimiento =
        document.createElement(
          'span'
        );

      movimiento.textContent =
        `Movimiento: ${baja.idMovimientoBaja}`;

      sustento.appendChild(
        movimiento
      );
    }

    if (
      /^https?:\/\//i.test(
        baja.evidenciaUrl || ''
      )
    ) {
      const enlace =
        document.createElement(
          'a'
        );

      enlace.href =
        baja.evidenciaUrl;

      enlace.target =
        '_blank';

      enlace.rel =
        'noopener noreferrer';

      enlace.textContent =
        'Ver evidencia';

      sustento.appendChild(
        enlace
      );
    }

    if (
      !sustento.children.length
    ) {
      sustento.textContent =
        'Sin referencias';
    }

    fila.appendChild(
      sustento
    );

    const acciones =
      document.createElement(
        'td'
      );

    acciones.className =
      'actions-cell';

    if (
      puedeEditarBajas &&
      [
        'SOLICITADA',
        'RECHAZADA'
      ].includes(
        baja.estadoBaja
      )
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarBaja(
              baja
            )
        )
      );
    }

    if (
      puedeAprobarBajas &&
      baja.estadoBaja ===
        'SOLICITADA'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Aprobar',
          () =>
            cambiarEstadoBaja(
              baja,
              'APROBADA'
            )
        )
      );

      acciones.appendChild(
        crearBotonAccion(
          'Rechazar',
          () =>
            cambiarEstadoBaja(
              baja,
              'RECHAZADA',
              true
            )
        )
      );
    }

    if (
      puedeAprobarBajas &&
      baja.estadoBaja ===
        'APROBADA'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Ejecutar',
          () =>
            ejecutarBaja(
              baja
            )
        )
      );
    }

    if (
      puedeAnularBajas &&
      [
        'SOLICITADA',
        'APROBADA'
      ].includes(
        baja.estadoBaja
      )
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Anular',
          () =>
            cambiarEstadoBaja(
              baja,
              'ANULADA',
              true
            )
        )
      );
    }

    if (
      !acciones.children.length
    ) {
      acciones.textContent =
        'Solo lectura';
    }

    fila.appendChild(
      acciones
    );

    return fila;
  }

  function abrirNuevaBaja() {
    bajaForm.reset();
    formBajaId.value = '';

    actualizarCatalogosBajas();

    const hoy =
      new Date();

    formBajaDate.value =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      )
        .toISOString()
        .slice(
          0,
          10
        );

    formBajaTool.disabled =
      false;

    bajaModalTitle.textContent =
      'Nueva solicitud de baja';

    saveBajaButton.textContent =
      'Registrar solicitud';

    bajaFormMessage.textContent =
      '';

    bajaModal.hidden = false;
    formBajaTool.focus();
  }

  function abrirEditarBaja(
    baja
  ) {
    bajaForm.reset();
    actualizarCatalogosBajas();

    asegurarHerramientaBajaFormulario(
      baja
    );

    formBajaId.value =
      baja.idBaja;

    formBajaTool.value =
      baja.idHerramienta;

    formBajaTool.disabled =
      true;

    formBajaDate.value =
      baja.fechaSolicitudIso ||
      '';

    asegurarOpcionSelect(
      formBajaReason,
      baja.motivoBaja
    );

    formBajaReason.value =
      baja.motivoBaja ||
      '';

    asegurarOpcionSelect(
      formBajaPhysicalState,
      baja.estadoFisico
    );

    formBajaPhysicalState.value =
      baja.estadoFisico ||
      '';

    formBajaValue.value =
      Number(
        baja.valorReferencial || 0
      ) || '';

    formBajaMaintenance.value =
      baja.idMantenimiento ||
      '';

    formBajaEvidence.value =
      baja.evidenciaUrl ||
      '';

    formBajaDetail.value =
      baja.detalle ||
      '';

    formBajaNotes.value =
      baja.observaciones ||
      '';

    bajaModalTitle.textContent =
      `Editar ${baja.idBaja}`;

    saveBajaButton.textContent =
      'Guardar y reenviar';

    bajaFormMessage.textContent =
      '';

    bajaModal.hidden = false;
    formBajaDate.focus();
  }

  function asegurarHerramientaBajaFormulario(
    baja
  ) {
    if (
      Array.from(
        formBajaTool.options
      ).some(option =>
        option.value ===
        baja.idHerramienta
      )
    ) {
      return;
    }

    const option =
      document.createElement(
        'option'
      );

    option.value =
      baja.idHerramienta;

    option.textContent =
      `${baja.codigoInterno || baja.idHerramienta} · ` +
      `${baja.tipoHerramienta}`;

    formBajaTool.appendChild(
      option
    );
  }

  function cerrarFormularioBaja() {
    bajaModal.hidden = true;
    bajaFormMessage.textContent =
      '';
    formBajaTool.disabled =
      false;
  }

  async function guardarBaja(
    event
  ) {
    event.preventDefault();
    bajaFormMessage.textContent =
      '';

    const payload = {
      accion:
        'guardar_baja',
      token:
        auth.token,
      idBaja:
        formBajaId.value.trim(),
      idHerramienta:
        formBajaTool.value,
      fechaSolicitud:
        formBajaDate.value,
      motivoBaja:
        formBajaReason.value,
      estadoFisico:
        formBajaPhysicalState.value,
      valorReferencial:
        formBajaValue.value,
      idMantenimiento:
        formBajaMaintenance.value.trim(),
      evidenciaUrl:
        formBajaEvidence.value.trim(),
      detalle:
        formBajaDetail.value.trim(),
      observaciones:
        formBajaNotes.value.trim()
    };

    if (
      !payload.idHerramienta ||
      !payload.fechaSolicitud ||
      !payload.motivoBaja ||
      !payload.estadoFisico ||
      !payload.detalle
    ) {
      bajaFormMessage.textContent =
        'Completa la herramienta, fecha, motivo, estado físico y detalle.';
      return;
    }

    saveBajaButton.disabled =
      true;

    saveBajaButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar la solicitud.'
        );
      }

      cerrarFormularioBaja();

      mostrarToast(
        respuesta.mensaje
      );

      await cargarBajas();

    } catch (error) {
      bajaFormMessage.textContent =
        error.message;

    } finally {
      saveBajaButton.disabled =
        false;

      saveBajaButton.textContent =
        formBajaId.value
          ? 'Guardar y reenviar'
          : 'Registrar solicitud';
    }
  }

  async function cambiarEstadoBaja(
    baja,
    estado,
    requiereComentario = false
  ) {
    let comentario = '';

    if (requiereComentario) {
      comentario =
        window.prompt(
          estado === 'RECHAZADA'
            ? 'Indica el motivo del rechazo:'
            : 'Indica el motivo de la anulación:'
        );

      if (
        comentario === null
      ) {
        return;
      }

      comentario =
        comentario.trim();

      if (!comentario) {
        window.alert(
          'Debes ingresar un motivo.'
        );

        return;
      }

    } else {
      if (
        !window.confirm(
          `¿Deseas aprobar la baja ${baja.idBaja}?`
        )
      ) {
        return;
      }
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_baja',
          token:
            auth.token,
          idBaja:
            baja.idBaja,
          estado:
            estado,
          comentario:
            comentario
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

      await cargarBajas();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  async function ejecutarBaja(
    baja
  ) {
    let idMovimiento =
      window.prompt(
        'Ingresa el movimiento confirmado de BAJA_HERRAMIENTA:',
        baja.idMovimientoBaja ||
        'MOV-'
      );

    if (
      idMovimiento === null
    ) {
      return;
    }

    idMovimiento =
      idMovimiento.trim()
        .toUpperCase();

    if (!idMovimiento) {
      window.alert(
        'Debes ingresar el movimiento de baja.'
      );

      return;
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_baja',
          token:
            auth.token,
          idBaja:
            baja.idBaja,
          estado:
            'EJECUTADA',
          idMovimientoBaja:
            idMovimiento
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo ejecutar la baja.'
        );
      }

      mostrarToast(
        respuesta.mensaje
      );

      await cargarBajas();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  function descargarBajasCsv() {
    const encabezados = [
      'ID_BAJA',
      'FECHA_SOLICITUD',
      'SEDE',
      'ID_HERRAMIENTA',
      'CODIGO_INTERNO',
      'TIPO_HERRAMIENTA',
      'MARCA',
      'MODELO',
      'SERIE',
      'UBICACION_ACTUAL',
      'RESPONSABLE_ACTUAL',
      'MOTIVO_BAJA',
      'DETALLE',
      'ESTADO_FISICO',
      'VALOR_REFERENCIAL',
      'ID_MANTENIMIENTO',
      'ID_MOVIMIENTO_BAJA',
      'ESTADO_BAJA',
      'SOLICITANTE',
      'FECHA_DECISION',
      'USUARIO_DECIDE',
      'FECHA_EJECUCION',
      'USUARIO_EJECUTA',
      'EVIDENCIA_URL',
      'OBSERVACIONES'
    ];

    const filas =
      bajasFiltradas.map(item => [
        item.idBaja,
        item.fechaSolicitud,
        item.sede,
        item.idHerramienta,
        item.codigoInterno,
        item.tipoHerramienta,
        item.marca,
        item.modelo,
        item.serie,
        item.ubicacionActual,
        item.responsableActual,
        item.motivoBaja,
        item.detalle,
        item.estadoFisico,
        item.valorReferencial,
        item.idMantenimiento,
        item.idMovimientoBaja,
        item.estadoBaja,
        item.solicitante,
        item.fechaDecision,
        item.usuarioDecide,
        item.fechaEjecucion,
        item.usuarioEjecuta,
        item.evidenciaUrl,
        item.observaciones
      ]);

    descargarCsvGenerico(
      `bajas_${new Date().toISOString().slice(0, 10)}.csv`,
      encabezados,
      filas
    );
  }

  async function abrirMantenimientos() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    maintenanceView.hidden = false;

    await cargarMantenimientos();
  }

  async function cargarMantenimientos() {
    maintenanceLoading.hidden = false;
    maintenanceLoading.textContent = 'Cargando mantenimientos…';
    maintenanceTable.hidden = true;
    maintenanceEmpty.hidden = true;
    refreshMaintenanceButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_mantenimientos',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los mantenimientos.'
        );
      }

      mantenimientos =
        Array.isArray(
          respuesta.mantenimientos
        )
          ? respuesta.mantenimientos
          : [];

      puedeRegistrarMantenimientos =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarMantenimientos =
        Boolean(
          respuesta.puedeEditar
        );

      puedeAprobarMantenimientos =
        Boolean(
          respuesta.puedeAprobar
        );

      puedeAnularMantenimientos =
        Boolean(
          respuesta.puedeAnular
        );

      puedeDescargarMantenimientos =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosMantenimientos =
        respuesta.catalogos || {
          herramientas: [],
          sedes: [],
          tiposMantenimiento: [],
          estados: [],
          resultados: [],
          proveedores: []
        };

      newMaintenanceButton.hidden =
        !puedeRegistrarMantenimientos;

      downloadMaintenanceButton.hidden =
        !puedeDescargarMantenimientos;

      actualizarCatalogosMantenimientos();
      renderizarMantenimientos();
      maintenanceLoading.hidden = true;

    } catch (error) {
      console.error(error);
      maintenanceLoading.hidden = false;
      maintenanceLoading.textContent = error.message;
      maintenanceTable.hidden = true;

    } finally {
      refreshMaintenanceButton.disabled = false;
    }
  }

  function actualizarCatalogosMantenimientos() {
    llenarSelectConTodos(
      maintenanceSiteFilter,
      catalogosMantenimientos.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      maintenanceTypeFilter,
      catalogosMantenimientos.tiposMantenimiento || [],
      'Todos'
    );

    llenarSelectConTodos(
      maintenanceStateFilter,
      catalogosMantenimientos.estados || [],
      'Todos'
    );

    llenarSelectConTodos(
      maintenanceResultFilter,
      catalogosMantenimientos.resultados || [],
      'Todos'
    );

    llenarSelectFormulario(
      formMaintenanceType,
      catalogosMantenimientos.tiposMantenimiento || []
    );

    llenarSelectFormulario(
      formMaintenanceResult,
      catalogosMantenimientos.resultados || []
    );

    llenarHerramientasMantenimientoFormulario();

    maintenanceProvidersList.innerHTML = '';

    (
      catalogosMantenimientos.proveedores || []
    ).forEach(proveedor => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        proveedor;

      maintenanceProvidersList.appendChild(
        option
      );
    });
  }

  function llenarHerramientasMantenimientoFormulario() {
    const actual =
      formMaintenanceTool.value;

    formMaintenanceTool.innerHTML = '';

    (
      catalogosMantenimientos.herramientas || []
    ).forEach(herramienta => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        herramienta.idHerramienta;

      option.textContent =
        `${herramienta.codigoInterno || herramienta.idHerramienta} · ` +
        `${herramienta.tipoHerramienta} · ${formatearTexto(
          herramienta.sede
        )} · ${formatearTexto(
          herramienta.tipoUbicacion
        )}`;

      formMaintenanceTool.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        formMaintenanceTool.options
      ).some(option =>
        option.value === actual
      )
    ) {
      formMaintenanceTool.value =
        actual;
    }
  }

  function renderizarMantenimientos() {
    const texto =
      normalizarBusqueda(
        maintenanceSearch.value
      );

    const sede =
      String(
        maintenanceSiteFilter.value || ''
      ).toUpperCase();

    const tipo =
      String(
        maintenanceTypeFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        maintenanceStateFilter.value || ''
      ).toUpperCase();

    const resultado =
      String(
        maintenanceResultFilter.value || ''
      ).toUpperCase();

    const desde =
      maintenanceDateFrom.value;

    const hasta =
      maintenanceDateTo.value;

    mantenimientosFiltrados =
      mantenimientos.filter(item => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            item.idMantenimiento,
            item.idHerramienta,
            item.codigoInterno,
            item.tipoHerramienta,
            item.motivo,
            item.proveedorTaller,
            item.responsableOrigen,
            item.idMovimientoEnvio,
            item.idMovimientoRetorno,
            item.observaciones
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          item.sede === sede;

        const coincideTipo =
          !tipo ||
          item.tipoMantenimiento ===
            tipo;

        const coincideEstado =
          !estado ||
          item.estadoMantenimiento ===
            estado;

        const coincideResultado =
          !resultado ||
          item.resultado ===
            resultado;

        const fecha =
          item.fechaProgramadaIso ||
          convertirFechaMovimientoIso(
            item.fechaProgramada
          );

        const coincideDesde =
          !desde ||
          !fecha ||
          fecha >= desde;

        const coincideHasta =
          !hasta ||
          !fecha ||
          fecha <= hasta;

        return (
          coincideTexto &&
          coincideSede &&
          coincideTipo &&
          coincideEstado &&
          coincideResultado &&
          coincideDesde &&
          coincideHasta
        );
      });

    maintenanceTableBody.innerHTML = '';

    mantenimientosFiltrados.forEach(item => {
      maintenanceTableBody.appendChild(
        crearFilaMantenimiento(
          item
        )
      );
    });

    maintenanceSummaryTotal.textContent =
      String(
        mantenimientosFiltrados.length
      );

    maintenanceSummaryScheduled.textContent =
      String(
        mantenimientosFiltrados.filter(item =>
          item.estadoMantenimiento ===
          'PROGRAMADO'
        ).length
      );

    maintenanceSummaryProgress.textContent =
      String(
        mantenimientosFiltrados.filter(item =>
          item.estadoMantenimiento ===
          'EN_PROCESO'
        ).length
      );

    maintenanceSummaryOverdue.textContent =
      String(
        mantenimientosFiltrados.filter(
          mantenimientoEstaVencido
        ).length
      );

    maintenanceLoading.hidden = true;
    maintenanceTable.hidden =
      mantenimientosFiltrados.length === 0;
    maintenanceEmpty.hidden =
      mantenimientosFiltrados.length !== 0;
  }

  function mantenimientoEstaVencido(
    mantenimiento
  ) {
    if (
      mantenimiento.estadoMantenimiento !==
      'PROGRAMADO'
    ) {
      return false;
    }

    const fecha =
      mantenimiento.fechaProgramadaIso ||
      convertirFechaMovimientoIso(
        mantenimiento.fechaProgramada
      );

    if (!fecha) {
      return false;
    }

    const hoy =
      new Date();

    const hoyIso =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      )
        .toISOString()
        .slice(
          0,
          10
        );

    return fecha < hoyIso;
  }

  function crearFilaMantenimiento(
    mantenimiento
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const principal =
      document.createElement(
        'td'
      );

    principal.className =
      'maintenance-main-cell';

    principal.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          mantenimiento.tipoMantenimiento
        )
      )}</strong>` +
      `<small>${escaparHtml(
        mantenimiento.fechaRegistro ||
        ''
      )}</small>` +
      `<span class="maintenance-id">${escaparHtml(
        mantenimiento.idMantenimiento
      )}</span>`;

    fila.appendChild(
      principal
    );

    const herramienta =
      document.createElement(
        'td'
      );

    herramienta.className =
      'maintenance-tool-cell';

    herramienta.innerHTML =
      `<strong>${escaparHtml(
        mantenimiento.tipoHerramienta ||
        'Sin herramienta'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          mantenimiento.codigoInterno,
          mantenimiento.idHerramienta,
          formatearTexto(
            mantenimiento.sede
          ),
          mantenimiento.responsableOrigen
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      herramienta
    );

    const programacion =
      document.createElement(
        'td'
      );

    programacion.className =
      'maintenance-detail-cell';

    const vencido =
      mantenimientoEstaVencido(
        mantenimiento
      );

    programacion.innerHTML =
      `<strong class="${vencido ? 'maintenance-overdue' : ''}">${escaparHtml(
        mantenimiento.fechaProgramada ||
        'Sin fecha'
      )}${vencido ? ' · Vencido' : ''}</strong>` +
      `<small>${escaparHtml(
        [
          mantenimiento.fechaInicio
            ? `Inicio ${mantenimiento.fechaInicio}`
            : '',
          mantenimiento.fechaFin
            ? `Fin ${mantenimiento.fechaFin}`
            : '',
          mantenimiento.proximoMantenimiento
            ? `Próximo ${mantenimiento.proximoMantenimiento}`
            : ''
        ].filter(Boolean).join(' · ') ||
        mantenimiento.motivo ||
        'Sin detalle'
      )}</small>`;

    fila.appendChild(
      programacion
    );

    const costos =
      document.createElement(
        'td'
      );

    costos.className =
      'maintenance-detail-cell';

    costos.innerHTML =
      `<strong>${escaparHtml(
        mantenimiento.proveedorTaller ||
        'Sin taller'
      )}</strong>` +
      `<small>${escaparHtml(
        `Estimado: ${formatearCostoMantenimiento(
          mantenimiento.costoEstimado
        )} · Real: ${formatearCostoMantenimiento(
          mantenimiento.costoReal
        )}`
      )}</small>`;

    fila.appendChild(
      costos
    );

    const resultado =
      document.createElement(
        'td'
      );

    resultado.className =
      'maintenance-detail-cell';

    resultado.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          mantenimiento.resultado ||
          'PENDIENTE'
        )
      )}</strong>` +
      `<small>${escaparHtml(
        mantenimiento.observaciones ||
        'Sin observaciones'
      )}</small>`;

    fila.appendChild(
      resultado
    );

    const estado =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'status-badge ' +
      (
        mantenimiento.estadoMantenimiento ===
          'FINALIZADO'
          ? 'status-active'
          : mantenimiento.estadoMantenimiento ===
              'CANCELADO'
            ? 'status-inactive'
            : ''
      );

    insignia.textContent =
      formatearTexto(
        mantenimiento.estadoMantenimiento ||
        'PROGRAMADO'
      );

    estado.appendChild(
      insignia
    );

    fila.appendChild(
      estado
    );

    const movimientos =
      document.createElement(
        'td'
      );

    movimientos.className =
      'maintenance-links';

    if (
      mantenimiento.idMovimientoEnvio
    ) {
      const envio =
        document.createElement(
          'span'
        );

      envio.textContent =
        `Envío: ${mantenimiento.idMovimientoEnvio}`;

      movimientos.appendChild(
        envio
      );
    }

    if (
      mantenimiento.idMovimientoRetorno
    ) {
      const retorno =
        document.createElement(
          'span'
        );

      retorno.textContent =
        `Retorno: ${mantenimiento.idMovimientoRetorno}`;

      movimientos.appendChild(
        retorno
      );
    }

    if (
      /^https?:\/\//i.test(
        mantenimiento.evidenciaUrl || ''
      )
    ) {
      const enlace =
        document.createElement(
          'a'
        );

      enlace.href =
        mantenimiento.evidenciaUrl;

      enlace.target =
        '_blank';

      enlace.rel =
        'noopener noreferrer';

      enlace.textContent =
        'Ver evidencia';

      movimientos.appendChild(
        enlace
      );
    }

    if (
      !movimientos.children.length
    ) {
      movimientos.textContent =
        'Sin referencias';
    }

    fila.appendChild(
      movimientos
    );

    const acciones =
      document.createElement(
        'td'
      );

    acciones.className =
      'actions-cell';

    if (
      puedeEditarMantenimientos &&
      [
        'PROGRAMADO',
        'EN_PROCESO'
      ].includes(
        mantenimiento.estadoMantenimiento
      )
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarMantenimiento(
              mantenimiento
            )
        )
      );
    }

    if (
      puedeAprobarMantenimientos &&
      mantenimiento.estadoMantenimiento ===
        'PROGRAMADO'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Iniciar',
          () =>
            cambiarEstadoMantenimiento(
              mantenimiento,
              'EN_PROCESO'
            )
        )
      );
    }

    if (
      puedeAprobarMantenimientos &&
      mantenimiento.estadoMantenimiento ===
        'EN_PROCESO'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Finalizar',
          () =>
            cambiarEstadoMantenimiento(
              mantenimiento,
              'FINALIZADO'
            )
        )
      );
    }

    if (
      puedeAnularMantenimientos &&
      [
        'PROGRAMADO',
        'EN_PROCESO'
      ].includes(
        mantenimiento.estadoMantenimiento
      )
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Cancelar',
          () =>
            cambiarEstadoMantenimiento(
              mantenimiento,
              'CANCELADO',
              true
            )
        )
      );
    }

    if (
      !acciones.children.length
    ) {
      acciones.textContent =
        'Solo lectura';
    }

    fila.appendChild(
      acciones
    );

    return fila;
  }

  function formatearCostoMantenimiento(
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
      return 'S/ 0.00';
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

  function abrirNuevoMantenimiento() {
    maintenanceForm.reset();
    formMaintenanceId.value = '';

    actualizarCatalogosMantenimientos();

    const hoy =
      new Date();

    formMaintenanceScheduledDate.value =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      )
        .toISOString()
        .slice(
          0,
          10
        );

    formMaintenanceResult.value =
      'PENDIENTE';

    formMaintenanceTool.disabled =
      false;

    maintenanceModalTitle.textContent =
      'Nuevo mantenimiento';

    saveMaintenanceButton.textContent =
      'Guardar mantenimiento';

    maintenanceFormMessage.textContent =
      '';

    maintenanceModal.hidden = false;
    formMaintenanceTool.focus();
  }

  function abrirEditarMantenimiento(
    mantenimiento
  ) {
    maintenanceForm.reset();
    actualizarCatalogosMantenimientos();

    asegurarHerramientaMantenimientoFormulario(
      mantenimiento
    );

    formMaintenanceId.value =
      mantenimiento.idMantenimiento;

    formMaintenanceTool.value =
      mantenimiento.idHerramienta;

    formMaintenanceTool.disabled =
      true;

    formMaintenanceScheduledDate.value =
      mantenimiento.fechaProgramadaIso ||
      '';

    formMaintenanceType.value =
      mantenimiento.tipoMantenimiento ||
      '';

    formMaintenanceReason.value =
      mantenimiento.motivo ||
      '';

    formMaintenanceWorkshop.value =
      mantenimiento.proveedorTaller ||
      '';

    formMaintenanceEstimatedCost.value =
      Number(
        mantenimiento.costoEstimado || 0
      ) || '';

    formMaintenanceRealCost.value =
      Number(
        mantenimiento.costoReal || 0
      ) || '';

    asegurarOpcionSelect(
      formMaintenanceResult,
      mantenimiento.resultado
    );

    formMaintenanceResult.value =
      mantenimiento.resultado ||
      'PENDIENTE';

    formMaintenanceEndDate.value =
      mantenimiento.fechaFinIso ||
      '';

    formMaintenanceNextDate.value =
      mantenimiento.proximoMantenimientoIso ||
      '';

    formMaintenanceSendMovement.value =
      mantenimiento.idMovimientoEnvio ||
      '';

    formMaintenanceReturnMovement.value =
      mantenimiento.idMovimientoRetorno ||
      '';

    formMaintenanceEvidence.value =
      mantenimiento.evidenciaUrl ||
      '';

    formMaintenanceNotes.value =
      mantenimiento.observaciones ||
      '';

    maintenanceModalTitle.textContent =
      `Editar ${mantenimiento.idMantenimiento}`;

    saveMaintenanceButton.textContent =
      'Guardar cambios';

    maintenanceFormMessage.textContent =
      '';

    maintenanceModal.hidden = false;
    formMaintenanceScheduledDate.focus();
  }

  function asegurarHerramientaMantenimientoFormulario(
    mantenimiento
  ) {
    if (
      Array.from(
        formMaintenanceTool.options
      ).some(option =>
        option.value ===
        mantenimiento.idHerramienta
      )
    ) {
      return;
    }

    const option =
      document.createElement(
        'option'
      );

    option.value =
      mantenimiento.idHerramienta;

    option.textContent =
      `${mantenimiento.codigoInterno || mantenimiento.idHerramienta} · ` +
      `${mantenimiento.tipoHerramienta}`;

    formMaintenanceTool.appendChild(
      option
    );
  }

  function cerrarFormularioMantenimiento() {
    maintenanceModal.hidden = true;
    maintenanceFormMessage.textContent =
      '';
    formMaintenanceTool.disabled =
      false;
  }

  async function guardarMantenimiento(
    event
  ) {
    event.preventDefault();
    maintenanceFormMessage.textContent =
      '';

    const payload = {
      accion:
        'guardar_mantenimiento',
      token:
        auth.token,
      idMantenimiento:
        formMaintenanceId.value.trim(),
      idHerramienta:
        formMaintenanceTool.value,
      fechaProgramada:
        formMaintenanceScheduledDate.value,
      tipoMantenimiento:
        formMaintenanceType.value,
      motivo:
        formMaintenanceReason.value.trim(),
      proveedorTaller:
        formMaintenanceWorkshop.value.trim(),
      costoEstimado:
        formMaintenanceEstimatedCost.value,
      costoReal:
        formMaintenanceRealCost.value,
      resultado:
        formMaintenanceResult.value,
      fechaFin:
        formMaintenanceEndDate.value,
      proximoMantenimiento:
        formMaintenanceNextDate.value,
      evidenciaUrl:
        formMaintenanceEvidence.value.trim(),
      observaciones:
        formMaintenanceNotes.value.trim(),
      idMovimientoEnvio:
        formMaintenanceSendMovement.value.trim(),
      idMovimientoRetorno:
        formMaintenanceReturnMovement.value.trim()
    };

    if (
      !payload.idHerramienta ||
      !payload.fechaProgramada ||
      !payload.tipoMantenimiento ||
      !payload.motivo
    ) {
      maintenanceFormMessage.textContent =
        'Completa la herramienta, fecha, tipo y motivo.';
      return;
    }

    saveMaintenanceButton.disabled =
      true;

    saveMaintenanceButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el mantenimiento.'
        );
      }

      cerrarFormularioMantenimiento();

      mostrarToast(
        respuesta.mensaje
      );

      await cargarMantenimientos();

    } catch (error) {
      maintenanceFormMessage.textContent =
        error.message;

    } finally {
      saveMaintenanceButton.disabled =
        false;

      saveMaintenanceButton.textContent =
        formMaintenanceId.value
          ? 'Guardar cambios'
          : 'Guardar mantenimiento';
    }
  }

  async function cambiarEstadoMantenimiento(
    mantenimiento,
    estado,
    requiereComentario = false
  ) {
    let comentario = '';

    if (requiereComentario) {
      comentario =
        window.prompt(
          'Indica el motivo de la cancelación:'
        );

      if (
        comentario === null
      ) {
        return;
      }

      comentario =
        comentario.trim();

      if (!comentario) {
        window.alert(
          'Debes ingresar un motivo.'
        );

        return;
      }

    } else {
      const mensaje =
        estado === 'FINALIZADO'
          ? 'Antes de finalizar verifica que el resultado y la fecha de finalización estén registrados. ¿Continuar?'
          : '¿Deseas iniciar este mantenimiento?';

      if (
        !window.confirm(
          mensaje
        )
      ) {
        return;
      }
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_mantenimiento',
          token:
            auth.token,
          idMantenimiento:
            mantenimiento.idMantenimiento,
          estado:
            estado,
          comentario:
            comentario
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

      await cargarMantenimientos();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  function descargarMantenimientosCsv() {
    const encabezados = [
      'ID_MANTENIMIENTO',
      'FECHA_PROGRAMADA',
      'FECHA_INICIO',
      'FECHA_FIN',
      'SEDE',
      'ID_HERRAMIENTA',
      'CODIGO_INTERNO',
      'TIPO_HERRAMIENTA',
      'TIPO_MANTENIMIENTO',
      'MOTIVO',
      'PROVEEDOR_TALLER',
      'COSTO_ESTIMADO',
      'COSTO_REAL',
      'RESULTADO',
      'PROXIMO_MANTENIMIENTO',
      'ESTADO_MANTENIMIENTO',
      'UBICACION_ORIGEN',
      'RESPONSABLE_ORIGEN',
      'ID_MOVIMIENTO_ENVIO',
      'ID_MOVIMIENTO_RETORNO',
      'EVIDENCIA_URL',
      'OBSERVACIONES'
    ];

    const filas =
      mantenimientosFiltrados.map(item => [
        item.idMantenimiento,
        item.fechaProgramada,
        item.fechaInicio,
        item.fechaFin,
        item.sede,
        item.idHerramienta,
        item.codigoInterno,
        item.tipoHerramienta,
        item.tipoMantenimiento,
        item.motivo,
        item.proveedorTaller,
        item.costoEstimado,
        item.costoReal,
        item.resultado,
        item.proximoMantenimiento,
        item.estadoMantenimiento,
        item.ubicacionOrigen,
        item.responsableOrigen,
        item.idMovimientoEnvio,
        item.idMovimientoRetorno,
        item.evidenciaUrl,
        item.observaciones
      ]);

    descargarCsvGenerico(
      `mantenimientos_${new Date().toISOString().slice(0, 10)}.csv`,
      encabezados,
      filas
    );
  }

  async function abrirInventarios() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    inventoriesView.hidden = false;

    await cargarInventarios();
  }

  async function cargarInventarios() {
    inventoriesLoading.hidden = false;
    inventoriesLoading.textContent = 'Cargando inventarios…';
    inventoriesTable.hidden = true;
    inventoriesEmpty.hidden = true;
    refreshInventoriesButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_inventarios',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los inventarios.'
        );
      }

      inventarios =
        Array.isArray(
          respuesta.inventarios
        )
          ? respuesta.inventarios
          : [];

      puedeRegistrarInventarios =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarInventarios =
        Boolean(
          respuesta.puedeEditar
        );

      puedeAprobarInventarios =
        Boolean(
          respuesta.puedeAprobar
        );

      puedeAnularInventarios =
        Boolean(
          respuesta.puedeAnular
        );

      puedeDescargarInventarios =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosInventarios =
        respuesta.catalogos || {
          ubicaciones: [],
          sedes: [],
          estados: []
        };

      newInventoryButton.hidden =
        !puedeRegistrarInventarios;

      actualizarCatalogosInventarios();
      renderizarInventarios();
      inventoriesLoading.hidden = true;

    } catch (error) {
      console.error(error);
      inventoriesLoading.hidden = false;
      inventoriesLoading.textContent = error.message;
      inventoriesTable.hidden = true;

    } finally {
      refreshInventoriesButton.disabled = false;
    }
  }

  function actualizarCatalogosInventarios() {
    llenarSelectConTodos(
      inventorySiteFilter,
      catalogosInventarios.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      inventoryStateFilter,
      catalogosInventarios.estados || [],
      'Todos'
    );

    const actualFiltro =
      inventoryLocationFilter.value;

    inventoryLocationFilter.innerHTML = '';

    const todas =
      document.createElement(
        'option'
      );

    todas.value = '';
    todas.textContent = 'Todas';

    inventoryLocationFilter.appendChild(
      todas
    );

    (
      catalogosInventarios.ubicaciones || []
    ).forEach(ubicacion => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        ubicacion.clave;

      option.textContent =
        ubicacion.etiqueta;

      inventoryLocationFilter.appendChild(
        option
      );
    });

    if (
      actualFiltro &&
      Array.from(
        inventoryLocationFilter.options
      ).some(option =>
        option.value === actualFiltro
      )
    ) {
      inventoryLocationFilter.value =
        actualFiltro;
    }

    const actualFormulario =
      formInventoryLocation.value;

    formInventoryLocation.innerHTML = '';

    (
      catalogosInventarios.ubicaciones || []
    ).forEach(ubicacion => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        ubicacion.clave;

      option.textContent =
        `${ubicacion.etiqueta} · ${ubicacion.cantidadRegistros} registros`;

      formInventoryLocation.appendChild(
        option
      );
    });

    if (
      actualFormulario &&
      Array.from(
        formInventoryLocation.options
      ).some(option =>
        option.value === actualFormulario
      )
    ) {
      formInventoryLocation.value =
        actualFormulario;
    }
  }

  function renderizarInventarios() {
    const texto =
      normalizarBusqueda(
        inventorySearch.value
      );

    const sede =
      String(
        inventorySiteFilter.value || ''
      ).toUpperCase();

    const claveUbicacion =
      inventoryLocationFilter.value;

    const estado =
      String(
        inventoryStateFilter.value || ''
      ).toUpperCase();

    const desde =
      inventoryDateFrom.value;

    const hasta =
      inventoryDateTo.value;

    const filtrados =
      inventarios.filter(inventario => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            inventario.idInventario,
            inventario.sede,
            inventario.tipoUbicacion,
            inventario.idAlmacen,
            inventario.idCuadrilla,
            inventario.idSupervisor,
            inventario.dniResponsable,
            inventario.responsable,
            inventario.usuarioRegistra,
            inventario.observaciones
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          inventario.sede === sede;

        const coincideUbicacion =
          !claveUbicacion ||
          inventario.claveUbicacion ===
            claveUbicacion;

        const coincideEstado =
          !estado ||
          inventario.estadoInventario ===
            estado;

        const fechaIso =
          inventario.fechaInventarioIso ||
          convertirFechaMovimientoIso(
            inventario.fechaInventario
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
          coincideSede &&
          coincideUbicacion &&
          coincideEstado &&
          coincideDesde &&
          coincideHasta
        );
      });

    inventoriesTableBody.innerHTML = '';

    filtrados.forEach(inventario => {
      inventoriesTableBody.appendChild(
        crearFilaInventario(
          inventario
        )
      );
    });

    inventorySummaryTotal.textContent =
      String(
        filtrados.length
      );

    inventorySummaryDraft.textContent =
      String(
        filtrados.filter(item =>
          item.estadoInventario ===
          'BORRADOR'
        ).length
      );

    inventorySummaryFinished.textContent =
      String(
        filtrados.filter(item =>
          item.estadoInventario ===
          'FINALIZADO'
        ).length
      );

    inventorySummaryDifferences.textContent =
      String(
        filtrados.filter(item =>
          Number(
            item.diferenciaAbsoluta || 0
          ) > 0
        ).length
      );

    inventoriesLoading.hidden = true;
    inventoriesTable.hidden =
      filtrados.length === 0;
    inventoriesEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaInventario(
    inventario
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaPrincipal =
      document.createElement(
        'td'
      );

    celdaPrincipal.className =
      'inventory-main-cell';

    celdaPrincipal.innerHTML =
      `<strong>${escaparHtml(
        inventario.fechaInventario ||
        'Sin fecha'
      )}</strong>` +
      `<small>${escaparHtml(
        inventario.fechaRegistro ||
        ''
      )}</small>` +
      `<span class="inventory-id">${escaparHtml(
        inventario.idInventario
      )}</span>`;

    fila.appendChild(
      celdaPrincipal
    );

    const celdaUbicacion =
      document.createElement(
        'td'
      );

    celdaUbicacion.className =
      'inventory-location-cell';

    celdaUbicacion.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          inventario.tipoUbicacion
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            inventario.sede
          ),
          inventario.idAlmacen,
          inventario.idCuadrilla,
          inventario.idSupervisor
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      celdaUbicacion
    );

    fila.appendChild(
      crearCelda(
        inventario.responsable ||
        'Sin responsable'
      )
    );

    fila.appendChild(
      crearCelda(
        String(
          inventario.cantidadItems || 0
        )
      )
    );

    const celdaResultado =
      document.createElement(
        'td'
      );

    celdaResultado.className =
      'inventory-result-cell';

    const diferencias =
      Number(
        inventario.faltantes || 0
      ) +
      Number(
        inventario.sobrantes || 0
      );

    celdaResultado.innerHTML =
      `<strong>${diferencias ? 'Con diferencias' : 'Conforme'}</strong>` +
      `<small>${escaparHtml(
        `${inventario.conformes || 0} conformes · ` +
        `${inventario.faltantes || 0} faltantes · ` +
        `${inventario.sobrantes || 0} sobrantes`
      )}</small>`;

    fila.appendChild(
      celdaResultado
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'status-badge ' +
      (
        inventario.estadoInventario ===
          'FINALIZADO'
          ? 'status-active'
          : inventario.estadoInventario ===
              'ANULADO'
            ? 'status-inactive'
            : ''
      );

    insignia.textContent =
      formatearTexto(
        inventario.estadoInventario ||
        'BORRADOR'
      );

    celdaEstado.appendChild(
      insignia
    );

    fila.appendChild(
      celdaEstado
    );

    const registro =
      document.createElement(
        'td'
      );

    registro.className =
      'inventory-result-cell';

    registro.innerHTML =
      `<strong>${escaparHtml(
        inventario.usuarioRegistra ||
        'Sin usuario'
      )}</strong>` +
      `<small>${escaparHtml(
        inventario.usuarioFinaliza
          ? `Finalizó: ${inventario.usuarioFinaliza}`
          : 'Pendiente de finalizar'
      )}</small>`;

    fila.appendChild(
      registro
    );

    const acciones =
      document.createElement(
        'td'
      );

    acciones.className =
      'actions-cell inventory-actions';

    if (
      puedeEditarInventarios &&
      inventario.estadoInventario ===
        'BORRADOR'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarInventario(
              inventario
            )
        )
      );
    }

    if (
      puedeAprobarInventarios &&
      inventario.estadoInventario ===
        'BORRADOR'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Finalizar',
          () =>
            cambiarEstadoInventario(
              inventario,
              'FINALIZADO'
            )
        )
      );
    }

    if (
      puedeAnularInventarios &&
      inventario.estadoInventario ===
        'BORRADOR'
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'Anular',
          () =>
            cambiarEstadoInventario(
              inventario,
              'ANULADO',
              true
            )
        )
      );
    }

    if (
      puedeDescargarInventarios
    ) {
      acciones.appendChild(
        crearBotonAccion(
          'CSV',
          () =>
            descargarInventarioCsv(
              inventario
            )
        )
      );

      acciones.appendChild(
        crearBotonAccion(
          'Imprimir',
          () =>
            imprimirInventario(
              inventario
            )
        )
      );
    }

    if (
      !acciones.children.length
    ) {
      acciones.textContent =
        'Solo lectura';
    }

    fila.appendChild(
      acciones
    );

    return fila;
  }

  function abrirNuevoInventario() {
    inventoryForm.reset();
    formInventoryId.value = '';
    inventarioActual = null;
    itemsConteoInventario = [];

    const hoy =
      new Date();

    formInventoryDate.value =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      )
        .toISOString()
        .slice(
          0,
          10
        );

    actualizarCatalogosInventarios();

    formInventoryLocation.disabled =
      false;

    loadInventoryStockButton.hidden =
      false;

    inventoryCountSection.hidden =
      true;

    inventoryCountTableBody.innerHTML =
      '';

    inventoryModalTitle.textContent =
      'Nuevo inventario';

    saveInventoryButton.textContent =
      'Guardar borrador';

    inventoryFormMessage.textContent =
      '';

    inventoryModal.hidden = false;
    formInventoryLocation.focus();
  }

  function abrirEditarInventario(
    inventario
  ) {
    inventoryForm.reset();
    inventarioActual =
      inventario;

    formInventoryId.value =
      inventario.idInventario;

    formInventoryDate.value =
      inventario.fechaInventarioIso ||
      '';

    actualizarCatalogosInventarios();

    asegurarUbicacionInventarioFormulario(
      inventario
    );

    formInventoryLocation.value =
      inventario.claveUbicacion;

    formInventoryLocation.disabled =
      true;

    loadInventoryStockButton.hidden =
      true;

    formInventoryNotes.value =
      inventario.observaciones ||
      '';

    itemsConteoInventario =
      (
        inventario.items || []
      ).map(item => ({
        ...item,
        marca:
          '',
        modelo:
          '',
        serie:
          '',
        responsableActual:
          inventario.responsable ||
          ''
      }));

    inventoryLocationSummary.textContent =
      construirEtiquetaInventarioFrontend(
        inventario
      );

    inventoryCountSection.hidden =
      false;

    inventoryModalTitle.textContent =
      `Editar ${inventario.idInventario}`;

    saveInventoryButton.textContent =
      'Guardar cambios';

    inventoryFormMessage.textContent =
      '';

    renderizarConteoInventario();

    inventoryModal.hidden = false;
    formInventoryDate.focus();
  }

  function asegurarUbicacionInventarioFormulario(
    inventario
  ) {
    if (
      Array.from(
        formInventoryLocation.options
      ).some(option =>
        option.value ===
        inventario.claveUbicacion
      )
    ) {
      return;
    }

    const option =
      document.createElement(
        'option'
      );

    option.value =
      inventario.claveUbicacion;

    option.textContent =
      construirEtiquetaInventarioFrontend(
        inventario
      );

    formInventoryLocation.appendChild(
      option
    );
  }

  function construirEtiquetaInventarioFrontend(
    inventario
  ) {
    return [
      inventario.sede,
      inventario.tipoUbicacion,
      inventario.idAlmacen,
      inventario.idCuadrilla,
      inventario.idSupervisor,
      inventario.responsable
    ]
      .filter(Boolean)
      .map(formatearTexto)
      .join(' · ');
  }

  async function cargarStockParaInventario() {
    const clave =
      formInventoryLocation.value;

    if (!clave) {
      inventoryFormMessage.textContent =
        'Selecciona una ubicación.';
      return;
    }

    loadInventoryStockButton.disabled =
      true;

    loadInventoryStockButton.textContent =
      'Cargando…';

    inventoryFormMessage.textContent =
      '';

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cargar_stock_inventario',
          token:
            auth.token,
          claveUbicacion:
            clave
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cargar el stock.'
        );
      }

      itemsConteoInventario =
        Array.isArray(
          respuesta.items
        )
          ? respuesta.items
          : [];

      inventoryLocationSummary.textContent =
        respuesta.ubicacion
          ? respuesta.ubicacion.etiqueta
          : '';

      inventoryCountSection.hidden =
        false;

      formInventoryLocation.disabled =
        true;

      renderizarConteoInventario();

    } catch (error) {
      inventoryFormMessage.textContent =
        error.message;

    } finally {
      loadInventoryStockButton.disabled =
        false;

      loadInventoryStockButton.textContent =
        'Cargar stock';
    }
  }

  function renderizarConteoInventario() {
    const texto =
      normalizarBusqueda(
        inventoryItemSearch.value
      );

    inventoryCountTableBody.innerHTML = '';

    itemsConteoInventario
      .filter(item =>
        !texto ||
        normalizarBusqueda([
          item.tipoHerramienta,
          item.categoria,
          item.codigoInterno,
          item.marca,
          item.modelo,
          item.serie,
          item.responsableActual,
          item.dniResponsable
        ].join(' ')).includes(
          texto
        )
      )
      .forEach(item => {
        inventoryCountTableBody.appendChild(
          crearFilaConteoInventario(
            item
          )
        );
      });

    actualizarResumenConteoInventario();
  }

  function crearFilaConteoInventario(
    item
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const articulo =
      document.createElement(
        'td'
      );

    articulo.innerHTML =
      `<strong>${escaparHtml(
        item.tipoHerramienta ||
        'Sin artículo'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            item.categoria
          ),
          formatearTexto(
            item.tipoControl
          )
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      articulo
    );

    const identificacion =
      document.createElement(
        'td'
      );

    identificacion.innerHTML =
      `<strong>${escaparHtml(
        item.codigoInterno ||
        item.idStock
      )}</strong>` +
      `<small>${escaparHtml(
        [
          item.marca,
          item.modelo,
          item.serie
            ? `Serie ${item.serie}`
            : ''
        ].filter(Boolean).join(' · ') ||
        'Control por cantidad'
      )}</small>`;

    fila.appendChild(
      identificacion
    );

    fila.appendChild(
      crearCelda(
        item.responsableActual ||
        'Sin responsable'
      )
    );

    fila.appendChild(
      crearCelda(
        `${formatearCantidadStock(
          item.cantidadSistema
        )} ${formatearTexto(
          item.unidadMedida
        )}`
      )
    );

    const celdaConteo =
      document.createElement(
        'td'
      );

    const input =
      document.createElement(
        'input'
      );

    input.type =
      'number';

    input.min =
      '0';

    input.step =
      item.tipoControl ===
        'UNITARIO'
        ? '1'
        : '0.01';

    if (
      item.tipoControl ===
        'UNITARIO'
    ) {
      input.max =
        '1';
    }

    input.value =
      String(
        item.cantidadFisica
      );

    input.addEventListener(
      'input',
      () => {
        let valor =
          Number(
            input.value
          );

        if (
          !Number.isFinite(
            valor
          ) ||
          valor < 0
        ) {
          valor = 0;
        }

        if (
          item.tipoControl ===
            'UNITARIO'
        ) {
          valor =
            valor >= 1
              ? 1
              : 0;

          input.value =
            String(
              valor
            );
        }

        item.cantidadFisica =
          valor;

        item.diferencia =
          valor -
          Number(
            item.cantidadSistema || 0
          );

        item.resultado =
          item.diferencia === 0
            ? 'CONFORME'
            : (
                item.diferencia < 0
                  ? 'FALTANTE'
                  : 'SOBRANTE'
              );

        actualizarFilaResultadoInventario(
          fila,
          item
        );

        actualizarResumenConteoInventario();
      }
    );

    celdaConteo.appendChild(
      input
    );

    fila.appendChild(
      celdaConteo
    );

    const diferencia =
      document.createElement(
        'td'
      );

    diferencia.dataset.inventoryDifference =
      'SI';

    fila.appendChild(
      diferencia
    );

    const resultado =
      document.createElement(
        'td'
      );

    resultado.dataset.inventoryResult =
      'SI';

    fila.appendChild(
      resultado
    );

    actualizarFilaResultadoInventario(
      fila,
      item
    );

    return fila;
  }

  function actualizarFilaResultadoInventario(
    fila,
    item
  ) {
    const diferencia =
      fila.querySelector(
        '[data-inventory-difference]'
      );

    const resultado =
      fila.querySelector(
        '[data-inventory-result]'
      );

    if (diferencia) {
      diferencia.textContent =
        formatearCantidadStock(
          item.diferencia
        );
    }

    if (resultado) {
      resultado.innerHTML = '';

      const insignia =
        document.createElement(
          'span'
        );

      insignia.className =
        'inventory-result-badge ' +
        (
          item.resultado ===
            'CONFORME'
            ? 'inventory-result-conforming'
            : item.resultado ===
                'FALTANTE'
              ? 'inventory-result-missing'
              : 'inventory-result-surplus'
        );

      insignia.textContent =
        formatearTexto(
          item.resultado
        );

      resultado.appendChild(
        insignia
      );
    }
  }

  function actualizarResumenConteoInventario() {
    inventoryCountRecords.textContent =
      String(
        itemsConteoInventario.length
      );

    inventoryCountConforming.textContent =
      String(
        itemsConteoInventario.filter(item =>
          item.resultado ===
          'CONFORME'
        ).length
      );

    inventoryCountMissing.textContent =
      String(
        itemsConteoInventario.filter(item =>
          item.resultado ===
          'FALTANTE'
        ).length
      );

    inventoryCountSurplus.textContent =
      String(
        itemsConteoInventario.filter(item =>
          item.resultado ===
          'SOBRANTE'
        ).length
      );
  }

  function cerrarFormularioInventario() {
    inventoryModal.hidden = true;
    inventoryFormMessage.textContent = '';
    formInventoryLocation.disabled =
      false;
    inventoryCountSection.hidden =
      true;
    inventarioActual = null;
    itemsConteoInventario = [];
  }

  async function guardarInventario(
    event
  ) {
    event.preventDefault();
    inventoryFormMessage.textContent =
      '';

    if (
      !formInventoryDate.value ||
      !formInventoryLocation.value ||
      !itemsConteoInventario.length
    ) {
      inventoryFormMessage.textContent =
        'Selecciona la fecha, ubicación y carga el stock.';
      return;
    }

    const payload = {
      accion:
        'guardar_inventario',
      token:
        auth.token,
      idInventario:
        formInventoryId.value.trim(),
      fechaInventario:
        formInventoryDate.value,
      claveUbicacion:
        formInventoryLocation.value,
      observaciones:
        formInventoryNotes.value.trim(),
      items:
        itemsConteoInventario.map(item => ({
          idStock:
            item.idStock,
          cantidadFisica:
            item.cantidadFisica
        }))
    };

    saveInventoryButton.disabled =
      true;

    saveInventoryButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el inventario.'
        );
      }

      cerrarFormularioInventario();

      mostrarToast(
        respuesta.mensaje
      );

      await cargarInventarios();

    } catch (error) {
      inventoryFormMessage.textContent =
        error.message;

    } finally {
      saveInventoryButton.disabled =
        false;

      saveInventoryButton.textContent =
        formInventoryId.value
          ? 'Guardar cambios'
          : 'Guardar borrador';
    }
  }

  async function cambiarEstadoInventario(
    inventario,
    estado,
    requiereComentario = false
  ) {
    let comentario = '';

    if (requiereComentario) {
      comentario =
        window.prompt(
          'Indica el motivo de la anulación:'
        );

      if (
        comentario === null
      ) {
        return;
      }

      comentario =
        comentario.trim();

      if (!comentario) {
        window.alert(
          'Debes ingresar un motivo.'
        );

        return;
      }

    } else {
      const mensaje =
        Number(
          inventario.diferenciaAbsoluta || 0
        ) > 0
          ? 'Este inventario tiene diferencias. Se finalizará sin modificar el stock. ¿Continuar?'
          : '¿Deseas finalizar este inventario?';

      if (
        !window.confirm(
          mensaje
        )
      ) {
        return;
      }
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_inventario',
          token:
            auth.token,
          idInventario:
            inventario.idInventario,
          estado:
            estado,
          comentario:
            comentario
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

      await cargarInventarios();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  function descargarInventarioCsv(
    inventario
  ) {
    const encabezados = [
      'ID_INVENTARIO',
      'FECHA',
      'SEDE',
      'TIPO_UBICACION',
      'RESPONSABLE',
      'ID_STOCK',
      'ID_TIPO',
      'TIPO_HERRAMIENTA',
      'CATEGORIA',
      'TIPO_CONTROL',
      'ID_HERRAMIENTA',
      'CODIGO_INTERNO',
      'CANTIDAD_SISTEMA',
      'CANTIDAD_FISICA',
      'DIFERENCIA',
      'UNIDAD_MEDIDA',
      'RESULTADO',
      'ESTADO_INVENTARIO'
    ];

    const filas =
      (inventario.items || [])
        .map(item => [
          inventario.idInventario,
          inventario.fechaInventario,
          inventario.sede,
          inventario.tipoUbicacion,
          inventario.responsable,
          item.idStock,
          item.idTipo,
          item.tipoHerramienta,
          item.categoria,
          item.tipoControl,
          item.idHerramienta,
          item.codigoInterno,
          item.cantidadSistema,
          item.cantidadFisica,
          item.diferencia,
          item.unidadMedida,
          item.resultado,
          inventario.estadoInventario
        ]);

    descargarCsvGenerico(
      `inventario_${inventario.idInventario}.csv`,
      encabezados,
      filas
    );
  }

  function descargarCsvGenerico(
    nombreArchivo,
    encabezados,
    filas
  ) {
    const contenido =
      [
        encabezados,
        ...filas
      ]
        .map(fila =>
          fila
            .map(valor =>
              escaparCsvStock(
                valor
              )
            )
            .join(';')
        )
        .join('\r\n');

    const blob =
      new Blob(
        [
          '\uFEFF',
          contenido
        ],
        {
          type:
            'text/csv;charset=utf-8'
        }
      );

    const enlace =
      document.createElement(
        'a'
      );

    const url =
      URL.createObjectURL(
        blob
      );

    enlace.href =
      url;

    enlace.download =
      nombreArchivo;

    document.body.appendChild(
      enlace
    );

    enlace.click();
    enlace.remove();

    URL.revokeObjectURL(
      url
    );
  }

  function imprimirInventario(
    inventario
  ) {
    const filas =
      (inventario.items || [])
        .map(
          (
            item,
            indice
          ) =>
            `<tr>` +
            `<td>${indice + 1}</td>` +
            `<td>${escaparHtml(item.tipoHerramienta || '')}</td>` +
            `<td>${escaparHtml(item.codigoInterno || item.idStock || '')}</td>` +
            `<td>${escaparHtml(formatearCantidadStock(item.cantidadSistema))}</td>` +
            `<td>${escaparHtml(formatearCantidadStock(item.cantidadFisica))}</td>` +
            `<td>${escaparHtml(formatearCantidadStock(item.diferencia))}</td>` +
            `<td>${escaparHtml(formatearTexto(item.resultado))}</td>` +
            `</tr>`
        )
        .join('');

    const ventana =
      window.open(
        '',
        '_blank',
        'width=1000,height=760'
      );

    if (!ventana) {
      window.alert(
        'El navegador bloqueó la ventana de impresión.'
      );

      return;
    }

    ventana.document.write(
      `<!doctype html>` +
      `<html lang="es">` +
      `<head>` +
      `<meta charset="utf-8">` +
      `<title>${escaparHtml(inventario.idInventario)}</title>` +
      `<style>` +
      `body{font-family:Arial,sans-serif;color:#111;margin:28px}` +
      `h1{font-size:22px;margin:0}` +
      `.meta{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}` +
      `.meta div{border:1px solid #ccc;padding:9px}` +
      `.meta span{display:block;font-size:11px;color:#555}` +
      `.meta strong{display:block;margin-top:4px;font-size:13px}` +
      `table{width:100%;border-collapse:collapse}` +
      `th,td{border:1px solid #bbb;padding:7px;font-size:11px;text-align:left}` +
      `th{background:#eee}` +
      `@media print{button{display:none}body{margin:12mm}}` +
      `</style>` +
      `</head>` +
      `<body>` +
      `<h1>INVENTARIO FÍSICO</h1>` +
      `<p>${escaparHtml(inventario.idInventario)} · ${escaparHtml(formatearTexto(inventario.estadoInventario))}</p>` +
      `<div class="meta">` +
      `<div><span>Fecha</span><strong>${escaparHtml(inventario.fechaInventario || '')}</strong></div>` +
      `<div><span>Sede</span><strong>${escaparHtml(formatearTexto(inventario.sede))}</strong></div>` +
      `<div><span>Ubicación</span><strong>${escaparHtml(formatearTexto(inventario.tipoUbicacion))}</strong></div>` +
      `<div><span>Responsable</span><strong>${escaparHtml(inventario.responsable || '')}</strong></div>` +
      `<div><span>Ítems</span><strong>${escaparHtml(String(inventario.cantidadItems || 0))}</strong></div>` +
      `<div><span>Diferencias</span><strong>${escaparHtml(String((inventario.faltantes || 0) + (inventario.sobrantes || 0)))}</strong></div>` +
      `</div>` +
      `<table>` +
      `<thead><tr><th>N.°</th><th>Artículo</th><th>Código</th><th>Sistema</th><th>Físico</th><th>Diferencia</th><th>Resultado</th></tr></thead>` +
      `<tbody>${filas}</tbody>` +
      `</table>` +
      `<p><strong>Observaciones:</strong> ${escaparHtml(inventario.observaciones || 'Sin observaciones')}</p>` +
      `<button onclick="window.print()">Imprimir</button>` +
      `</body></html>`
    );

    ventana.document.close();
    ventana.focus();
  }

  async function abrirCargos() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    stockView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    cargosView.hidden = false;

    await cargarCargos();
  }

  async function cargarCargos() {
    cargosLoading.hidden = false;
    cargosLoading.textContent = 'Cargando cargos…';
    cargosTable.hidden = true;
    cargosEmpty.hidden = true;
    refreshCargosButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_cargos',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudieron cargar los cargos.'
        );
      }

      cargos =
        Array.isArray(
          respuesta.cargos
        )
          ? respuesta.cargos
          : [];

      puedeRegistrarCargos =
        Boolean(
          respuesta.puedeRegistrar
        );

      puedeEditarCargos =
        Boolean(
          respuesta.puedeEditar
        );

      puedeAprobarCargos =
        Boolean(
          respuesta.puedeAprobar
        );

      puedeAnularCargos =
        Boolean(
          respuesta.puedeAnular
        );

      puedeDescargarCargos =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosCargos =
        respuesta.catalogos || {
          tiposCargo: [],
          estadosCargo: [],
          sedes: [],
          movimientos: []
        };

      newCargoButton.hidden =
        !puedeRegistrarCargos;

      actualizarCatalogosCargos();
      renderizarCargos();
      cargosLoading.hidden = true;

    } catch (error) {
      console.error(error);
      cargosLoading.hidden = false;
      cargosLoading.textContent = error.message;
      cargosTable.hidden = true;

    } finally {
      refreshCargosButton.disabled = false;
    }
  }

  function actualizarCatalogosCargos() {
    llenarSelectConTodos(
      cargoSiteFilter,
      catalogosCargos.sedes || [],
      'Todas'
    );

    llenarSelectObjetosMovimiento(
      cargoTypeFilter,
      catalogosCargos.tiposCargo || [],
      'Todos'
    );

    llenarSelectObjetosMovimiento(
      cargoStateFilter,
      catalogosCargos.estadosCargo || [],
      'Todos'
    );

    llenarSelectObjetosMovimiento(
      formCargoType,
      catalogosCargos.tiposCargo || []
    );
  }

  function renderizarCargos() {
    const texto =
      normalizarBusqueda(
        cargoSearch.value
      );

    const sede =
      String(
        cargoSiteFilter.value || ''
      ).toUpperCase();

    const tipo =
      String(
        cargoTypeFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        cargoStateFilter.value || ''
      ).toUpperCase();

    const desde =
      cargoDateFrom.value;

    const hasta =
      cargoDateTo.value;

    const filtrados =
      cargos.filter(cargo => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            cargo.idCargo,
            cargo.numeroCargo,
            cargo.tipoCargo,
            cargo.idCuadrilla,
            cargo.idSupervisor,
            cargo.dniResponsable,
            cargo.responsableRecibe,
            cargo.responsableEntrega,
            cargo.observaciones
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          cargo.sede === sede;

        const coincideTipo =
          !tipo ||
          cargo.tipoCargo === tipo;

        const coincideEstado =
          !estado ||
          cargo.estadoCargo === estado;

        const fechaIso =
          cargo.fechaCargoIso ||
          convertirFechaMovimientoIso(
            cargo.fechaCargo
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
          coincideSede &&
          coincideTipo &&
          coincideEstado &&
          coincideDesde &&
          coincideHasta
        );
      });

    cargosTableBody.innerHTML = '';

    filtrados.forEach(cargo => {
      cargosTableBody.appendChild(
        crearFilaCargo(
          cargo
        )
      );
    });

    cargoSummaryTotal.textContent =
      String(
        filtrados.length
      );

    cargoSummaryIssued.textContent =
      String(
        filtrados.filter(item =>
          item.estadoCargo ===
          'EMITIDO'
        ).length
      );

    cargoSummaryAccepted.textContent =
      String(
        filtrados.filter(item =>
          item.estadoCargo ===
          'ACEPTADO'
        ).length
      );

    cargoSummaryClosed.textContent =
      String(
        filtrados.filter(item =>
          item.estadoCargo ===
          'CERRADO'
        ).length
      );

    cargosLoading.hidden = true;
    cargosTable.hidden =
      filtrados.length === 0;
    cargosEmpty.hidden =
      filtrados.length !== 0;
  }

  function crearFilaCargo(
    cargo
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaCargo =
      document.createElement(
        'td'
      );

    celdaCargo.className =
      'cargo-main-cell';

    celdaCargo.innerHTML =
      `<strong>${escaparHtml(
        cargo.fechaCargo ||
        'Sin fecha'
      )}</strong>` +
      `<small>${escaparHtml(
        cargo.idCargo
      )}</small>` +
      `<span class="cargo-number">${escaparHtml(
        cargo.numeroCargo
      )}</span>`;

    fila.appendChild(
      celdaCargo
    );

    const celdaTipo =
      document.createElement(
        'td'
      );

    celdaTipo.className =
      'cargo-detail-cell';

    celdaTipo.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          cargo.tipoCargo
        )
      )}</strong>` +
      `<small>${escaparHtml(
        formatearTexto(
          cargo.sede
        )
      )}</small>`;

    fila.appendChild(
      celdaTipo
    );

    const celdaResponsable =
      document.createElement(
        'td'
      );

    celdaResponsable.className =
      'cargo-responsible-cell';

    celdaResponsable.innerHTML =
      `<strong>${escaparHtml(
        cargo.responsableRecibe ||
        'Sin responsable'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            cargo.cargoResponsable
          ),
          cargo.dniResponsable
            ? `DNI ${cargo.dniResponsable}`
            : '',
          cargo.idCuadrilla,
          cargo.idSupervisor
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      celdaResponsable
    );

    fila.appendChild(
      crearCelda(
        cargo.responsableEntrega ||
        'Sin responsable'
      )
    );

    fila.appendChild(
      crearCelda(
        String(
          cargo.cantidadItems ||
          (
            Array.isArray(
              cargo.items
            )
              ? cargo.items.length
              : 0
          )
        )
      )
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const estado =
      cargo.estadoCargo ||
      'BORRADOR';

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'status-badge ' +
      (
        [
          'ACEPTADO',
          'CERRADO'
        ].includes(
          estado
        )
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

    const celdaSustento =
      document.createElement(
        'td'
      );

    celdaSustento.className =
      'cargo-support-links';

    if (
      /^https?:\/\//i.test(
        cargo.evidenciaUrl || ''
      )
    ) {
      celdaSustento.appendChild(
        crearEnlaceCargo(
          cargo.evidenciaUrl,
          'Evidencia'
        )
      );
    }

    if (
      /^https?:\/\//i.test(
        cargo.firmaUrl || ''
      )
    ) {
      celdaSustento.appendChild(
        crearEnlaceCargo(
          cargo.firmaUrl,
          'Firma'
        )
      );
    }

    if (
      !celdaSustento.children.length
    ) {
      celdaSustento.textContent =
        'Sin enlaces';
    }

    fila.appendChild(
      celdaSustento
    );

    const celdaAcciones =
      document.createElement(
        'td'
      );

    celdaAcciones.className =
      'actions-cell';

    if (
      puedeEditarCargos &&
      [
        'BORRADOR',
        'OBSERVADO'
      ].includes(
        estado
      )
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Editar',
          () =>
            abrirEditarCargo(
              cargo
            )
        )
      );
    }

    if (
      puedeEditarCargos &&
      estado === 'BORRADOR'
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Emitir',
          () =>
            cambiarEstadoCargo(
              cargo,
              'EMITIDO'
            )
        )
      );
    }

    if (
      puedeAprobarCargos &&
      estado === 'EMITIDO'
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Aceptar',
          () =>
            cambiarEstadoCargo(
              cargo,
              'ACEPTADO'
            )
        )
      );

      celdaAcciones.appendChild(
        crearBotonAccion(
          'Observar',
          () =>
            cambiarEstadoCargo(
              cargo,
              'OBSERVADO',
              true
            )
        )
      );
    }

    if (
      puedeEditarCargos &&
      estado === 'OBSERVADO'
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'A borrador',
          () =>
            cambiarEstadoCargo(
              cargo,
              'BORRADOR'
            )
        )
      );
    }

    if (
      puedeAprobarCargos &&
      estado === 'ACEPTADO'
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Cerrar',
          () =>
            cambiarEstadoCargo(
              cargo,
              'CERRADO'
            )
        )
      );
    }

    if (
      puedeAnularCargos &&
      ![
        'CERRADO',
        'ANULADO'
      ].includes(
        estado
      )
    ) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Anular',
          () =>
            cambiarEstadoCargo(
              cargo,
              'ANULADO',
              true
            )
        )
      );
    }

    if (puedeDescargarCargos) {
      celdaAcciones.appendChild(
        crearBotonAccion(
          'Imprimir',
          () =>
            imprimirCargo(
              cargo
            )
        )
      );
    }

    if (
      !celdaAcciones.children.length
    ) {
      celdaAcciones.textContent =
        'Solo lectura';
    }

    fila.appendChild(
      celdaAcciones
    );

    return fila;
  }

  function crearEnlaceCargo(
    url,
    texto
  ) {
    const enlace =
      document.createElement(
        'a'
      );

    enlace.href =
      url;

    enlace.target =
      '_blank';

    enlace.rel =
      'noopener noreferrer';

    enlace.textContent =
      texto;

    return enlace;
  }

  function abrirNuevoCargo() {
    cargoForm.reset();
    formCargoId.value = '';
    cargoSeleccionado = null;
    movimientosCargoSeleccionados =
      new Set();

    const hoy =
      new Date();

    formCargoDate.value =
      new Date(
        hoy.getTime() -
        hoy.getTimezoneOffset() *
        60000
      )
        .toISOString()
        .slice(
          0,
          10
        );

    actualizarCatalogosCargos();

    if (
      formCargoType.options.length
    ) {
      formCargoType.selectedIndex =
        0;
    }

    cargoModalTitle.textContent =
      'Nuevo cargo';

    saveCargoButton.textContent =
      'Guardar borrador';

    cargoFormMessage.textContent =
      '';

    renderizarMovimientosCargoDisponibles();
    actualizarResumenSeleccionCargo();

    cargoModal.hidden = false;
    formCargoType.focus();
  }

  function abrirEditarCargo(
    cargo
  ) {
    cargoForm.reset();
    cargoSeleccionado =
      cargo;

    formCargoId.value =
      cargo.idCargo || '';

    formCargoDate.value =
      cargo.fechaCargoIso || '';

    actualizarCatalogosCargos();

    asegurarOpcionCargo(
      formCargoType,
      cargo.tipoCargo
    );

    formCargoType.value =
      cargo.tipoCargo || '';

    formCargoEvidence.value =
      cargo.evidenciaUrl || '';

    formCargoSignature.value =
      cargo.firmaUrl || '';

    formCargoNotes.value =
      cargo.observaciones || '';

    movimientosCargoSeleccionados =
      new Set(
        (
          Array.isArray(
            cargo.items
          )
            ? cargo.items
            : []
        ).map(item =>
          item.idMovimiento
        )
      );

    cargoModalTitle.textContent =
      `Editar ${cargo.numeroCargo}`;

    saveCargoButton.textContent =
      'Guardar cambios';

    cargoFormMessage.textContent =
      '';

    renderizarMovimientosCargoDisponibles();
    actualizarResumenSeleccionCargo();

    cargoModal.hidden = false;
    formCargoDate.focus();
  }

  function asegurarOpcionCargo(
    select,
    valor
  ) {
    if (
      !valor ||
      Array.from(
        select.options
      ).some(option =>
        option.value === valor
      )
    ) {
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

    select.appendChild(
      option
    );
  }

  function renderizarMovimientosCargoDisponibles() {
    const tipoCargo =
      formCargoType.value;

    const texto =
      normalizarBusqueda(
        cargoMovementSearch.value
      );

    const numeroCargoActual =
      cargoSeleccionado
        ? cargoSeleccionado.numeroCargo
        : '';

    const movimientos =
      (
        catalogosCargos.movimientos || []
      ).filter(movimiento => {
        const disponible =
          !movimiento.numeroCargo ||
          movimiento.numeroCargo ===
            numeroCargoActual;

        const compatible =
          esMovimientoCompatibleCargoFrontend(
            movimiento,
            tipoCargo
          );

        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            movimiento.idMovimiento,
            movimiento.tipoMovimiento,
            movimiento.tipoHerramienta,
            movimiento.codigoInterno,
            movimiento.destinoResponsable,
            movimiento.responsableEntrega
          ].join(' ')).includes(
            texto
          );

        return (
          disponible &&
          compatible &&
          coincideTexto
        );
      });

    cargoMovementList.innerHTML = '';

    const seleccionBase =
      obtenerMovimientoBaseCargoSeleccionado();

    movimientos.forEach(movimiento => {
      const label =
        document.createElement(
          'label'
        );

      label.className =
        'cargo-movement-option';

      const checkbox =
        document.createElement(
          'input'
        );

      checkbox.type =
        'checkbox';

      checkbox.value =
        movimiento.idMovimiento;

      checkbox.checked =
        movimientosCargoSeleccionados.has(
          movimiento.idMovimiento
        );

      const compatibleConBase =
        !seleccionBase ||
        claveDestinoCargoFrontend(
          movimiento
        ) ===
          claveDestinoCargoFrontend(
            seleccionBase
          );

      if (!compatibleConBase) {
        label.classList.add(
          'is-incompatible'
        );

        checkbox.disabled =
          !checkbox.checked;
      }

      checkbox.addEventListener(
        'change',
        () => {
          if (checkbox.checked) {
            movimientosCargoSeleccionados.add(
              movimiento.idMovimiento
            );
          } else {
            movimientosCargoSeleccionados.delete(
              movimiento.idMovimiento
            );
          }

          renderizarMovimientosCargoDisponibles();
          actualizarResumenSeleccionCargo();
        }
      );

      const contenido =
        document.createElement(
          'div'
        );

      contenido.className =
        'cargo-movement-main';

      contenido.innerHTML =
        `<strong>${escaparHtml(
          movimiento.tipoHerramienta ||
          'Sin artículo'
        )}</strong>` +
        `<small>${escaparHtml(
          [
            movimiento.idMovimiento,
            formatearTexto(
              movimiento.tipoMovimiento
            ),
            movimiento.codigoInterno,
            movimiento.destinoResponsable,
            formatearTexto(
              movimiento.destinoSede
            )
          ].filter(Boolean).join(' · ')
        )}</small>`;

      const cantidad =
        document.createElement(
          'span'
        );

      cantidad.className =
        'cargo-movement-quantity';

      cantidad.textContent =
        `${formatearCantidadMovimiento(
          movimiento.cantidad
        )} ${formatearTexto(
          movimiento.unidadMedida
        )}`;

      label.appendChild(
        checkbox
      );

      label.appendChild(
        contenido
      );

      label.appendChild(
        cantidad
      );

      cargoMovementList.appendChild(
        label
      );
    });

    cargoMovementEmpty.hidden =
      movimientos.length !== 0;
  }

  function esMovimientoCompatibleCargoFrontend(
    movimiento,
    tipoCargo
  ) {
    const tipoMovimiento =
      movimiento.tipoMovimiento;

    const esEpp =
      movimiento.categoria ===
      'EPP';

    const reglas = {
      ASIGNACION_CUADRILLA:
        tipoMovimiento ===
          'ASIGNACION_CUADRILLA' &&
        !esEpp,

      ASIGNACION_TECNICO:
        tipoMovimiento ===
          'ASIGNACION_TECNICO' &&
        !esEpp,

      ASIGNACION_SUPERVISOR:
        tipoMovimiento ===
          'ASIGNACION_SUPERVISOR' &&
        !esEpp,

      DEVOLUCION_ALMACEN:
        tipoMovimiento ===
          'DEVOLUCION_ALMACEN',

      TRANSFERENCIA:
        [
          'TRANSFERENCIA_CUADRILLA',
          'TRANSFERENCIA_SEDE'
        ].includes(
          tipoMovimiento
        ),

      CAMBIO_HERRAMIENTA:
        tipoMovimiento ===
          'CAMBIO_HERRAMIENTA',

      ENTREGA_EPP:
        esEpp &&
        [
          'ASIGNACION_CUADRILLA',
          'ASIGNACION_TECNICO',
          'ASIGNACION_SUPERVISOR'
        ].includes(
          tipoMovimiento
        )
    };

    return Boolean(
      reglas[tipoCargo]
    );
  }

  function obtenerMovimientoBaseCargoSeleccionado() {
    const movimientos =
      catalogosCargos.movimientos || [];

    for (
      const id of
      movimientosCargoSeleccionados
    ) {
      const movimiento =
        movimientos.find(item =>
          item.idMovimiento === id
        );

      if (movimiento) {
        return movimiento;
      }
    }

    return null;
  }

  function claveDestinoCargoFrontend(
    movimiento
  ) {
    return [
      movimiento.destinoTipo,
      movimiento.destinoSede,
      movimiento.destinoCuadrilla,
      movimiento.dniResponsableDestino,
      normalizarBusqueda(
        movimiento.destinoResponsable
      )
    ].join('|');
  }

  function actualizarResumenSeleccionCargo() {
    const base =
      obtenerMovimientoBaseCargoSeleccionado();

    cargoSelectedCount.textContent =
      String(
        movimientosCargoSeleccionados.size
      );

    cargoRecipientName.textContent =
      base
        ? base.destinoResponsable ||
          'Sin responsable'
        : 'Sin seleccionar';

    cargoRecipientDni.textContent =
      base
        ? base.dniResponsableDestino ||
          '—'
        : '—';

    cargoRecipientSite.textContent =
      base
        ? formatearTexto(
            base.destinoSede
          )
        : '—';

    cargoDeliverName.textContent =
      base
        ? base.responsableEntrega ||
          '—'
        : '—';
  }

  function cerrarFormularioCargo() {
    cargoModal.hidden = true;
    cargoFormMessage.textContent = '';
    cargoSeleccionado = null;
    movimientosCargoSeleccionados =
      new Set();
  }

  async function guardarCargo(
    event
  ) {
    event.preventDefault();
    cargoFormMessage.textContent = '';

    const payload = {
      accion:
        'guardar_cargo',
      token:
        auth.token,
      idCargo:
        formCargoId.value.trim(),
      fechaCargo:
        formCargoDate.value,
      tipoCargo:
        formCargoType.value,
      evidenciaUrl:
        formCargoEvidence.value.trim(),
      firmaUrl:
        formCargoSignature.value.trim(),
      observaciones:
        formCargoNotes.value.trim(),
      movimientos:
        Array.from(
          movimientosCargoSeleccionados
        )
    };

    if (
      !payload.fechaCargo ||
      !payload.tipoCargo ||
      !payload.movimientos.length
    ) {
      cargoFormMessage.textContent =
        'Completa la fecha, el tipo y selecciona por lo menos un movimiento.';
      return;
    }

    saveCargoButton.disabled = true;
    saveCargoButton.textContent =
      'Guardando…';

    try {
      const respuesta =
        await solicitarApi(
          payload
        );

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo guardar el cargo.'
        );
      }

      cerrarFormularioCargo();

      mostrarToast(
        respuesta.mensaje
      );

      await cargarCargos();

    } catch (error) {
      cargoFormMessage.textContent =
        error.message;

    } finally {
      saveCargoButton.disabled =
        false;

      saveCargoButton.textContent =
        formCargoId.value
          ? 'Guardar cambios'
          : 'Guardar borrador';
    }
  }

  async function cambiarEstadoCargo(
    cargo,
    estado,
    requiereComentario = false
  ) {
    let comentario = '';

    if (requiereComentario) {
      comentario =
        window.prompt(
          estado === 'OBSERVADO'
            ? 'Indica el motivo de la observación:'
            : 'Indica el motivo de la anulación:'
        );

      if (
        comentario === null
      ) {
        return;
      }

      comentario =
        comentario.trim();

      if (!comentario) {
        window.alert(
          'Debes ingresar un motivo.'
        );

        return;
      }

    } else {
      const confirmado =
        window.confirm(
          `¿Deseas cambiar el cargo ${cargo.numeroCargo} a ${formatearTexto(
            estado
          )}?`
        );

      if (!confirmado) {
        return;
      }
    }

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'cambiar_estado_cargo',
          token:
            auth.token,
          idCargo:
            cargo.idCargo,
          estado:
            estado,
          comentario:
            comentario
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cambiar el estado del cargo.'
        );
      }

      mostrarToast(
        respuesta.mensaje
      );

      await cargarCargos();

    } catch (error) {
      window.alert(
        error.message
      );
    }
  }

  function imprimirCargo(
    cargo
  ) {
    const items =
      Array.isArray(
        cargo.items
      )
        ? cargo.items
        : [];

    const filas =
      items.map(
        (
          item,
          indice
        ) =>
          `<tr>` +
          `<td>${indice + 1}</td>` +
          `<td>${escaparHtml(item.idMovimiento || '')}</td>` +
          `<td>${escaparHtml(item.tipoHerramienta || '')}</td>` +
          `<td>${escaparHtml(item.codigoInterno || item.idHerramienta || '')}</td>` +
          `<td>${escaparHtml(formatearCantidadMovimiento(item.cantidad))}</td>` +
          `<td>${escaparHtml(formatearTexto(item.unidadMedida))}</td>` +
          `<td>${escaparHtml(formatearTexto(item.motivo))}</td>` +
          `</tr>`
      ).join('');

    const ventana =
      window.open(
        '',
        '_blank',
        'width=1000,height=760'
      );

    if (!ventana) {
      window.alert(
        'El navegador bloqueó la ventana de impresión.'
      );

      return;
    }

    ventana.document.write(
      `<!doctype html>` +
      `<html lang="es">` +
      `<head>` +
      `<meta charset="utf-8">` +
      `<title>${escaparHtml(cargo.numeroCargo)}</title>` +
      `<style>` +
      `body{font-family:Arial,sans-serif;color:#111;margin:28px}` +
      `h1{font-size:22px;margin:0}` +
      `.meta{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}` +
      `.meta div{border:1px solid #ccc;padding:9px}` +
      `.meta span{display:block;font-size:11px;color:#555}` +
      `.meta strong{display:block;margin-top:4px;font-size:13px}` +
      `table{width:100%;border-collapse:collapse;margin-top:16px}` +
      `th,td{border:1px solid #bbb;padding:7px;font-size:11px;text-align:left}` +
      `th{background:#eee}` +
      `.signatures{display:grid;grid-template-columns:1fr 1fr;gap:70px;margin-top:70px}` +
      `.signature{border-top:1px solid #111;padding-top:8px;text-align:center;font-size:12px}` +
      `.notes{margin-top:18px;border:1px solid #ccc;padding:10px;font-size:12px}` +
      `@media print{button{display:none}body{margin:12mm}}` +
      `</style>` +
      `</head>` +
      `<body>` +
      `<h1>CARGO DE HERRAMIENTAS Y EPP</h1>` +
      `<p>${escaparHtml(cargo.numeroCargo)} · ${escaparHtml(formatearTexto(cargo.estadoCargo))}</p>` +
      `<div class="meta">` +
      `<div><span>Fecha</span><strong>${escaparHtml(cargo.fechaCargo || '')}</strong></div>` +
      `<div><span>Tipo</span><strong>${escaparHtml(formatearTexto(cargo.tipoCargo))}</strong></div>` +
      `<div><span>Sede</span><strong>${escaparHtml(formatearTexto(cargo.sede))}</strong></div>` +
      `<div><span>Responsable que recibe</span><strong>${escaparHtml(cargo.responsableRecibe || '')}</strong></div>` +
      `<div><span>DNI</span><strong>${escaparHtml(cargo.dniResponsable || '')}</strong></div>` +
      `<div><span>Cargo / ubicación</span><strong>${escaparHtml(formatearTexto(cargo.cargoResponsable))}</strong></div>` +
      `<div><span>Responsable que entrega</span><strong>${escaparHtml(cargo.responsableEntrega || '')}</strong></div>` +
      `<div><span>Cuadrilla</span><strong>${escaparHtml(cargo.idCuadrilla || '—')}</strong></div>` +
      `<div><span>Cantidad de ítems</span><strong>${escaparHtml(String(cargo.cantidadItems || items.length))}</strong></div>` +
      `</div>` +
      `<table>` +
      `<thead><tr><th>N.°</th><th>Movimiento</th><th>Artículo</th><th>Código</th><th>Cantidad</th><th>Unidad</th><th>Motivo</th></tr></thead>` +
      `<tbody>${filas || '<tr><td colspan="7">Sin detalle vinculado</td></tr>'}</tbody>` +
      `</table>` +
      `<div class="notes"><strong>Observaciones:</strong><br>${escaparHtml(cargo.observaciones || 'Sin observaciones')}</div>` +
      `<div class="signatures">` +
      `<div class="signature">${escaparHtml(cargo.responsableEntrega || 'Responsable que entrega')}</div>` +
      `<div class="signature">${escaparHtml(cargo.responsableRecibe || 'Responsable que recibe')}<br>DNI: ${escaparHtml(cargo.dniResponsable || '')}</div>` +
      `</div>` +
      `<p style="margin-top:28px;font-size:10px;color:#666">Generado desde VISUAL HERRAMIENTAS.</p>` +
      `<button onclick="window.print()">Imprimir</button>` +
      `</body></html>`
    );

    ventana.document.close();
    ventana.focus();
  }

  async function abrirStockActual() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    movementsView.hidden = true;
    toolsView.hidden = true;
    catalogView.hidden = true;
    warehousesView.hidden = true;
    supervisorsView.hidden = true;
    crewsView.hidden = true;
    usersView.hidden = true;
    stockView.hidden = false;

    await cargarStockActual();
  }

  async function cargarStockActual() {
    stockLoading.hidden = false;
    stockLoading.textContent = 'Cargando stock actual…';
    stockTable.hidden = true;
    stockEmpty.hidden = true;
    refreshStockButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_stock_actual',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo cargar el stock actual.'
        );
      }

      stockActual =
        Array.isArray(
          respuesta.stock
        )
          ? respuesta.stock
          : [];

      puedeDescargarStock =
        Boolean(
          respuesta.puedeDescargar
        );

      catalogosStockActual =
        respuesta.catalogos || {
          sedes: [],
          categorias: [],
          tiposControl: [],
          tiposUbicacion: [],
          estadosStock: [],
          tiposArticulo: []
        };

      downloadStockButton.hidden =
        !puedeDescargarStock;

      actualizarCatalogosStockActual();
      renderizarStockActual();
      stockLoading.hidden = true;

    } catch (error) {
      console.error(error);
      stockLoading.hidden = false;
      stockLoading.textContent = error.message;
      stockTable.hidden = true;

    } finally {
      refreshStockButton.disabled = false;
    }
  }

  function actualizarCatalogosStockActual() {
    llenarSelectConTodos(
      stockSiteFilter,
      catalogosStockActual.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      stockLocationFilter,
      catalogosStockActual.tiposUbicacion || [],
      'Todas'
    );

    llenarSelectConTodos(
      stockCategoryFilter,
      catalogosStockActual.categorias || [],
      'Todas'
    );

    llenarSelectConTodos(
      stockControlFilter,
      catalogosStockActual.tiposControl || [],
      'Todos'
    );

    llenarSelectConTodos(
      stockStateFilter,
      catalogosStockActual.estadosStock || [],
      'Todos'
    );

    const actual =
      stockTypeFilter.value;

    stockTypeFilter.innerHTML = '';

    const todos =
      document.createElement(
        'option'
      );

    todos.value = '';
    todos.textContent = 'Todos';

    stockTypeFilter.appendChild(
      todos
    );

    (
      catalogosStockActual.tiposArticulo || []
    ).forEach(tipo => {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        tipo.idTipo;

      option.textContent =
        tipo.tipoHerramienta;

      stockTypeFilter.appendChild(
        option
      );
    });

    if (
      actual &&
      Array.from(
        stockTypeFilter.options
      ).some(option =>
        option.value === actual
      )
    ) {
      stockTypeFilter.value =
        actual;
    }
  }

  function renderizarStockActual() {
    const texto =
      normalizarBusqueda(
        stockSearch.value
      );

    const sede =
      String(
        stockSiteFilter.value || ''
      ).toUpperCase();

    const ubicacion =
      String(
        stockLocationFilter.value || ''
      ).toUpperCase();

    const categoria =
      String(
        stockCategoryFilter.value || ''
      ).toUpperCase();

    const idTipo =
      String(
        stockTypeFilter.value || ''
      );

    const control =
      String(
        stockControlFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        stockStateFilter.value || ''
      ).toUpperCase();

    stockFiltradoActual =
      stockActual.filter(item => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            item.idStock,
            item.idTipo,
            item.tipoHerramienta,
            item.categoria,
            item.idHerramienta,
            item.codigoInterno,
            item.marca,
            item.modelo,
            item.serie,
            item.condicionFisica,
            item.idAlmacen,
            item.idCuadrilla,
            item.idSupervisor,
            item.dniResponsable,
            item.responsableActual,
            item.observaciones
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          item.sedeActual === sede;

        const coincideUbicacion =
          !ubicacion ||
          item.tipoUbicacion ===
            ubicacion;

        const coincideCategoria =
          !categoria ||
          item.categoria ===
            categoria;

        const coincideTipo =
          !idTipo ||
          item.idTipo ===
            idTipo;

        const coincideControl =
          !control ||
          item.tipoControl ===
            control;

        const coincideEstado =
          !estado ||
          item.estadoStock ===
            estado;

        return (
          coincideTexto &&
          coincideSede &&
          coincideUbicacion &&
          coincideCategoria &&
          coincideTipo &&
          coincideControl &&
          coincideEstado
        );
      });

    stockTableBody.innerHTML = '';

    stockFiltradoActual.forEach(item => {
      stockTableBody.appendChild(
        crearFilaStockActual(
          item
        )
      );
    });

    stockSummaryRecords.textContent =
      String(
        stockFiltradoActual.length
      );

    const sumarCantidadStock =
      lista =>
        lista.reduce(
          (
            total,
            item
          ) =>
            total +
            Number(
              item.cantidad || 0
            ),
          0
        );

    stockSummaryUnitary.textContent =
      formatearDecimalReporte(
        sumarCantidadStock(
          stockFiltradoActual
        )
      );

    stockSummaryAvailable.textContent =
      formatearDecimalReporte(
        sumarCantidadStock(
          stockFiltradoActual.filter(item =>
            item.estadoStock ===
            'DISPONIBLE'
          )
        )
      );

    stockSummaryAssigned.textContent =
      formatearDecimalReporte(
        sumarCantidadStock(
          stockFiltradoActual.filter(item =>
            item.estadoStock ===
            'ASIGNADO'
          )
        )
      );

    stockLoading.hidden = true;
    stockTable.hidden =
      stockFiltradoActual.length === 0;
    stockEmpty.hidden =
      stockFiltradoActual.length !== 0;
  }

  function crearFilaStockActual(
    item
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const celdaArticulo =
      document.createElement(
        'td'
      );

    celdaArticulo.className =
      'stock-main-cell';

    celdaArticulo.innerHTML =
      `<strong>${escaparHtml(
        item.tipoHerramienta ||
        'Sin artículo'
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            item.categoria
          ),
          formatearTexto(
            item.tipoControl
          ),
          item.idTipo
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      celdaArticulo
    );

    const celdaIdentificacion =
      document.createElement(
        'td'
      );

    celdaIdentificacion.className =
      'stock-identification-cell';

    if (
      item.tipoControl ===
      'UNITARIO'
    ) {
      celdaIdentificacion.innerHTML =
        `<strong>${escaparHtml(
          [
            item.marca,
            item.modelo
          ].filter(Boolean).join(' ') ||
          'Sin marca/modelo'
        )}</strong>` +
        `<small>${escaparHtml(
          item.serie
            ? `Serie: ${item.serie}`
            : 'Sin serie'
        )}</small>` +
        `<span class="stock-code">${escaparHtml(
          item.codigoInterno ||
          item.idHerramienta ||
          'Sin código'
        )}</span>`;

    } else {
      celdaIdentificacion.innerHTML =
        `<strong>Control por cantidad</strong>` +
        `<small>${escaparHtml(
          item.idStock
        )}</small>`;
    }

    fila.appendChild(
      celdaIdentificacion
    );

    const celdaUbicacion =
      document.createElement(
        'td'
      );

    celdaUbicacion.className =
      'stock-location-cell';

    celdaUbicacion.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          item.tipoUbicacion
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            item.sedeActual
          ),
          item.idAlmacen,
          item.idCuadrilla,
          item.idSupervisor
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      celdaUbicacion
    );

    const celdaResponsable =
      document.createElement(
        'td'
      );

    celdaResponsable.className =
      'stock-responsible-cell';

    celdaResponsable.innerHTML =
      `<strong>${escaparHtml(
        item.responsableActual ||
        'Sin responsable'
      )}</strong>` +
      `<small>${escaparHtml(
        item.dniResponsable
          ? `DNI: ${item.dniResponsable}`
          : 'Sin DNI'
      )}</small>`;

    fila.appendChild(
      celdaResponsable
    );

    fila.appendChild(
      crearCelda(
        `${formatearCantidadStock(
          item.cantidad
        )} ${formatearTexto(
          item.unidadMedida
        )}`
      )
    );

    const celdaEstado =
      document.createElement(
        'td'
      );

    const insignia =
      document.createElement(
        'span'
      );

    insignia.className =
      'status-badge ' +
      (
        item.estadoStock ===
          'DISPONIBLE'
          ? 'status-active'
          : item.estadoStock ===
              'DADO_DE_BAJA'
            ? 'status-inactive'
            : ''
      );

    insignia.textContent =
      formatearTexto(
        item.estadoStock ||
        'Sin estado'
      );

    celdaEstado.appendChild(
      insignia
    );

    fila.appendChild(
      celdaEstado
    );

    const celdaActualizacion =
      document.createElement(
        'td'
      );

    celdaActualizacion.className =
      'stock-update-cell';

    celdaActualizacion.innerHTML =
      `<strong>${escaparHtml(
        item.fechaActualizacion ||
        'Sin fecha'
      )}</strong>` +
      `<small>${escaparHtml(
        item.usuarioActualiza ||
        'Sin usuario'
      )}</small>`;

    fila.appendChild(
      celdaActualizacion
    );

    const celdaObservaciones =
      document.createElement(
        'td'
      );

    celdaObservaciones.className =
      'stock-notes';

    celdaObservaciones.textContent =
      item.observaciones ||
      'Sin observaciones';

    fila.appendChild(
      celdaObservaciones
    );

    return fila;
  }

  function formatearCantidadStock(
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

  function descargarStockCsv() {
    if (
      !puedeDescargarStock
    ) {
      window.alert(
        'No tienes permiso para descargar el stock.'
      );

      return;
    }

    const encabezados = [
      'ID_STOCK',
      'ID_TIPO',
      'TIPO_HERRAMIENTA',
      'CATEGORIA',
      'TIPO_CONTROL',
      'ID_HERRAMIENTA',
      'CODIGO_INTERNO',
      'MARCA',
      'MODELO',
      'SERIE',
      'CONDICION_FISICA',
      'SEDE_ACTUAL',
      'TIPO_UBICACION',
      'ID_ALMACEN',
      'ID_CUADRILLA',
      'ID_SUPERVISOR',
      'DNI_RESPONSABLE',
      'RESPONSABLE_ACTUAL',
      'CANTIDAD',
      'UNIDAD_MEDIDA',
      'ESTADO_STOCK',
      'FECHA_ACTUALIZACION',
      'USUARIO_ACTUALIZA',
      'OBSERVACIONES'
    ];

    const filas =
      stockFiltradoActual.map(item => [
        item.idStock,
        item.idTipo,
        item.tipoHerramienta,
        item.categoria,
        item.tipoControl,
        item.idHerramienta,
        item.codigoInterno,
        item.marca,
        item.modelo,
        item.serie,
        item.condicionFisica,
        item.sedeActual,
        item.tipoUbicacion,
        item.idAlmacen,
        item.idCuadrilla,
        item.idSupervisor,
        item.dniResponsable,
        item.responsableActual,
        item.cantidad,
        item.unidadMedida,
        item.estadoStock,
        item.fechaActualizacion,
        item.usuarioActualiza,
        item.observaciones
      ]);

    const contenido =
      [
        encabezados,
        ...filas
      ]
        .map(fila =>
          fila
            .map(valor =>
              escaparCsvStock(
                valor
              )
            )
            .join(';')
        )
        .join('\r\n');

    const blob =
      new Blob(
        [
          '\uFEFF',
          contenido
        ],
        {
          type:
            'text/csv;charset=utf-8'
        }
      );

    const enlace =
      document.createElement(
        'a'
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const fecha =
      new Date()
        .toISOString()
        .slice(
          0,
          10
        );

    enlace.href =
      url;

    enlace.download =
      `stock_actual_${fecha}.csv`;

    document.body.appendChild(
      enlace
    );

    enlace.click();
    enlace.remove();

    URL.revokeObjectURL(
      url
    );
  }

  function escaparCsvStock(
    valor
  ) {
    const texto =
      String(
        valor ?? ''
      );

    return (
      '"' +
      texto.replace(
        /"/g,
        '""'
      ) +
      '"'
    );
  }

  async function abrirMovimientos() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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

    if (
      tipo ===
        'LIMA'
    ) {
      const option =
        document.createElement(
          'option'
        );

      option.value =
        'LIMA';

      option.textContent =
        'Lima';

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
        'BAJA',
        'INVENTARIO_ANTERIOR'
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

    if (
      tipo ===
        'INVENTARIO_ANTERIOR'
    ) {
      return 'INVENTARIO ANTERIOR';
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    toolsLoading.textContent =
      'Validando CARGA_INICIAL_STOCK…';
    toolsTable.hidden = true;
    toolsEmpty.hidden = true;
    refreshToolsButton.disabled = true;

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'listar_carga_inicial',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo validar la carga inicial.'
        );
      }

      herramientas =
        Array.isArray(
          respuesta.filas
        )
          ? respuesta.filas
          : [];

      resumenCargaInicial =
        respuesta.resumen || {
          total: 0,
          pendientes: 0,
          validas: 0,
          errores: 0,
          cargadas: 0
        };

      puedeRegistrarHerramientas =
        Boolean(
          respuesta.puedeProcesar
        );

      newToolButton.hidden =
        !puedeRegistrarHerramientas;

      newToolButton.disabled =
        !puedeRegistrarHerramientas ||
        Number(
          resumenCargaInicial.validas || 0
        ) === 0;

      const validas =
        Number(
          resumenCargaInicial.validas || 0
        );

      newToolButton.textContent =
        validas > 0
          ? `Procesar ${Math.min(
              validas,
              Number(
                respuesta.limitePorProceso || 100
              )
            )} fila(s) válida(s)`
          : 'Sin filas válidas';

      actualizarFiltrosCargaInicial(
        respuesta.catalogos || {}
      );

      actualizarResumenCargaInicial();
      renderizarCargaInicial();

      toolsLoading.hidden = true;

    } catch (error) {
      console.error(error);
      toolsLoading.hidden = false;
      toolsLoading.textContent =
        error.message;
      toolsTable.hidden = true;
      toolsEmpty.hidden = true;

    } finally {
      refreshToolsButton.disabled = false;
    }
  }

  function actualizarFiltrosCargaInicial(
    catalogos
  ) {
    llenarSelectConTodos(
      toolCategoryFilter,
      catalogos.sedes || [],
      'Todas'
    );

    llenarSelectConTodos(
      toolTypeFilter,
      catalogos.ubicaciones || [],
      'Todas'
    );

    llenarSelectConTodos(
      toolConditionFilter,
      catalogos.estadosCarga || [],
      'Todos'
    );

    llenarSelectConTodos(
      toolSeriesFilter,
      catalogos.validaciones || [],
      'Todas'
    );
  }

  function actualizarResumenCargaInicial() {
    initialLoadSummaryTotal.textContent =
      String(
        resumenCargaInicial.total || 0
      );

    initialLoadSummaryValid.textContent =
      String(
        resumenCargaInicial.validas || 0
      );

    initialLoadSummaryErrors.textContent =
      String(
        resumenCargaInicial.errores || 0
      );

    initialLoadSummaryLoaded.textContent =
      String(
        resumenCargaInicial.cargadas || 0
      );
  }

  function renderizarCargaInicial() {
    const texto =
      normalizarBusqueda(
        toolSearch.value
      );

    const sede =
      String(
        toolCategoryFilter.value || ''
      ).toUpperCase();

    const ubicacion =
      String(
        toolTypeFilter.value || ''
      ).toUpperCase();

    const estado =
      String(
        toolConditionFilter.value || ''
      ).toUpperCase();

    const validacion =
      String(
        toolSeriesFilter.value || ''
      ).toUpperCase();

    cargaInicialFiltrada =
      herramientas.filter(item => {
        const coincideTexto =
          !texto ||
          normalizarBusqueda([
            item.fila,
            item.sede,
            item.tipoUbicacion,
            item.idAlmacen,
            item.idCuadrilla,
            item.cuadrilla,
            item.dniResponsable,
            item.responsable,
            item.tipoHerramienta,
            item.idTipo,
            item.marcaReferencial,
            item.condicionFisica,
            item.proveedor,
            item.mensaje,
            item.idMovimiento
          ].join(' ')).includes(
            texto
          );

        const coincideSede =
          !sede ||
          item.sede === sede;

        const coincideUbicacion =
          !ubicacion ||
          item.tipoUbicacion ===
            ubicacion;

        const coincideEstado =
          !estado ||
          item.estadoCarga ===
            estado;

        const coincideValidacion =
          !validacion ||
          item.validacion ===
            validacion;

        return (
          coincideTexto &&
          coincideSede &&
          coincideUbicacion &&
          coincideEstado &&
          coincideValidacion
        );
      });

    toolsTableBody.innerHTML = '';

    cargaInicialFiltrada.forEach(item => {
      toolsTableBody.appendChild(
        crearFilaCargaInicial(
          item
        )
      );
    });

    toolsLoading.hidden = true;
    toolsTable.hidden =
      cargaInicialFiltrada.length === 0;
    toolsEmpty.hidden =
      cargaInicialFiltrada.length !== 0;
  }

  function crearFilaCargaInicial(
    item
  ) {
    const fila =
      document.createElement(
        'tr'
      );

    const estado =
      document.createElement(
        'td'
      );

    estado.className =
      'initial-load-main-cell';

    const clase = {
      VALIDA:
        'initial-load-validation-ok',
      ERROR:
        'initial-load-validation-error',
      CARGADA:
        'initial-load-validation-loaded'
    }[
      item.validacion
    ] || '';

    estado.innerHTML =
      `<strong class="${clase}">${escaparHtml(
        formatearTexto(
          item.validacion ||
          'PENDIENTE'
        )
      )}</strong>` +
      `<small>${escaparHtml(
        formatearTexto(
          item.estadoCarga ||
          'PENDIENTE'
        )
      )}</small>` +
      `<span class="initial-load-row-number">Fila ${escaparHtml(
        String(
          item.fila || ''
        )
      )}</span>`;

    fila.appendChild(
      estado
    );

    const ubicacion =
      document.createElement(
        'td'
      );

    ubicacion.className =
      'initial-load-detail-cell';

    ubicacion.innerHTML =
      `<strong>${escaparHtml(
        formatearTexto(
          item.sede ||
          'SIN_SEDE'
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            item.tipoUbicacion ||
            'SIN_UBICACION'
          ),
          item.idAlmacen
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      ubicacion
    );

    const responsable =
      document.createElement(
        'td'
      );

    responsable.className =
      'initial-load-detail-cell';

    responsable.innerHTML =
      `<strong>${escaparHtml(
        item.cuadrilla ||
        item.idCuadrilla ||
        (
          item.tipoUbicacion ===
            'ALMACEN'
            ? 'Almacén'
            : 'Sin cuadrilla'
        )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          item.responsable,
          item.dniResponsable
        ].filter(Boolean).join(' · ') ||
        'Sin responsable'
      )}</small>`;

    fila.appendChild(
      responsable
    );

    const articulo =
      document.createElement(
        'td'
      );

    articulo.className =
      'initial-load-detail-cell';

    articulo.innerHTML =
      `<strong>${escaparHtml(
        item.tipoHerramienta ||
        'Sin herramienta'
      )}</strong>` +
      `<small>${escaparHtml(
        item.idTipo ||
        'ID_TIPO pendiente'
      )}</small>`;

    fila.appendChild(
      articulo
    );

    const cantidad =
      document.createElement(
        'td'
      );

    cantidad.className =
      'report-number';

    cantidad.textContent =
      `${formatearDecimalReporte(
        item.cantidad
      )} ${formatearTexto(
        item.unidadMedida ||
        ''
      )}`.trim();

    fila.appendChild(
      cantidad
    );

    const condicion =
      document.createElement(
        'td'
      );

    condicion.className =
      'initial-load-detail-cell';

    condicion.innerHTML =
      `<strong>${escaparHtml(
        item.marcaReferencial ||
        'Sin marca'
      )}</strong>` +
      `<small>${escaparHtml(
        formatearTexto(
          item.condicionFisica ||
          'SIN_CONDICION'
        )
      )}</small>`;

    fila.appendChild(
      condicion
    );

    const costo =
      document.createElement(
        'td'
      );

    costo.className =
      'initial-load-detail-cell';

    costo.innerHTML =
      `<strong>${escaparHtml(
        item.tipoCosto ===
          'SIN_INFORMACION'
          ? 'Sin información'
          : formatearMonedaReporte(
              item.costoReferencial
            )
      )}</strong>` +
      `<small>${escaparHtml(
        [
          formatearTexto(
            item.tipoCosto ||
            'SIN_TIPO_COSTO'
          ),
          item.proveedor
        ].filter(Boolean).join(' · ')
      )}</small>`;

    fila.appendChild(
      costo
    );

    const validacion =
      document.createElement(
        'td'
      );

    validacion.className =
      'initial-load-message';

    validacion.innerHTML =
      `<strong class="${clase}">${escaparHtml(
        item.mensaje ||
        ''
      )}</strong>` +
      (
        item.idMovimiento
          ? `<small>${escaparHtml(
              item.idMovimiento
            )}</small>`
          : ''
      );

    fila.appendChild(
      validacion
    );

    return fila;
  }

  async function procesarCargaInicial() {
    const validas =
      Number(
        resumenCargaInicial.validas || 0
      );

    if (
      !puedeRegistrarHerramientas ||
      validas === 0
    ) {
      return;
    }

    const confirmar =
      window.confirm(
        `Se procesarán hasta 100 filas válidas y se actualizará Stock Actual. ¿Continuar?`
      );

    if (!confirmar) {
      return;
    }

    newToolButton.disabled = true;
    newToolButton.textContent =
      'Procesando…';

    try {
      const respuesta =
        await solicitarApi({
          accion:
            'procesar_carga_inicial',
          token:
            auth.token
        });

      if (!respuesta.correcto) {
        throw new Error(
          respuesta.mensaje ||
          'No se pudo procesar la carga inicial.'
        );
      }

      mostrarToast(
        respuesta.mensaje
      );

      await cargarHerramientas();

    } catch (error) {
      window.alert(
        error.message
      );

    } finally {
      newToolButton.disabled = false;
    }
  }

  async function abrirCatalogoHerramientas() {
    dashboardView.hidden = true;
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
      (estado === 'ACTIVA' ? 'status-active' : 'status-inactive');
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

      const nuevoEstado =
        estado === 'ACTIVA'
          ? 'INACTIVA'
          : 'ACTIVA';

      celdaAcciones.appendChild(crearBotonAccion(
        nuevoEstado === 'ACTIVA'
          ? 'Activar'
          : 'Inactivar',
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
    formCrewStatus.value = 'ACTIVA';
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
    formCrewStatus.value = String(cuadrilla.estado || 'ACTIVA').toUpperCase();
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
      estado: formCrewStatus.value || 'ACTIVA',
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
          'ACTIVA'
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
    const accion = estado === 'ACTIVA' ? 'activar' : 'inactivar';
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    administrationView.hidden = true;
    reportsView.hidden = true;
    alertsView.hidden = true;
    bajasView.hidden = true;
    maintenanceView.hidden = true;
    inventoriesView.hidden = true;
    cargosView.hidden = true;
    stockView.hidden = true;
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
    administracionActual = null;
    administracionPerfilSeleccionado = '';
    administracionPestanaActiva = 'PERMISOS';
    reporteActual = null;
    reporteVistaActiva = 'RESUMEN';
    alertas = [];
    alertasFiltradas = [];
    bajas = [];
    bajasFiltradas = [];
    mantenimientos = [];
    mantenimientosFiltrados = [];
    inventarios = [];
    inventarioActual = null;
    itemsConteoInventario = [];
    cargos = [];
    cargoSeleccionado = null;
    movimientosCargoSeleccionados = new Set();
    stockActual = [];
    stockFiltradoActual = [];
    movimientos = [];
    herramientas = [];
    cargaInicialFiltrada = [];
    resumenCargaInicial = {
      total: 0,
      pendientes: 0,
      validas: 0,
      errores: 0,
      cargadas: 0
    };
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
