function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Whats-App")
    .addItem("Install", "start")
    .addItem("Refresh Connection", "checkConnection")
    .addItem("Open Whatapp", "showSidebar")
    .addItem("Bulk Send", "BlastAll")
    .addToUi();
}

const start = () => {
  const triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger("Wa")
    .forSpreadsheet(ss)
    .onEdit()
    .create();

  ScriptApp.newTrigger("onOpen")
    .forSpreadsheet(ss)
    .onOpen()
    .create();
}
