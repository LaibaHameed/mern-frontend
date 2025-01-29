import { BsGift, BsTruck } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { BsCart3, BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { TbSwitchHorizontal } from "react-icons/tb";

// Carousel slides
const SLIDES = [
    {
        title: "Decorate Naturally,",
        title2: " Live Beautifully.",
        description: "Explore a range of premium properties tailored to your needs.",
        image:
            "/assets/carousel2.jpg",
        buttonText1: "shop now",
    },
    {
        title: "Plants:",
        title2: " Your Daily Dose of Calm.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit!",
        image:
            "/assets/carousel1.jpg",
        buttonText1: "shop now",
    },

];

export default SLIDES;

// About section cards 
const INFO_LIST = {
    shipping: {
        value: "shipping",
        logo: <BsTruck />,
        title: "Free shipping order",
        discreption: "On orders over $100"
    },
    gift: {
        value: "gift",
        logo: <BsGift />,
        title: "Special gift card",
        discreption: "The perfect gift idea"
    },
    exchange: {
        value: "exchange",
        logo: <GrPowerCycle />,
        title: "Return & exchange",
        discreption: "Free return within 3 days"
    },
    support: {
        value: "support",
        logo: <FiPhone />,
        title: "Support 24 / 7",
        discreption: "Customer support"
    },
}

export const INFO = Object.values(INFO_LIST)

// New Arrival Products List
export const NEW_ARRIVAL = [
    {
        id: 1,
        title: "Sit voluptatem",
        price: 68.0,
        image: "/assets/img1.jpg",
        badge: null,
    },
    {
        id: 2,
        title: "Pellentesque aliquet",
        price: 58.0,
        image: "/assets/img2.jpg",
        badge: null,
    },
    {
        id: 3,
        title: "Pellentesque aliquet",
        price: 60.0,
        image: "/assets/img3.jpg",
        badge: "hot",
    },
    {
        id: 4,
        title: "Pellentesque aliquet",
        price: 65.0,
        image: "/assets/img4.jpg",
        badge: "sale",
    },
];

// badge types
export const TYPES = {
    sale: {
        bgColor: 'bg-green-600'
    },
    hot: {
        bgColor: 'bg-orange-500'
    },
} 

// Product card Icons
const PRODUCT_ICONS = {
    heart: { icon: <FiHeart size={20} />, name: "heart" },
    cart: { icon: <BsCart3 size={20} />, name: "cart" },
    eye: { icon: <BsEye size={20} />, name: "eye" },
    switch: { icon: <TbSwitchHorizontal size={20} />, name: "switch" },
};

export const ICONS = Object.values(PRODUCT_ICONS)

// gallery items 
export const GALLERY_ITEMS = [
    {
        id: 1,
        title: "cactus plant",
        items: 56,
        image: "/assets/galleryimg1.jpg",
        class: "img-1"
    },
    {
        id: 2,
        title: "indoor plant",
        items: 36,
        image: "/assets/galleryimg2.jpg",
        class: "img-2"
    },
    {
        id: 3,
        title: "tropical plant",
        items: 21,
        image: "/assets/galleryimg3.jpg",
        class: "img-3"
    },
    {
        id: 4,
        title: "floor plant",
        items: 18,
        image: "/assets/galleryimg4.jpg",
        class: "img-4"
    },
    {
        id: 5,
        title: "table plant",
        items: 36,
        image: "/assets/galleryimg5.jpg",
        class: "img-5"
    },
]


// New Arrival Products List
export const BEST_SELLER = [
    {
        id: 1,
        title: "Pellentesque aliquet",
        price: 68.0,
        image: "/assets/bestSeller1.jpg",
        badge: "sale",
    },
    {
        id: 2,
        title: "Pellentesque aliquet",
        price: 58.0,
        image: "/assets/bestSeller2.jpg",
        badge: null,
    },
    {
        id: 3,
        title: "Pellentesque aliquet",
        price: 60.0,
        image: "/assets/bestSeller3.jpg",
        badge: "hot",
    },
    {
        id: 4,
        title: "Pellentesque aliquet",
        price: 65.0,
        image: "/assets/bestSeller4.jpg",
        badge: "sale",
    },
];