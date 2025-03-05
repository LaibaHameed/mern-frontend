import {FiPackage} from 'react-icons/fi';
import {LuLayoutDashboard} from 'react-icons/lu';

export const ROOT_ROUTE = '/';
export const DASHBOARD_ROOT = '/dashboard';
export const AUTH_ROOT = '/auth';

export const PUBLIC_ROUTES = {
  home: ROOT_ROUTE,
  store: '/products',
  about: '/about',
  contact: '/contact',
  cart: '/cart',
};

export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
  },
  product: {
    addProduct: '/products/add-product',
  },
};

export const AUTH_ROUTES = {
  login: '/auth/login',
  forgotPassword: '/auth/forgot-password',
};

export const DASHBOARD_ROUTES = {
  home: DASHBOARD_ROOT,
  products: {
    all: `${DASHBOARD_ROOT}/products`,
    addProduct: `${DASHBOARD_ROOT}/products/add-product`,
  },
};

const DASHBOARD_NAV_LIST = {
  home: {
    value: 'dashboard',
    label: 'Dashboard',
    path: DASHBOARD_ROUTES.home,
    icon: <LuLayoutDashboard size={20} />,
  },
  products: {
    value: 'products',
    label: 'Products',
    path: DASHBOARD_ROUTES.products.all,
    icon: <FiPackage size={20} />,
  },
};

export const DASHBOARD_TABS = Object.values(DASHBOARD_NAV_LIST);

const NAV_ROUTES = {
  home: {value: 'home', label: 'HOME', path: PUBLIC_ROUTES.home},
  store: {value: 'products', label: 'SHOP', path: PUBLIC_ROUTES.store},
  about: {value: 'about', label: 'ABOUT', path: PUBLIC_ROUTES.about},
  contact: {value: 'contact', label: 'CONTACT', path: PUBLIC_ROUTES.contact},
};

export const NAV_LIST = Object.values(NAV_ROUTES);
