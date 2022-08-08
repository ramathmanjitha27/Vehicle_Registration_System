const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const {connection} = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT ||8000
app.use(cors())
app.use(express.json())

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Mongodb Connection Success!');
});
//vehicle api path
app.use('/api/vehicle', require('./routes/vehicleRouter'))

app.listen(PORT, ()=>{
    console.log(`Server is running om ${PORT}`)
})