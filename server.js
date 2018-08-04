//Install express server
const express = require("express");

const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/franklin-decides"));

app.use(function(req, res, next) {
	console.log(req.get('X-Forwarded-Proto'))
  if(req.get('X-Forwarded-Proto') === 'http') {
    return res.redirect('https://franklin-decides.herokuapp.com');
  }
  next();
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/franklin-decides/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
