export const ROOT_ROUTE = "/";

export const PUBLIC_ROUTES = {
    home: ROOT_ROUTE,
    store: "/shop",
    about: "/about",
    contact: "/contact",
};

const NAV_ROUTES = {
    home: { value: "home", label: "HOME", path: PUBLIC_ROUTES.home },
    store: { value: "shop", label: "SHOP", path: PUBLIC_ROUTES.store },
    about: { value: "about", label: "ABOUT", path: PUBLIC_ROUTES.about },
    contact: { value: "contact", label: "CONTACT", path: PUBLIC_ROUTES.contact },
};

export const NAV_LIST = Object.values(NAV_ROUTES);
