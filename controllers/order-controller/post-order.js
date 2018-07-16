const mongoose = require('mongoose');
const {Collections} = require('../../constants');
const Order = mongoose.model(Collections.ORDERS);
const {handleError} = require('../../utils');

module.exports.postOrder = async function (req, res) {
  const query = {};
  req.query.start ? query.date = {$gte: req.query.start} : null;

  if (req.query.end) {
    !query.date ? query.date = {} : null;
    query.date.$lte = req.query.end;
  }

  req.query.orderNumber ? query.orderNumber = +req.query.orderNumber : null;

  try {
    const orders = await Order.find(query).sort({date: -1}).skip(+req.query.offset).limit(+req.query.limit);
  } catch (error) {
    handleError(res, error);
  }
};