const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.getCategory = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    handleError(res, error);
  }
};