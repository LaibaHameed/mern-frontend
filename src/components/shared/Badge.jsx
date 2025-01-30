import { TYPES } from "@/constants/general";

const Badge = ({ type }) => {
    if (!type) return null;

    const bgColor = TYPES[type].bgColor || 'bg-green-500';
    const label = TYPES[type].label;

    return (
        <p
            className={`uppercase absolute top-0 left-[-20px] transform -translate-x-1/2 -translate-y-1/2 w-auto text-center py-1 px-3 pl-6 pb-2 rounded-full text-sm font-bold text-white ${bgColor}`}
            style={{ transform: 'rotate(90deg)' }}
        >
            {label}
        </p>
    );
};

export default Badge;
