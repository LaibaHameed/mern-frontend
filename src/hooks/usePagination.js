import { DEFAULT_LIMIT } from "@/constants/general";
import { useState, useEffect, useMemo } from "react";

export const usePagination = (fetchFunction, searchQuery, sortOption, limit = DEFAULT_LIMIT) => {
    const [page, setPage] = useState(1);
    const [allItems, setAllItems] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const { data, isLoading, isFetching, isError } = fetchFunction({
        limit,
        page,
        search: searchQuery,
        sort: sortOption,
    });

    const items = data?.body?.products ?? [];
    const totalPages = data?.body?.pagination?.totalPages ?? 1;

    useEffect(() => {
        setAllItems([]);
        setPage(1);
        setIsSearching(true);
    }, [searchQuery, sortOption]);

    useEffect(() => {
        if (items.length) {
            setAllItems((prev) => {
                if (page === 1) {
                    setIsSearching(false);
                    return items;
                }
                const newItems = items.filter(
                    (item) => !prev.some((prevItem) => prevItem._id === item._id)
                );
                return [...prev, ...newItems];
            });
        } else if (!isFetching) {
            setIsSearching(false);
        }

    }, [items, isFetching]); 

    const shouldShowLoader = useMemo(
        () => (isLoading || isSearching) && allItems.length === 0,
        [isLoading, isSearching, allItems]
    );

    return {
        allItems,
        shouldShowLoader,
        isLoading,
        isFetching,
        isError,
        page,
        setPage,
        totalPages,
    };
};
