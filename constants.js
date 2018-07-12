export const Config = {
  PORT: process.env.PORT || 3000,
};

export const Routes = {
  Auth: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register'
  },
  Order: {
    _: '/api/order'
  },
  Category: {
    _: '/api/category',
    _ID: '/api/category/:id',
  },
  Position: {
    _: '/api/position',
    _CATEGORY: '/api/position/:category',
    _ID: '/api/position/:id'
  },
  Analytics: {
    OVERVIEW: '/api/analytics/overview',
    ANALYTICS: '/api/analytics/analytics'
  }
};