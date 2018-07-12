import express from 'express';
import {Routes} from '../constants';
import {getPositionRouter} from '../routers/position-router';
import {getOrderRouter} from '../routers/order-router';
import {getCategoryRouter} from '../routers/category-router';
import {getAuthRouter} from '../routers/auth-router';
import {getAnalyticsRouter} from '../routers/analytics-router';

export function setupRoutes(app) {
  app.use(Routes.ANALYTICS, getAnalyticsRouter(express));
  app.use(Routes.AUTH, getAuthRouter(express));
  app.use(Routes.CATEGORY, getCategoryRouter(express));
  app.use(Routes.ORDER, getOrderRouter(express));
  app.use(Routes.POSITION, getPositionRouter(express));
}