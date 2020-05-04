let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
//let path = require('path');
let path = require('path');

const config = require('./config');


let app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public/')));


app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('Hello from my library app');
    // res.sendFile(path.join(__dirname, '/views/', '/index.html'));
    res.render('index', { list: ['a', 'b'], title: 'Library' });
});

app.listen(config.port, () => {
    debug(chalk.blue("Listenning on PORT") + "  >>>>  " + chalk.green(`http://localhost:${config.port}`));
    //console.log(chalk.blue("Listenning on PORT 3000") + "  >>>>  " + chalk.green(`http://localhost:${3000}`));

})