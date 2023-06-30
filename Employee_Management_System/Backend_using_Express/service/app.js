const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./router/routers");

//add middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
  resp.setHeader("Access-Control-Allow-credentials", true);
  next();
});

//add url handler
app.use("/", router);

//start server
app.listen(3002, function () {
  console.log("server started on port 3002");
});

module.exports = app;
