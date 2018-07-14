const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Collections} = require('../../constants');
const User = mongoose.model(Collections.USERS);

module.exports.postRegister = async function (req, res) {

  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    res.status(409).json({error: 'Пользователь с таким email уже зарегистрирован'});
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      email: req.body.email,
      password: password
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      // TODO
    }
  }

};