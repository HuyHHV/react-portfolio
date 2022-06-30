const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const cors = require('cors')


app.use(cors())
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));   
}

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running!");
});