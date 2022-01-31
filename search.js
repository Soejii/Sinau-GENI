const {  request , response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/search" ,(request, response) => {
    let input = request.body.input
    let data = [
         {"nis" : 101 , "nama" : "Adinda" , "alamat" : "Araya"} ,
         {"nis" : 102 , "nama" : "Andika" , "alamat" : "Sawojajar"} ,
         {"nis" : 103 , "nama" : "Suji" , "alamat" : "Sidoarjo"} ,
         {"nis" : 104 , "nama" : "Rama" , "alamat" : "Sawojajar"} ,
         {"nis" : 105 , "nama" : "Roni" , "alamat" : "Jombang"} ,
         {"nis" : 106 , "nama" : "Jack" , "alamat" : "Surabaya"} ,
         {"nis" : 107 , "nama" : "Doni" , "alamat" : "Araya"} ,
         {"nis" : 108 , "nama" : "Anya" , "alamat" : "Jombang"} ,
         {"nis" : 109 , "nama" : "Sufi" , "alamat" : "Sidoarjo"} ,
         {"nis" : 110 , "nama" : "Dhimas" , "alamat" : "Surabaya"} 
     ]
     const cari = data.filter(data => data.nama === input || data.nis === input || data.alamat === input)


     return response.json({
        jumlah_data : cari.length ,
        data : cari 
    })
})



app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})