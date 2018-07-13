export const Config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: 'mongodb://admin:admin123@ds235711.mlab.com:35711/mean-crm'
};

export const Routes = {
  AUTH: '/api/auth',
  ORDER: '/api/order',
  CATEGORY: '/api/category',
  POSITION: '/api/position',
  ANALYTICS: '/api/analytics'
};

export const Collections = {
  CATEGORIES: 'categories',
  POSITIONS: 'positions',
  USERS: 'users',
  ORDERS: 'orders'
};