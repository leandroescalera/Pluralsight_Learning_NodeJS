let express = require("express");
let chalk = require("chalk");
let debug = require("debug")("app");
let morgan = require("morgan");
let configGeneral = require("./configGeneral");
let mongoose = require("mongoose");
let db = mongoose.connect("mongodb://localhost/bookAPI");
let bookRouter = express.Router();
let Book = require("./models/bookModel");

var app = express();

app.use(morgan("dev"));

bookRouter.route("/books").get((req, res) => {
    const query = {};
    if (req.query.genre) {
        query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
        if (err) {
            return res.send(err);
        }
        return res.json(books);

    });
});

bookRouter.route("/books/:bookId").get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            return res.send(err);
        }
        return res.json(book);

    });
});

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