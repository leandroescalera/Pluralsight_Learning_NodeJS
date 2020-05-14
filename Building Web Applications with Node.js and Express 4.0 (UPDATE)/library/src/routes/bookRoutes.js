let express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');


function router(nav) {
    const books = [{
            title: 'Title 1',
            genre: 'Historical Fiction',
            author: 'Lev Nikolavevich Tolstory',
            read: false
        },
        {
            title: 'Los Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false

        },
        {
            title: 'The Time machine',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'A Jurney into the center of the Earth',
            genre: 'Historical Fiction',
            author: 'Juleo Verne',
            read: false
        },
        {
            title: 'The Dark World',
            genre: 'Fantasy',
            author: 'Henry Kutner',
            read: false
        },
        {
            title: 'The wind in the willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        }
    ];

    bookRouter.route('/')
        .get((req, res) => {
            (async function query() {
                const request = new sql.Request();
                const { recordset } = await request.query('select * from books');
                res.render('bookListView', {
                    nav,
                    title: 'Library',
                    books: recordset
                });

            }());

        });

    bookRouter.route('/:id')
        .all((req, res, next) => {
            (async function query() {
                const { id } = req.params;
                const request = new sql.Request();
                const { recordset } = await request.input('id', sql.Int, id)
                    .query('select * from books where id = @id');
                [req.book] = recordset;
                next();
            }())
        }).get((req, res) => {
            res.render('bookView', {
                nav,
                title: 'Library',
                book: req.book
            });
        })
    return bookRouter;
}

module.exports = router;