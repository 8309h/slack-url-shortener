const express = require("express");
const cors = require('cors');
const { connection } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());

const Port = process.env.PORT || 8000; 

app.listen(Port, async () => {
    try {
        await connection;
        console.log("Connected to the DB");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
    console.log(`Server running on port ${Port}`);
});
