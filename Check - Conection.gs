const checkConnection = () => {
  try {
    let data = JSON.parse(UrlFetchApp.fetch(url + "/status").getResponseCode());
    connection = true;
    msg = "Whats-sheets";
    saveConfiguration({ url: url, connection: connection, msg: msg });
  } catch (error) {
    connection = false;
    msg = "Please Scan Barcode";
    SpreadsheetApp.getUi().alert(msg);
    saveConfiguration({ url: url, connection: connection, msg: msg });
  }
};
