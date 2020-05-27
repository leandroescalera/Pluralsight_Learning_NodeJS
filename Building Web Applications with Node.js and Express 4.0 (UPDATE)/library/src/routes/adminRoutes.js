const express = require("express");
const {
    MongoClient
} = require('mongodb');
const adminRouter = express.Router();
const debug = require('debug')('app:adminRoutes');

const books = [{
        title: 'Title 1',
        genre: 'Historical Fiction',
        author: 'Lev Nikolavevich Tolstory',
        bookId: 656,
        read: false
    },
    {
        title: 'Los Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        bookId: 24280,
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

function router(nav) {
    adminRouter.route("/").get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connect correctly to server...');
                const db = client.db(dbName);
                const response = await db.collection('books').insertMany(books);
                res.json(response);
            } catch (error) {
                debug(error.stack);
            }
            client.close();

        }())

    });

    return adminRouter;
}

module.exports = router;