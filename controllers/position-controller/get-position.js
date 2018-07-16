const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Position = require('mongoose').model(Collections.POSITIONS);

module.exports.getPosition = async function (req, res) {
  try {
    console.log(req);
    const positions = await Position.find({categoryId: req.params.categoryId, userId: req.user.id});
    res.status(200).json(positions);
  } catch (error) {
    handleError(res, error);
  }
};