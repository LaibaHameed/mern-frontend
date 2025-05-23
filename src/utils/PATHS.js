import {FiPackage} from 'react-icons/fi';
import {LuLayoutDashboard} from 'react-icons/lu';
import {TfiLayoutSliderAlt} from 'react-icons/tfi';
import {VscFeedback} from 'react-icons/vsc';
import { HiOutlineDocumentText } from 'react-icons/hi';

export const ROOT_ROUTE = '/';
export const DASHBOARD_ROOT = '/dashboard';
export const AUTH_ROOT = '/auth';

export const PUBLIC_ROUTES = {
  home: ROOT_ROUTE,
  store: '/products',
  about: '/about',
  contact: '/contact',
  cart: '/cart',
  paymentSuccessful: '/payment-successful',
  paymentFailed: '/payment-failed',
  products: {
    single: ({productId}) => `${PUBLIC_ROUTES.store}/${productId}`,
  },
};

export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
  },
  product: {
    addProduct: '/products/add-product',
    getProducts: '/products',
    single: ({productId}) => `/products/${productId}`,
    ratings: {
      addRating: '/products/ratings/add-rating',
    },
  },
  order: {
    getAllOrders: '/orders',
    createOrder: '/orders/create-order',
    updateOrderStatus : ({orderId}) => `/orders/${orderId}`,
    createPaymentCheckout: '/orders/create-payment-checkout',
  },
  contact: '/contact',
  feedback: {
    all: '/feedback',
    createFeedback: '/feedback/create-feedback',
    single: ({feedbackId}) => `/feedback/${feedbackId}/`,
  },
  banners: {
    all: '/banners',
    addBanner: '/banners/add-banner',
    single: ({bannerId}) => `/banners/${bannerId}`,
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
    editProduct: ({productId}) =>
      `${DASHBOARD_ROOT}/products/update-product/${productId}`,
  },
  banners: {
    all: `${DASHBOARD_ROOT}/banners`,
    addBanner: `${DASHBOARD_ROOT}/banners/add-banner`,
  },
  feedbacks: {
    all: `${DASHBOARD_ROOT}/feedbacks`,
  },
  orders: {
    all: `${DASHBOARD_ROOT}/orders`,
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
  banners: {
    value: 'banners',
    label: 'Banners',
    path: DASHBOARD_ROUTES.banners.all,
    icon: <TfiLayoutSliderAlt size={20} />,
  },
  feedbacks: {
    value: 'feedbacks',
    label: 'Feedbacks',
    path: DASHBOARD_ROUTES.feedbacks.all,
    icon: <VscFeedback size={20} />,
  },
  orders: {
    value: 'orders',
    label: 'Orders',
    path: DASHBOARD_ROUTES.orders.all,
    icon: <HiOutlineDocumentText size={20} />,
  },
};

export const DASHBOARD_TABS = Object.values(DASHBOARD_NAV_LIST);

const NAV_ROUTES = {
  home: {value: 'home', label: 'HOME', path: PUBLIC_ROUTES.home},
  store: {value: 'products', label: 'SHOP', path: PUBLIC_ROUTES.store},
  contact: {value: 'contact', label: 'CONTACT', path: PUBLIC_ROUTES.contact},
};

export const NAV_LIST = Object.values(NAV_ROUTES);
