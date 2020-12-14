const sendWa = (hp, pesan, row, collStat) => {
  const lock = LockService.getScriptLock();
  lock.waitLock(3000);
  checkConnection();
  if (connection === true) {
    const requestOptions = {
      method: "POST",
      redirect: "manual",
      header: {
        "Content-Type": "application/json"
      },
      payload: {
        number: hp.toString(),
        message: pesan
      }
    };

    try {
      let data = JSON.parse(
        UrlFetchApp.fetch(url + "/send", requestOptions).getContentText()
      );
      let status = data.status;
      let eros;
      if (status === true) {
        ress = "Delivered ";
      }
    } catch (err) {
      console.log(err);
      if(err.message.includes("The number is not registered")){
      ress = "The number is not registered";
      }
    }
    //status pesan
    ss.getActiveSheet()
      .getRange(row, collStat)
      .setValue(ress);
  }
  if (connection === false) {
    ss.getActiveSheet()
      .getRange(row, collStat)
      .setValue("Scan Barcode Dulu");
  }
  lock.releaseLock();

  return;
};

const up = () => {
  let docProps = PropertiesService.getDocumentProperties();
  let url = docProps.getProperty("url");
  if (url) {
    url = url;
  } else {
    url = "";
    docProps.setProperty("url", url);
  }
  let connection = docProps.getProperty("connection");
  if (connection) {
    connection = connection;
  } else {
    connection = false;
    docProps.setProperty("connection", connection);
  }
  let msg = docProps.getProperty("message");

  if (msg) {
    msg = msg;
  } else {
    msg = "";
    docProps.setProperty("msg", msg);
  }
  let config = { url: url, connection: connection, msg: msg };

  return config;
};
