import Link from 'next/link';
import React from 'react';

const SectionList = ({ title, items }) => {
    return (
        <div className="space-y-3">
            <h1 className="font-bold uppercase">{title}</h1>
            {Object.values(items).map((item) => (
                <Link 
                    href={item.link} 
                    key={item.id}
                    className="capitalize hover:text-green-600 cursor-pointer block"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default SectionList;
