/*
Manualy send whatsapp "JUST CLICK CHECKBOX IN GOOGLE SHEET"
=================================
PLEASE DO NOT REMOVE OR CHANGE
=================================
number
message
file
status
=================================

*/

const ss = SpreadsheetApp.getActive();
const sheet = ss.getActiveSheet();

const Wa = e => {
//  try {
    let header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    let collHp = header[0].indexOf("number") + 1;
    let collPesan = header[0].indexOf("message") + 1;
    let collImage = header[0].indexOf("file") + 1;
    let collStat = header[0].indexOf("status") + 1;
    let sN = e.source.getActiveSheet().getName();
    let oldValue = e.oldValue.toLowerCase();
    let newValue = e.value.toLowerCase();
    let row = e.range.getRow();
    let coll = e.range.getColumn();
    let hp;
    let pesan;
    let gambar;
    const lock = LockService.getScriptLock();
    lock.waitLock(3000);
    if (oldValue === "false" && newValue === "true") {
      hp = sheet.getRange(row, collHp).getValue();
      pesan = sheet.getRange(row, collPesan).getValue();
      gambar = sheet
        .getRange(row, collImage)
        .getValue()
        .toString();
      if (gambar !== "" && typeof hp === "number" && pesan !== "") {
        pesan = sheet.getRange(row, collPesan).getValue();
        gambar = sheet
          .getRange(row, collImage)
          .getValue()
          .toString();
        SendImage(hp, pesan, row, collStat, gambar);
      }
      if (gambar === "" && typeof hp === "number") {
        pesan = sheet.getRange(row, collPesan).getValue();
        sendWa(hp, pesan, row, collStat);
      }
    }
    lock.releaseLock();
//  } catch (e) {
//    console.log(e);
//  }
};