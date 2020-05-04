// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8070;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + "app/css"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.text());
// app.use(express.json( {type: "application/vdn.api+json"}));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});