//dependencies

var express = require("express");

// express config

// Tells node that we are creating an "express" server
var app = express();

// Sets a port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});