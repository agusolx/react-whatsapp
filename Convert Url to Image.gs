const cekimage = Id => {
  var img = UrlFetchApp.fetch(Id);

  var type = img.getBlob().getContentType();
  var data = img.getBlob().getBytes();
  var name = img.getBlob().getName();
  let datafile = {
    dataf: Utilities.base64Encode(data),
    mime: type,
    fileName: name
  };

  return datafile;
};