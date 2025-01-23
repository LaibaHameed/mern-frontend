import { BsGift, BsTruck } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

const NAV_ROUTES = {
    home: { value: 'home', label: 'HOME', path: '/' },
    store: { value: 'store', label: 'STORE', path: '/store' },
    about: { value: 'about', label: 'ABOUT', path: '/about' },
    blog: { value: 'blog', label: 'BLOG', path: '/blog' },
    contact: { value: 'contact', label: 'CONTACT', path: '/contact' },
};

export const NAV_LIST = Object.values(NAV_ROUTES)


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


const INFO_LIST = {
    shipping: {
        logo: <BsTruck />,
        title: "Free shipping order",
        discreption: "On orders over $100"
    },
    gift: {
        logo: <BsGift/>,
        title: "Special gift card",
        discreption: "The perfect gift idea"
    },
    exchange: {
        logo: <GrPowerCycle />,
        title: "Return & exchange",
        discreption: "Free return within 3 days"
    },
    support: {
        logo: <FiPhone />,
        title: "Support 24 / 7",
        discreption: "Customer support"
    },
}

export const INFO = Object.values(INFO_LIST)