import { useState } from "react";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import DataTable from "../../components/admin/DataTable";
import { useFetch } from "../../hooks/useFetch";
import { getNews, deleteNews } from "../../services/newsService";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { truncateText } from "../../utils/truncateText";
import Pagination from "../../components/admin/Pagination";
import { usePagination } from "../../hooks/usePagination";

import {
    showConfirm,
    showSuccess,
    showError
} from "../../utils/alerts";

function NewsManagement() {

    const [search, setSearch] = useState("");

    const {
        data: news = [],
        loading,
        error,
        refetch
    } = useFetch(getNews);

    const filteredNews = news.filter(news =>
        news.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    } = usePagination(filteredNews, 10);

    const handleSeach = (e) => {
        setSearch(e.target.value);
        resetPage();
    }

    const handleDelete = async (id) => {
        const result =
            await showConfirm(
                "Delete News",
                "Are you sure you want delete this news?"
            );

        if (!result.isConfirmed) return;

        try {
            await deleteNews(id);
            await showSuccess(
                "News deleted successfully."
            );
            refetch();
        } catch (error) {
            console.log(error);
            showError(
                error.message
            );
        }
    };

    if (loading) {
        return <p>Loading news...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="News Management"
                    description="Manage all news articles"
                />
            }

        >

            <div className="table-toolbar">
                <SearchBar
                    placeholder="🔍 Search news..."
                    value={search}
                    onChange={handleSeach}
                />

                <Link
                    to={ROUTES.NEW_NEWS}
                    className="add-btn"
                >
                    <FaPlusCircle />
                </Link>
            </div>


            <div className="table-container">
                <DataTable
                    columns={[
                        {
                            key: "title",
                            label: "Title",
                            className: "truncate-cell",
                            render: (value) => truncateText(value, 20)
                        },
                        { key: "date", label: "Date" },
                        {
                            key:
                                "description",
                            label: "Description",
                            render: (value) => truncateText(value, 50),
                            className: "truncate-cell"
                        },
                        { key: "member", label: "Member" },
                    ]}
                    data={paginatedData}
                    currentPage={currentPage}
                    itemsPerPage={10}
                    renderActions={(news) => (
                        <div className="action-buttons">
                            <Link
                                to={ROUTES.EDIT_NEWS(news.id)}
                                className="edit-btn"
                            >
                                <FaEdit />

                            </Link>
                            <button className="delete-btn" onClick={() => handleDelete(news.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    )}

                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

        </ManagementLayout>
    );
}

export default NewsManagement;