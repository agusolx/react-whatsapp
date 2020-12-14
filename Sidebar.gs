const showSidebar = () => {
  var html = HtmlService.createTemplateFromFile("Index");
  Logger.log(html.qrabay);
  var rendered = html
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle("Whats Sheets")
    .setWidth(350);

  SpreadsheetApp.getUi()
    .showSidebar(rendered);
}
