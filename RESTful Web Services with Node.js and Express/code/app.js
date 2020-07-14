let express = require("express");
let chalk = require("chalk");
let debug = require("debug")("app");
let morgan = require("morgan");
let configGeneral = require("./configGeneral");
let mongoose = require("mongoose");

if (process.env.ENV === 'Test') {
    debug('This is a test');
    let db = mongoose.connect("mongodb://localhost/bookAPI_Test");
} else {
    debug('This is for real');
    let db = mongoose.connect("mongodb://localhost/bookAPI");
}



let Book = require("./models/bookModel");
let bodyParser = require('body-parser');
let bookRouter = require('./routes/bookRouter')(Book);

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(morgan("dev"));


app.use("/api", bookRouter);

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

module.exports = app;