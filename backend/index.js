require('dotenv').config();
const bodyParser = require("body-parser");
const express = require('express');
const cors = require("cors");

const { connectMongoDB } = require('./connection')

const PORT = process.env.PORT || 8001;

//middleware 
var corsOptions = {
    origin: '*'
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    res.json({ msg: "Hello world" })
})

connectMongoDB(process.env.MONGO_URI)
    .then(console.log("MongoDB Database is connected"))
    .catch((err) => {
        console.log("MongoDB err", err);
    })

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})