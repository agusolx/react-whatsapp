function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Chat');
  console.log(e)
  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('React Websocket')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

const doPost = (request = {}) => {
  const { parameter, postData: { contents, type } = {} } = request;
  const { name, country } = JSON.parse(contents);
  if (parameter.action === 'getCountry') {
    return ContentService.createTextOutput(country);
  } else {
    return ContentService.createTextOutput(name);
  }
};

const makeHttpPostRequest = () => {
  const url = ScriptApp.getService().getUrl() + '?action=getCountrdy';

  const payload = {
    name: 'Amit Agarwal',
    blog: 'www.labnol.org',
    country: 'India',
  };

  const options = {
    method: 'POST',
    followRedirects: true,
    muteHttpExceptions: true,
    payload: JSON.stringify(payload),
  };

  const response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() == 200) {
    Logger.log(response.getContentText());
  }
  console.log(response.getResponseCode())
};