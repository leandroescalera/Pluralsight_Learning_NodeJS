var getDieRoll = function(dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);
if (roll >= 3 && roll <= 5) {
    console.log("Great Roll!!!");
} else if (roll == 1) {
    console.log("Terrible Roll")
} else {
    console.log("That was an ok roll");
}

console.log("You rolled a " + roll);