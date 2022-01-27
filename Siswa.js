const { response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/rata" ,(request, response) => {
    // storing the request data 

    var data =  request.body.siswa 
    var nilaiSiswa = 0
    var totalNilai = 0
    var lulus = []
    var tidakLulus = []
    

    // Rata Rata Semua Siswa
for (let i = 0; i < data.length; i++) {
   nilaiSiswa += data[i].math + data[i].english 
   totalNilai = nilaiSiswa / 8
}
for (let l = 0; l < data.length; l++) {
    avgSiswa = (data[l].math + data[l].english)    / 2
    if (avgSiswa >= totalNilai) {
        lulus.unshift({
            nama : data[l].nama
        })
    } else {
        tidakLulus.unshift ({
            nama : data[l].nama
        })
    }
    
}




 return response.json ({

    NilaiRata_Rata : `Nilai Rata Rata semua siswa adalah ${totalNilai}` ,
    Lulus : lulus ,
    tidakLulus : tidakLulus
 })


})

 app.listen(8000, () => {
    console.log(`Server run on port 8000`);
 })