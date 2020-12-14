function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Chat');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('React Websocket')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}