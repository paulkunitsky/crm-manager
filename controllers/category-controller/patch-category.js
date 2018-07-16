const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.patchCategory = async function (req, res) {
  try {
    const updated = {name: req.body.name, imageSrc: req.file ? req.file.path : ''};
    const category = await Category.findOneAndUpdate({_id: req.body.id}, {$set: updatedCategory}, {new: true});
    res.status(200).json(category);
  } catch (error) {
    handleError(res, error);
  }
};