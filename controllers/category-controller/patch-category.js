const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Category = require('mongoose').model(Collections.CATEGORIES);

module.exports.patchCategory = async function (req, res) {
  try {

  } catch (error) {
    handleError(res, error);
  }
};