const passport = require('passport');
const {Config, Collections} = require('../constants');
const mongoose = require('mongoose');
const PassportJwt = require('passport-jwt');
const User = mongoose.model(Collections.USERS);
const JwtStrategy = PassportJwt.Strategy;
const ExtractJwt = PassportJwt.ExtractJwt;
const options = {jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: Config.JWT_KEY};

passport.use(new JwtStrategy(options, async (payload, done) => {

  try {
    const user = await User.findById(payload.userId).select('_id email');

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    console.log(error);
  }

}));

module.exports = passport;