const express = require('express')
const db = require('./configs/database')
const bodyParser = require('body-parser')
const router = require('./routers')
const app = express()
const PORT = 8083

// ----- app set and use ----- //
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/', router)

// ----- server start setup ----- //
app.listen(PORT, (error)=>{

    if(error){
        console.log("Error occurred", error.message)
    }else{
        db
        console.log('server is started');
        console.log('http://localhost:'+ PORT);
    }

})