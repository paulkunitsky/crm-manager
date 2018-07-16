const mongoose = require('mongoose');
const {Collections} = require('../../constants');
const Order = mongoose.model(Collections.ORDERS);
const {handleError} = require('../../utils');

module.exports.getOrder = async function (req, res) {
  try {
    const lastOrder = await Order.findOne({user: req.user.id}).sort({date: -1});
    const order = new Order({
      list: req.body.list,
      userId: req.user.id,
      orderNumber: lastOrder ? lastOrder.orderNumber + 1 : 1
    });
    res.status(201).json(await order.save());
  } catch (error) {
    handleError(res, error);
  }
};