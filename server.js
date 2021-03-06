//Install express server
const express = require("express");

const path = require("path");

const app = express();

app.use(function(req, res, next) {
  if(req.get('X-Forwarded-Proto') === 'http') {
    return res.redirect('https://franklin-decides.herokuapp.com');
  }
  next();
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/franklin-decides"));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/franklin-decides/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
