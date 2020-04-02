var book = require("./lib/grades").book;
for (var index = 2; index < process.argv.length; index++) {
    book.addGrade(parseInt(process.argv[index]));

}

console.log(this.book.getAverage());