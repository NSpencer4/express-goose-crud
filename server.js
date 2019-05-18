const express = require('express');
const properties = require('./config/properties');
const db = require('./config/database');
const app = express();

// call the database connectivity function
db();

app.listen(properties.PORT, (req, res) => {
    console.log('New Request: ');
    console.dir(req);
    console.log('New Response: ');
    console.dir(res);
    console.log(`Server is running on ${properties.PORT} port.`);
});