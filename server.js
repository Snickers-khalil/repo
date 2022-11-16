const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 4000 
const connectDB = require('./config/db');


connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/students',require('./routes/studentRoutes'))
app.listen(port,() => console.log(`server started on port ${port}`))