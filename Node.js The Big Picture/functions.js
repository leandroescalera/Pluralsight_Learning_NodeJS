console.log("----Inicio del Programa----");

var getDieRoll = function(dieSize) {
    console.log("Rolling a Die")
    var die = Math.ceil(dieSize * Math.random());
    return die;
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);


console.log("----  Fin del Programa ----")