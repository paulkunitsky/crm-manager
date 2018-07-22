const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.patchCategory = async function (req, res) {
  try {
    const updated = {name: req.body.name};
    console.log(req.file);
    if (req.file && req.file.path) updated.imageSrc = req.file.path;
    const category = await Category.findOneAndUpdate({_id: req.body.id}, {$set: updated}, {new: true});
    res.status(200).json(category);
  } catch (error) {
    handleError(res, error);
  }
};