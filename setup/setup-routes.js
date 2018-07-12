import express from 'express';
import {Routes} from '../constants';
import {getAnalyticsRouter} from '../routes/analytics-routes';
import {getAuthRouter} from '../routes/auth-routes';
import {getPositionRouter} from '../routes/position-routes';
import {getOrderRouter} from '../routes/order-routes';
import {getCategoryRouter} from '../routes/category-routes';

export function setupRoutes(app) {
  app.use(Routes.ANALYTICS, getAnalyticsRouter(express));
  app.use(Routes.AUTH, getAuthRouter(express));
  app.use(Routes.CATEGORY, getCategoryRouter(express));
  app.use(Routes.ORDER, getOrderRouter(express));
  app.use(Routes.POSITION, getPositionRouter(express));
}