const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {Collections, Config} = require('../../constants');
const User = mongoose.model(Collections.USERS);

module.exports.postLogin = async function (req, res) {

  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    const passwordsMatch = bcrypt.compareSync(req.body.password, candidate.password);

    if (passwordsMatch) {
      const token = jwt.sign({userId: candidate._id}, Config.JWT_KEY, {expiresIn: '1 hour'});
      res.status().json({message: 'Успешная авторизация'});
    } else {
      res.status(401).json({error: 'Наверные данные для авторизации'});
    }

  } else {
    res.status(404).json({error: 'Пользователь с таким email не найден'});
  }

};