// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express

let app = express()

app.use(express.json())

//endpoint 1
app.post("/decimal", (request, response) => {
    var n = request.body.n

    
    return response.json({
        BinerNumber: n.toString(2) ,
        OctalNumber: n.toString(8) ,
        HexadecimalNumber: n.toString(16)



    })
})

//endpoint 2
app.post("/biner", (request, response) => {
    var bin = request.body.bin


    
    return response.json({
        DecimalNumber: parseInt(bin, 2) ,
        OctalNumber:  parseInt(bin, 2).toString(8) ,
        HexadecimalNumber: parseInt(bin, 2).toString(16)


    })
})
//endpoint 3
app.post("/octal", (request, response) => {
    var oc = request.body.oc

    
    return response.json({
        DecimalNumber: parseInt(oc, 8) ,
        BinerNumber: parseInt(oc, 8).toString(2) ,
        HexadecimalNumber: parseInt(oc, 8).toString(16)
    })
})

//endpoint 4
app.post("/hexadecimal", (request, response) => {
    var hex = request.body.hex

    
    return response.json({
        DecimalNumber: parseInt(hex, 16) ,
        BinerNumber: parseInt(hex, 16).toString(2) ,
        OctalNumber: parseInt(hex, 16).toString(8)
    })
})













app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})