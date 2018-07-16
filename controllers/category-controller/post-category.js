const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.postCategory = async function (req, res) {
  try {
    const category = new Category({name: req.body.name, userId: req.user.id, imageSrc: req.file ? req.file.path : null});
    res.status(201).json(await category.save());
  } catch (error) {
    handleError(res, error);
  }
};