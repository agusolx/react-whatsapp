let url ="https://ossified-dynamic-dry.glitch.me/"

function myFunction() {
let contacts = UrlFetchApp.fetch(url+"/contacts").getContentText()
let contact = JSON.parse(contacts)
let data = []
contact.forEach((c,i)=>{
if(i<10){
data.push([c.name,c.number])
//SpreadsheetApp.getActive().appendRow([c.name,c.number])

}
console.log(data)

})

}