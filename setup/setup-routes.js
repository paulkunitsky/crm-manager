module.exports.setupRoutes = function (app) {
  const express = require('express');
  const {Routes} = require('../constants');
  const {getPositionRouter} = require('../routers/position-router');
  const {getOrderRouter} = require('../routers/order-router');
  const {getCategoryRouter} = require('../routers/category-router');
  const {getAuthRouter} = require('../routers/auth-router');
  const {getAnalyticsRouter} = require('../routers/analytics-router');
  app.use(Routes.ANALYTICS, getAnalyticsRouter(express));
  app.use(Routes.AUTH, getAuthRouter(express));
  app.use(Routes.CATEGORY, getCategoryRouter(express));
  app.use(Routes.ORDER, getOrderRouter(express));
  app.use(Routes.POSITION, getPositionRouter(express));
}