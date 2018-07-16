const passport = require('passport');
module.exports.authRequiredMiddleware = passport.authenticate('jwt', {session: false});