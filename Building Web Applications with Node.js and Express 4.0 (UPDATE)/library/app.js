let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
let path = require('path');


let app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', function(req, res) {
    //res.send('Hello from my library app');
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
    debug(chalk.blue("Listenning on PORT 3000") + "  >>>>  " + chalk.green(`http://localhost:${3000}`));
    //console.log(chalk.blue("Listenning on PORT 3000") + "  >>>>  " + chalk.green(`http://localhost:${3000}`));

})