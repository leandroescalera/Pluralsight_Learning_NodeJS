"use strict";

let express = require("express");
let chalk = require("chalk");
let debug = require("debug")("app");
let morgan = require("morgan");
//let path = require('path');
let path = require("path");
const configGeneral = require("./config");
const sql = require("mssql");

const config = {
  user: "library",
  password: "8353086ASlom",
  server: "pslibrary8353086.database.windows.net", // You can use 'localhost\\instance' to connect to named instance
  database: "PSLibrary",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

let app = express();

sql.connect(config).catch((err) => debug(err));

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug("My Middleware");
  next();
});

app.use(express.static(path.join(__dirname, "/public/")));

app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

const nav = [
  {
    link: "/books",
    title: "Book",
  },
  {
    link: "/authors",
    title: "Author",
  },
];

const bookRouter = require("./src/routes/bookRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use("/books", bookRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  //res.send('Hello from my library app');
  // res.sendFile(path.join(__dirname, '/views/', '/index.html'));
  res.render("index", {
    nav: [
      {
        link: "/books",
        title: "Book",
      },
      {
        link: "/authors",
        title: "Author",
      },
    ],
    title: "Library",
  });
});

app.listen(configGeneral.port, () => {
  debug(
    chalk.blue("Listenning on PORT") +
      "  >>>>  " +
      chalk.green(`http://localhost:${configGeneral.port}`)
  );
  //console.log(chalk.blue("Listenning on PORT 3000") + "  >>>>  " + chalk.green(`http://localhost:${3000}`));
});
