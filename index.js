const express = require('express');
const https = require('https');
const http = require('http');
const  port = 3000;
const app = express();

const common = require('./Routes/common');


// CORS Request
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
}
app.use(allowCrossDomain);


const server = http.createServer(app);

// routes
app.use('/data', common);

server.listen(port, () => {
    console.log('server is running as Development on port:' + port);
});