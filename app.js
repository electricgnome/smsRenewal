require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const Promise = require("bluebird");
const mongoose = require("mongoose");
const session = require("express-session");
const serveStatic = require("serve-static");

const api = require("./routes/customers");

const path = require("path");
const app = express();
const http = require("http").Server(app);

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection succesful"))
  .catch(err => console.error(err));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

app.use("/", serveStatic(path.join(__dirname, '/dist'))) //static for VUE


app.use("/api", api);

const PORT = process.env.PORT || 8801;
http.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
