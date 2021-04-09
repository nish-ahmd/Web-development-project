const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')

const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.dataBase_access,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, 
    ()=>console.log("Database Connected"))


app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
app.use('/app', routesUrls)

app.listen(4010, async function () { console.log('Serever is up'); });
