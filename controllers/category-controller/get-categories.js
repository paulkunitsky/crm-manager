const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.getCategories = async function (req, res) {
  try {
    const categories = await Category.find({userId: req.user.id});
    res.status(200).json(categories);
  } catch (error) {
    handleError(res, error);
  }
};