const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")
dotenv.config();
const app = express();
app.use(cors());

//parse JSON data coming in the request body
app.use(express.json());

//init mongoose
mongoose.connect(process.env.MONGO_URI);

const con = mongoose.connection;
con.on('open', error => {
    if(!error){
        console.log('DB connection successful');
    }
})

//gain access to my routes
app.use(require('./routes/auth'));

//SETTING THE PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));