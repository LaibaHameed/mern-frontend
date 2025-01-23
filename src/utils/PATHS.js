export const ROOT_ROUTE = "/"
const NAV_ROUTES = {
    home: { value: 'home', label: 'HOME', path: '/' },
    store: { value: 'store', label: 'STORE', path: '/store' },
    about: { value: 'about', label: 'ABOUT', path: '/about' },
    blog: { value: 'blog', label: 'BLOG', path: '/blog' },
    contact: { value: 'contact', label: 'CONTACT', path: '/contact' },
};

export const NAV_LIST = Object.values(NAV_ROUTES)