module.exports.handleError = function (res, error) {
  res.status(500).json({message: error.message || error});
};