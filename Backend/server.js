const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.dataBase_access, ()=>console.log("Databas Connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(4005, async function () { console.log('Serever is up'); });
