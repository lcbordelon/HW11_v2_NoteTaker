const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
