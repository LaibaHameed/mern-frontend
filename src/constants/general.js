import { BsGift, BsTruck } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi';
import { BsCart3, BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { TbSwitchHorizontal } from 'react-icons/tb';

// Carousel slides
const SLIDES = [
  {
    id: 1,
    title: 'Decorate Naturally,',
    title2: ' Live Beautifully.',
    description:
      'Explore a range of premium properties tailored to your needs.',
    image: '/assets/carousel2.jpg',
    buttonText1: 'shop now',
  },
  {
    id: 2,
    title: 'Plants:',
    title2: ' Your Daily Dose of Calm.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit!',
    image: '/assets/carousel1.jpg',
    buttonText1: 'shop now',
  },
];

export default SLIDES;

// About section cards
const INFO_LIST = {
  shipping: {
    value: 'shipping',
    logo: <BsTruck />,
    title: 'Free shipping order',
    discreption: 'On orders over $100',
  },
  gift: {
    value: 'gift',
    logo: <BsGift />,
    title: 'Special gift card',
    discreption: 'The perfect gift idea',
  },
  exchange: {
    value: 'exchange',
    logo: <GrPowerCycle />,
    title: 'Return & exchange',
    discreption: 'Free return within 3 days',
  },
  support: {
    value: 'support',
    logo: <FiPhone />,
    title: 'Support 24 / 7',
    discreption: 'Customer support',
  },
};

export const INFO = Object.values(INFO_LIST);

// badge types
export const BADGE_TYPES = {
  sale: {
    value: 'sale',
    bgColor: 'bg-green-600',
    label: 'Sale',
  },
  hot: {
    value: 'hot',
    bgColor: 'bg-orange-500',
    label: 'Hot',
  },
};

// New Arrival Products List
export const NEW_ARRIVAL = [
  {
    id: 1,
    name: 'Sit voluptatem',
    price: 68.0,
    image: '/assets/img1.jpg',
    badge: null,
  },
  {
    id: 2,
    name: 'Pellentesque aliquet',
    price: 58.0,
    image: '/assets/img2.jpg',
    badge: null,
  },
  {
    id: 3,
    name: 'Pellentesque aliquet',
    price: 60.0,
    image: '/assets/img3.jpg',
    badge: BADGE_TYPES.hot.value,
  },
  {
    id: 4,
    name: 'Pellentesque aliquet',
    price: 65.0,
    image: '/assets/img4.jpg',
    badge: BADGE_TYPES.sale.value,
  },
];

// Product card Icons
const PRODUCT_ICONS = {
  heart: { icon: <FiHeart size={20} />, name: 'heart' },
  cart: { icon: <BsCart3 size={20} />, name: 'cart' },
  eye: { icon: <BsEye size={20} />, name: 'eye' },
  switch: { icon: <TbSwitchHorizontal size={20} />, name: 'switch' },
};

export const ICONS = Object.values(PRODUCT_ICONS);

// New Arrival Products List
export const BEST_SELLER = [
  {
    id: 1,
    name: 'Pellentesque aliquet',
    price: 68.0,
    image: '/assets/bestSeller1.jpg',
    badge: 'sale',
  },
  {
    id: 2,
    name: 'Pellentesque aliquet',
    price: 58.0,
    image: '/assets/bestSeller2.jpg',
    badge: null,
  },
  {
    id: 3,
    name: 'Pellentesque aliquet',
    price: 60.0,
    image: '/assets/bestSeller3.jpg',
    badge: 'hot',
  },
  {
    id: 4,
    name: 'Pellentesque aliquet',
    price: 65.0,
    image: '/assets/bestSeller4.jpg',
    badge: 'sale',
  },
];

// customer reviews
export const CUSTOMER_REVIEWS = [
  {
    id: 0,
    name: 'Emily Johnson',
    review:
      'I absolutely love the quality of the products! The materials feel premium, and the attention to detail is outstanding. Customer support was also very responsive and helpful. I will definitely be coming back for more purchases in the future!',
    title: 'BTV-Designer',
  },
  {
    id: 1,
    name: 'David Williams',
    review:
      'This was my first time ordering, and I was impressed. The website was easy to navigate, the checkout process was seamless, and the delivery was on time. The product exceeded my expectations, and I appreciate the effort put into packaging as well.',
    title: 'Marketing Specialist',
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    review:
      "I've been using these products for a while now, and I can confidently say they are worth every penny. The durability, functionality, and sleek design make them stand out from other brands. I highly recommend this to anyone looking for high-quality items!",
    title: 'Tech Enthusiast',
  },
];

// footer sections
export const INFORMATION_ITEMS = {
  newProducts: {
    label: 'New Products',
    link: '#new-products',
    id: 'new-products',
  },
  topSeller: { label: 'Top Seller', link: '#top-seller', id: 'top-seller' },
  aboutUs: { label: 'About our shop', link: '#about-us', id: 'about-us' },
  privacyPolicy: {
    label: 'Privacy policy',
    link: '#privacy-policy',
    id: 'privacy-policy',
  },
};

export const ACCOUNT_ITEMS = {
  myAccount: { label: 'My account', link: '#my-account', id: 'my-account' },
  discount: { label: 'Discount', link: '#discount', id: 'discount' },
  ordersHistory: {
    label: 'Orders History',
    link: '#orders-history',
    id: 'orders-history',
  },
  personalInfo: {
    label: 'Personal Information',
    link: '#personal-info',
    id: 'personal-info',
  },
};

export const PRODUCT_ITEMS = {
  delivery: { label: 'Delivery', link: '#delivery', id: 'delivery' },
  legalNotice: {
    label: 'Legal Notice',
    link: '#legal-notice',
    id: 'legal-notice',
  },
  pricesDrop: { label: 'Prices Drop', link: '#prices-drop', id: 'prices-drop' },
  newProducts: {
    label: 'New Products',
    link: '#new-products',
    id: 'new-products',
  },
  bestSales: { label: 'Best Sales', link: '#best-sales', id: 'best-sales' },
};


// product Sorting options
export const SORTING_OPRIONS = [
  { value: 'default', label: 'Default Sorting' },
  { value: 'low-price', label: 'Sort by Low Price' },
  { value: 'high-price', label: 'Sort by High Price' },
  { value: 'new', label: 'Sort by New Products' },
  { value: 'old', label: 'Sort by Old Products' },
]

// product Categories
export const PRODUCT_CATEGORIES = [
  { name: 'Dried', count: 6 },
  { name: 'Vegetables', count: 8 },
  { name: 'Fruits', count: 9 },
  { name: 'Juice', count: 6 },
  { name: 'Uncategorized', count: 2 },
];

// product tags
export const PRODUCT_TAGS = [
  { id: 1, name: "Plant" },
  { id: 2, name: "Floor" },
  { id: 3, name: "Indoor" },
  { id: 4, name: "Green" },
  { id: 5, name: "Healthy" },
  { id: 6, name: "Cactus" },
  { id: 7, name: "House plant" },
  { id: 8, name: "Office tree" },
];

export const CART_ITEMS = [
  { id: 1, name: 'Pellentesque aliquet', image: "/assets/bestSeller1.jpg", price: 20, quantity: 2 },
  { id: 2, name: 'Neque Porro Quisquam', image: "/assets/bestSeller2.jpg", price: 15, quantity: 1 },
  { id: 3, name: 'Aliquam Quaerat Voluptem', image: "/assets/bestSeller3.jpg", price: 30, quantity: 3 },
]

// dashboar Product headers
export const PRODUCT_HEADER = [
  {
    key: "product",
    name: "Product",
  },
  {
    key: "productCode",
    name: "Product Code",
  },
  {
    key: "stock",
    name: "Stock",
  },
  {
    key: "actions",
    name: "Actions",
  },
  {
    key: "empty",
    name: " ",
  },
];