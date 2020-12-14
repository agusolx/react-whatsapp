//const sheetName = "whats-sheet";
const BlastAll = () => {
  const ws = SpreadsheetApp.getActive().getActiveSheet();
  const values = ws.getDataRange().getValues();
  const obj = {};
  // add count property to the object

  obj.count = values.length - 1;
  obj.publisher = "akang";
  obj.publisherUrl = "sheetName";
  obj.lastBuildDate = new Date();

  // initialize the items array of the object
  obj.items = [];
  // get the keys form the table header (the first row (index 0) in the sheet)
  const keys = values[0];

  // loop through values row by row, each row will be added as an item in the object
  values.forEach((rowValue, row) => {
    // read the data from row 2 (index 1)
    if (row > 0) {
      // initialize the item object for each row
      let item = {};
      // loop through row value cell by cell, each cell will be added as an property in the item object
      rowValue.forEach((cell, column) => {
        // add row index as an id for the item
        item.id = row;
        // get the key for the cell
        let key = keys[column];
        // assign key : cell pair to the item object
        item[key] = cell;
      });
      // push item to items array
      if (!item.status && typeof item.number === "number") {
        obj.items.push(item);
      }
    }
  });
  obj.items.forEach((item, row) => {
    if (row < 100) {
      if (!item.status && item.number && !item.file) {
        number = item.number;
        message = item.message;
        row = row + 1;
        collStat = keys.indexOf("status") + 1;
        sendWa(number, message, item.id + 1, collStat);
      }
      if (!item.status && item.number && item.file) {
        number = item.number;
        message = item.message;
        row = row + 1;
        collStat = keys.indexOf("status") + 1;
        gambar = item.file;
        SendImage(number, message, item.id + 1, collStat, gambar);
      }
      if (!item.status && item.number && !item.file && !item.message) {
        number = item.number;
        message = "";
        row = row + 1;
        collStat = keys.indexOf("status") + 1;
        checkNumber = (number, message, item.id + 1, collStat);
      }
    }
  });
};