const getChat=()=>{
  const date = new Date();
  const from = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  const to = new Date(date.getFullYear(), date.getMonth() + 1, 1).getTime();
  const sheet = SpreadsheetApp.getActive();
  const ws = sheet.getSheetByName("Last Usage");
  ws.getRange(2, 2, ws.getLastRow(), ws.getLastColumn()).clear();
  const value = ws.getDataRange().getValues();
  let header = value[0];
  const noHp = ws.getRange(1, 1, ws.getLastRow(), 1).getValues();
  let UrlHp = [];
  noHp.forEach((h, r) => {
    if (r > 0) {
      try {
        let data = JSON.parse(
          UrlFetchApp.fetch(url + "/chat/" + h[0]).getContentText()
        );
        data.forEach(chat => {
          if (
            !chat.fromMe &&
            +chat.timestamp > +from / 1000 &&
            +chat.timestamp < +to / 1000
          ) {
            header.forEach((h, i) => {
              if (chat.body.toLowerCase().includes(h.toLowerCase())) {
                ws.getRange(r + 1, i + 1).setValue(chat.body);
              }
            });
          }
          ws.getRange(r + 1, header.length + 1).setValue(chat.body);
          ws.getRange(r + 1, header.length + 2).setValue(
            new Date(chat.timestamp * 1000)
          );
        });
      } catch (e) {
        ws.getRange(r + 1, header.length + 1).setValue("no chat");
      }
    }
  });

}
