const {
    map
} = require("../app");

let debug = require("debug")("app:bookController.js");

function booksController(Book) {
    function post(req, res) {
        const book = new Book(req.body);
        // debug('Save succesfull the Book');
        // debug(book);
        if (!req.body.title) {
            res.status(400);
            return res.send("Title is required");
        }
        //console.log(book);
        book.save();
        res.status(201);
        return res.json(book);
    }

    function get(req, res) {
        const query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        Book.find(query, (err, books) => {
            if (err) {
                return res.send(err);
            }
            const returnBooks = books.map((book) => {
                let newBook = book.toJSON();
                newBook.links = {};
                newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
                return newBook;
            });
            return res.json(returnBooks);
        });
    }

    return {
        post,
        get,
    };
}

module.exports = booksController;