function saveData(data) {
  let number = data.to.replace("@c.us","")
  let pesan = data.body

  if(!data.fromMe){
    saveMessage(data)
    }
  
}

function saveMessage(message){
  const sheet = SpreadsheetApp.getActive()
  const ws = sheet.getSheetByName("message")
  let data = ws.getRange(1,1,ws.getLastRow(),).getValues()
  const lastRow = ws.getLastRow()
  
  let pesan = message.body
  let number = message.from.replace("@c.us","")
  let row
  let cek = data.filter((n,i)=>{
  
    if(n[0].toString() === number.toString()){
    
    row = i+1
    return row
    }
  })
  console.log(row)

  //last message
  if(row){
  ws.getRange(row, 6).setValue(message.body)
  ws.getRange(row, 7).setValue(new Date())
  }
  //keyword (referensi)
  if(row && pesan.toString().toLowerCase().includes("referensi")){
  ws.getRange(row, 4).setValue(message.body)
  ws.getRange(row, 5).setValue(new Date())
  
  }
  //first message
  if(!row){
  ws.appendRow([number,message.body,new Date()])
  }
}