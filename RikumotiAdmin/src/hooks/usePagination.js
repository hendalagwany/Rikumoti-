import { useState, useMemo } from "react";

export function usePagination(data = [], itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;

        return data.slice(startIndex, startIndex + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    const resetPage = () => setCurrentPage(1);

    return {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    };
}