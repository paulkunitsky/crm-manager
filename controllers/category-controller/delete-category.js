const mongoose = require('mongoose');
const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = mongoose.model(Collections.CATEGORIES);
const Position = mongoose.model(Collections.POSITIONS);

module.exports.deleteCategory = async function (req, res) {
  try {
    await Category.remove({_id: req.params.id});
    await Position.remove({categoryId: req.params.id});
    res.status(200).json({message: 'Категория удалена'});
  } catch (error) {
    handleError(res, error);
  }
};