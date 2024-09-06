const { Application, Data } = Spotfire.Dxp;
const { DataTable } = Spotfire.Dxp.Data;

export function reloadData({ document, application }: ReloadDataParameters) {

// Get the DataManager from the current document
const dataManager = document.Data.Tables;

// Reload all data tables
dataManager.ReloadAllData();

// Optionally, you can log a message to indicate that the data reload is complete
console.log("All data tables have been reloaded.");

}

RegisterEntryPoint(reloadData);