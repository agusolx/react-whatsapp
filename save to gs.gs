function saveData(data) {
  let number = data.to.replace("@c.us","")
  let pesan = data.body
  
  
  pesan.includes("referensi")
  
  if(!data.fromMe){
    saveMessage(data)
    }
  
}

function saveMessage(message){
  const sheet = SpreadsheetApp.getActive()
  const ws = sheet.getSheetByName("message")
  let data = ws.getRange(1,1,ws.getLastRow(),).getValues()
  const lastRow = ws.getLastRow()
  
  let number = message.from.replace("@c.us","")
  let row
  let cek = data.filter((n,i)=>{
  
    if(n[0].toString() === number.toString()){
    
    row = i+1
    return row
    }
  })
  
  ws.appendRow([message.from,message.body])

}