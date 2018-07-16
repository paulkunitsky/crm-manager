const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Position = require('mongoose').model(Collections.POSITIONS);

module.exports.postPosition = async function (req, res) {
  try {
    const position = new Position({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      userId: user.id
    });
    res.status(201).json(await position.save());
  } catch (error) {
    handleError(res, error);
  }
};