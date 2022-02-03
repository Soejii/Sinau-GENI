const {  request , response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/sort" ,(request, response) => {
    let data = request.body.data

    data.sort((a, b) => {
        return a.umur - b.umur;
    })
      
     return response.json({
         data : data
    })
})



app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})