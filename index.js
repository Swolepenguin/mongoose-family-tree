const express = require ('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/familyTree')

const db = mongoose.connection
db.once('open',() =>{
    console.log(`connected to mongoBD on ${db.host}:${db.port}`)
})

db.on('error', (err)=>{
    console.error(`database error:${err}`)
})

app.get('/',(req,res) =>{
    res.send('Mongoose')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log ('sever is up')
})