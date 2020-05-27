let express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const bookController = require('../controllers/bookController');
const bookService = require('../services/goodreadsService');

function router(nav) {


    // bookRouter.route('/')
    //     .get((req, res) => {
    //         (async function query() {
    //             const request = new sql.Request();
    //             const { recordset } = await request.query('select * from books');
    //             res.render('bookListView', {
    //                 nav,
    //                 title: 'Library',
    //                 books: recordset
    //             });

    //         }());

    //     });
    const {
        getIndex,
        getById,
        middleware
    } = bookController(bookService, nav);

    bookRouter.use(middleware);

    bookRouter.route('/')
        .get(getIndex);

    // bookRouter.route('/:id')
    //     .all((req, res, next) => {
    //         (async function query() {
    //             const {
    //                 id
    //             } = req.params;
    //             const request = new sql.Request();
    //             const {
    //                 recordset
    //             } = await request.input('id', sql.Int, id)
    //                 .query('select * from books where id = @id');
    //             [req.book] = recordset;
    //             next();
    //         }())
    //     }).get((req, res) => {
    //         res.render('bookView', {
    //             nav,
    //             title: 'Library',
    //             book: req.book
    //         });
    //     })

    bookRouter.route('/:id')
        .get(getById);
    return bookRouter;
}

module.exports = router;