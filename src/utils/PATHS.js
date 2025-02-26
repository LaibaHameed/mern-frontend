export const ROOT_ROUTE = '/';
export const DASHBOARD_ROOT = '/dashboard';
export const AUTH_ROOT = '/auth';

export const PUBLIC_ROUTES = {
  home: ROOT_ROUTE,
  store: '/shop',
  about: '/about',
  contact: '/contact',
  cart: '/cart',
};

export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
  },
};

export const AUTH_ROUTES = {
  login: '/auth/login',
  forgotPassword: '/auth/forgot-password',
};

export const DASHBOARD_ROUTES = {
  home: DASHBOARD_ROOT,
};

const NAV_ROUTES = {
  home: {value: 'home', label: 'HOME', path: PUBLIC_ROUTES.home},
  store: {value: 'shop', label: 'SHOP', path: PUBLIC_ROUTES.store},
  about: {value: 'about', label: 'ABOUT', path: PUBLIC_ROUTES.about},
  contact: {value: 'contact', label: 'CONTACT', path: PUBLIC_ROUTES.contact},
};

export const NAV_LIST = Object.values(NAV_ROUTES);
