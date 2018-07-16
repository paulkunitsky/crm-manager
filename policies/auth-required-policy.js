const passport = require('passport');
module.exports.authRequiredPolicy = passport.authenticate('jwt', {session: false});