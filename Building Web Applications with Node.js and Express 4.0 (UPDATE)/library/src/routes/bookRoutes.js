let express = require('express');
const bookRouter = express.Router();

function router(nav) {
    const books = [{
            title: 'war on peace',
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
            res.render('bookListView', {
                nav,
                title: 'Library',
                books
            });
        })

    bookRouter.route('/:id')
        .get((req, res) => {

            const id = (req.params.id) - 1;
            res.render('bookView', {
                nav,
                title: 'Library',
                book: books[id]
            });
        })
    return bookRouter;
}



module.exports = router;