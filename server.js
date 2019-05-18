const express = require('express');
const bodyParser = require('body-parser');
const herosRoutes = require('./api/heros/heros.router');
const db = require('./api/config/database');
const port = 3000;
const app = express();

//configure bodyparser
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
const router = express.Router();

db();
// configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// use express router
app.use('/api',router);
//call heros routing
herosRoutes(router);

// call the database connectivity function
app.listen(port, (req, res) => {
    console.log('New Request: ');
    console.dir(req);
    console.log('New Response: ');
    console.dir(res);
    console.log(`Server is running on ${port} port.`);
});