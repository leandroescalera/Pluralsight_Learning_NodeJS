var book = require("../lib/grades").book;

exports["setUp"] = function(callBack) {
    book.reset();
    callBack();
}

exports["Can add new grade"] = function(test) {
    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count, 1);
    test.done();
};

exports["Can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);

    var avarage = book.getAverage();
    test.equal(avarage, 75);
    test.done();

}