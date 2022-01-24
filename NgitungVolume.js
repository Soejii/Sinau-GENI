// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express
let app = express()

app.use(express.json())

// endpoint pertama kita
app.post("/kubus", (request, response) => {
    let panjang = request.body.panjang
    let volume = panjang * panjang * panjang
    
    return response.json({
        panjang: panjang,
        volume: volume
        
    })
})

// endpoint kedua 
app.post("/balok", (request, response) => {
    let panjang = request.body.panjang
    let lebar = request.body.lebar
    let tinggi = request.body.tinggi

    let volume = panjang * lebar * tinggi
    
    return response.json({
        message: `Volume dari balok adalah ${volume}`

        
    })
})

// endpoint ketiga
app.post("/bola", (request, response) => {
    let rusuk = request.body.rusuk
    

    let volume = 4 / 3 * 22 / 7 * rusuk * rusuk * rusuk
    
    return response.json({
        message: `Volume dari Bola adalah ${volume}`

        
    })
})

// endpoint keempat
app.post("/prisma", (request, response) => {
    let tinggiAlas = request.body.tinggiAlas
    let alas = request.body.alas
    let tinggi = request.body.tinggi


    let luasAlas = 1 / 2 * alas * tinggiAlas

    let volume = luasAlas * tinggi
    
    return response.json({
        message: `Volume dari prisma adalah ${volume}`

        
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})