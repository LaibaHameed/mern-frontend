import { useState } from 'react';

export const useTablePagination = (initialLimit = 10) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(initialLimit);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

    const setPageNumber = (pageNumber) => setPage(pageNumber);
    const setLimitNumber = (limitNumber) => setLimit(limitNumber);

    return { page, limit, nextPage, prevPage, setPageNumber, setLimitNumber };
};