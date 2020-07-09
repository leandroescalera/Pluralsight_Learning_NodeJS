require('should');

let debug = require('debug');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');
const {
    after
} = require('mocha');
const Book = mongoose.model('Book');
const agent = request.agent(app);

process.env.ENV = 'Test';

describe('Book Crud Test', () => {
    it('Should allow a book to be posted and return read _it', (done) => {

        const bookPost = {
            title: 'My Book',
            author: 'Jon',
            genre: 'Fiction Leandro'
        };

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                //console.log(results)
                debug(results)
                results.body.read.should.not.equal('false');
                results.body.should.have.property('_id');
                done();
            })
    });

    afterEach((done) => {
        Book.deleteMany({}).exec();
        done();
    });

    // after((done) => {
    //     mongoose.connection.close();
    //     app.server.close(done());
    // })

});