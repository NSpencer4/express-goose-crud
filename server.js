const express = require('express');
const port = 3000;
const app = express();

// call the database connectivity function
app.listen(port, (req, res) => {
    console.log('New Request: ');
    console.dir(req);
    console.log('New Response: ');
    console.dir(res);
    console.log(`Server is running on ${port} port.`);
});
