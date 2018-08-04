//Install express server
const express = require("express");

const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/franklin-decides"));

app.use(function(req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect("https://" + req.headers.host + req.url);
  }
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/franklin-decides/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
