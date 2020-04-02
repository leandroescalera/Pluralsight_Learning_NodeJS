var die = {
    size: 6,
    totalRoll: 0,
    roll: function() {
        var result = Math.ceil(this.size * Math.random());
        this.totalRoll += 1;
        return result;
    }
}
exports.die = die;
exports.name = "My dice exports"