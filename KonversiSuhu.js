// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express

let app = express()

app.use(express.json())


//endpoint 1
app.post("/celcius", (request, response) => {
    let celcius = request.body.celcius
    let reamur = 4 / 5 * celcius 
    let fahrenheit = (celcius * 1.8) + 32 
    let kelvin = celcius + 273

    
    return response.json({
        KonverterReamur: `Konversi suhu celcius ${celcius} ke reamur adalah ${reamur}` ,
        KonverterFahrenheit: `Konversi suhu celcius ${celcius} ke fahrenheit adalah ${fahrenheit}` ,
        KonverterKelvin: `Konversi suhu celcius ${celcius} ke kelvin adalah ${kelvin}` 

    })
})
app.use(express.json())


//endpoint 2
app.post("/r", (request, response) => {
    let r = request.body.r
    let c = 1.25 * r
    let f = (r * 9 / 4) + 32
    let k = (r * 5 / 4) + 273.15

    
    return response.json({
        KonverterReamur: `Konversi suhu Reamur ${r} ke Celcius adalah ${c}` ,
        KonverterFahrenheit: `Konversi suhu Reamur ${r} ke fahrenheit adalah ${f}` ,
        KonverterKelvin: `Konversi suhu Reamur ${r} ke kelvin adalah ${k}` 

    })
})

//endpoint 3
app.post("/k", (request, response) => {
    let k = request.body.k
    let c = k - 273.15
    let f = (k - 273.15) * 9 /5 + 32
    let r = (k - 273.15) * 0.8

    
    return response.json({
        KonverterReamur: `Konversi suhu Kelvin ${k} ke Celcius adalah ${c}` ,
        KonverterFahrenheit: `Konversi suhu Kelvin ${k} ke fahrenheit adalah ${f}` ,
        KonverterKelvin: `Konversi suhu Kelvin ${k} ke Reamur adalah ${r}` 

    })
})

//endpoint 4
app.post("/f", (request, response) => {
    let f = request.body.f
    let c = (f - 32) * 5 / 9
    let k = (f - 32) * 5 / 9 + 273.15
    let r = (f - 32) / 2.25

    
    return response.json({
        KonverterReamur: `Konversi suhu Fahrenheit ${f} ke Reamur adalah ${r}` ,
        KonverterFahrenheit: `Konversi suhu Fahrenheit ${f} ke Celcius adalah ${f}` ,
        KonverterKelvin: `Konversi suhu Fahrenheit ${f} ke Kelvin adalah ${k}` 

    })
})










app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})