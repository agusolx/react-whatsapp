function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Chat');
  console.log(e)
  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('React Websocket')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e){
  const body = e.postData.contents
  const bodyJson = JSON.parse(body);

  try{
    saveMessage(bodyJson)
  }catch(e){
//  SpreadsheetApp.getUi().alert(e.message)
  }
  

}

