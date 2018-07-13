export const Config = {
  PORT: process.env.PORT || 3000,
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