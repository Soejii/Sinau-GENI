const { response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/jajan" ,(request, response) => {
    // storing the request data 

    let data =  request.body.usia 
    let jmlRemaja = 0
    let jmlTua = 0
    let jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {
            if (data[i].usia >= 12 && data[i].usia <= 24) {
                jmlRemaja +=1
            }   
            
            if (data[i].usia >= 25 && data[i].usia <= 55) {
                jmlDewasa +=1
            }      
            
            if (data[i].usia > 55 ) {
                jmlTua +=1
            }        
    }
        return response.json({
            JumlahDewasa: `Total jumlah Dewasa adalah ${jmlDewasa}`,
            JumlahTua: `Total jumlah Tua adalah ${jmlTua}`,
            JumlahRemaja: `Total jumlah Remaja adalah ${jmlRemaja}}`
        })
})



app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})