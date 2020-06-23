var express = require("express");
let chalk = require("chalk");
let debug = require("debug")("app");
let morgan = require("morgan");
let configGeneral = require('./configGeneral');


var app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to course API!");
});

app.listen(configGeneral.port, () => {
    debug(
        chalk.blue("Listenning on PORT") +
        "  >>>>  " +
        chalk.green(`http://localhost:${configGeneral.port}`)
    );


});