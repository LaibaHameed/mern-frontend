const Badge = ({ text, type }) => {
    if (!text) return null;

    const bgColor =
        type === "SALE" ? "bg-green-600" : type === "HOT" ? "bg-orange-500" : "bg-gray-500";

    return (
        <div
            className={`absolute top-1 left-[-20px] transform -translate-x-1/2 -translate-y-1/2 w-auto text-center py-1 px-3 pl-6 pb-1 rounded-full text-sm font-bold text-white ${bgColor}`}
            style={{ transform: 'rotate(90deg)' }}
        >
            {text}
        </div>

    );
};

export default Badge;
