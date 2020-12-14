const SendImage = (hp, pesan, row, collStat, gambar) => {
  checkConnection();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  let datafiles;
    try {
      datafiles = cekimage(gambar);
    } catch (e) {
      console.log(e);
      SpreadsheetApp.getUi().alert(e);
    }

  console.log(datafiles);
  if (connection === true) {
    const requestOptions = {
      method: "POST",
      //      redirect: 'manual',
      header: {
        "Content-Type": "application/json"
      },
      muteHttpExceptions: true,
      payload: {
        number: hp.toString(),
        caption: pesan,
        file: datafiles.dataf,
        type: datafiles.mime,
        fileName: datafiles.fileName
      }
    };
    try {
      let data = JSON.parse(
        UrlFetchApp.fetch(url + "/send-media", requestOptions).getContentText()
      );
      let status = data.status;
      if (status === true) {
        ress = "Delivered ";
      }
      if (status !== true) {
        ress = data.message;
      }
    } catch (err) {
      ress = "Pesan Gagal Di Kirim";
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