var dice = require("./dice.js")
var die = dice.die;

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total Rolls " + die.totalRoll);

console.log(die);