const { response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/jajan" ,(request, response) => {
    // storing the request data 

    var data =  request.body.jajan 
    var totalHarga = 0
    var barang

for (let i = 0; i < data.length; i++) {
   totalHarga += data[i].harga * data[i].jumlah * 110 / 100
   barang += data[i].nama   
}


 return response.json ({

    TotalHarga : `Total Harga Semua Barang adalah ${totalHarga.toLocaleString()} Rupiah` ,
 })

})

 app.listen(8000, () => {
    console.log(`Server run on port 8000`);
 })