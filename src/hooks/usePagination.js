import { useState } from 'react';

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const currentItems = items.slice(0, indexOfLastItem);
    const hasMore = indexOfLastItem < items.length;

    const loadMore = () => {
        if (hasMore) setCurrentPage((prevPage) => prevPage + 1);
    };

    return { currentItems, loadMore, hasMore };
};

export default usePagination;