//Install express server
const express = require('express');

const path = require('path');
const forceHTTPS = require("expressjs-force-https").forceHTTPS;
const app = express();

app.use(forceHTTPS);

// Serve only the static files frmm the dist directory
app.use(express.static(__dirname + '/dist/franklin-decides'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/franklin-decides/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
