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

// New Arrival Products List
export const INFO = Object.values(INFO_LIST)

export const NEW_ARRIVAL = [
    {
        title: "Sit voluptatem",
        price: 68.0,
        image: "/assets/img1.jpg",
        badge: null,
    },
    {
        title: "Pellentesque aliquet",
        price: 58.0,
        image: "/assets/img2.jpg",
        badge: null,
    },
    {
        title: "Pellentesque aliquet",
        price: 60.0,
        image: "/assets/img3.jpg",
        badge: "HOT",
    },
    {
        title: "Pellentesque aliquet",
        price: 65.0,
        image: "/assets/img4.jpg",
        badge: "SALE",
    },
];

// Product card Icons
const PRODUCT_ICONS = {
    heart: { icon: <FiHeart size={20} />, name: "heart" },
    cart: { icon: <BsCart3 size={20} />, name: "cart" },
    eye: { icon: <BsEye size={20} />, name: "eye" },
    switch: { icon: <TbSwitchHorizontal size={20} />, name: "switch" },
};

export const ICONS =  Object.values(PRODUCT_ICONS)