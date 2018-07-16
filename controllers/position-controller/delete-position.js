const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Position = require('mongoose').model(Collections.POSITIONS);

module.exports.deletePosition = async function (req, res) {
  try {
    await Position.remove({_id: req.params.id});
    res.status(200).json({message: 'Позиция удалена'});
  } catch (error) {
    handleError(res, error);
  }
};