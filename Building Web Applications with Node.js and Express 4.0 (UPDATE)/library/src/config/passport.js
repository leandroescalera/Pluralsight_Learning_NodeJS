const passport = require('passport');

require("./strategies/local.strategy")();
module.exports = function passportConfig(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    //Stores user in session

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

}