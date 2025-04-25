'use client';

import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import OrdersTable from './OrdersTable'; 
import TopSection from '@/components/shared/TableComponents/TopSection';

const OrdersPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debounced, setDebounced] = useState(true);

    const debouncedSearch = useDebounce({ value: searchQuery });

    const handleSearch = (query, debounce = true) => {
        setSearchQuery(query);
        setDebounced(debounce);
    };

    return (
        <div className="flex-center flex-col text-black gap-6">
            <TopSection title="Orders" setSearchQuery={handleSearch} />
            <OrdersTable searchQuery={debounced ? debouncedSearch : searchQuery} />
        </div>
    );
};

export default OrdersPage;
