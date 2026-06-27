import { useState } from "react";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import DataTable from "../../components/admin/DataTable";
import { useFetch } from "../../hooks/useFetch";
import { getMerch, deleteMerch } from "../../services/merchService";
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


function MerchManagement() {
    const [search, setSearch] = useState("");

    const {
        data: merch = [],
        loading,
        error,
        refetch
    } = useFetch(getMerch);

    const filteredMerch = merch.filter(item =>
        item.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    } = usePagination(filteredMerch);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        resetPage();
    }

    const handleDelete = async (id) => {
        const result =
            await showConfirm(
                "Delete Merch Item",
                "Are you sure you want delete this Merch Item?"
            );
        if (!result.isConfirmed) return;
        try {
            await deleteMerch(id);
            showSuccess("Merch Item deleted successfully");
            refetch();
        } catch (error) {
            showError(error.message || "Failed to delete Merch Item");
        }
    }

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="Merch Management"
                    description="Manage your merch items here."
                />
            }
        >
            <div className="table-toolbar">

                <SearchBar
                    placeholder="🔍 Search with item's name..."
                    value={search}
                    onChange={handleSearch}
                />
                <Link to={ROUTES.NEW_MERCH}
                    className="add-btn">
                    <FaPlusCircle />
                </Link>
            </div>
            <div className="table-container">
                <DataTable
                    columns={[
                        { key: "name", label: "Name" },
                        { key: "category", label: "Category" },
                        { key: "price", label: "Price" },
                        { key: "stock", label: "Stock", },

                    ]}
                    data={paginatedData}
                    currentPage={currentPage}
                    itemPerPage={10}
                    renderActions={(item) => (
                        <div className="action-buttons">
                            <Link
                                to={ROUTES.EDIT_MERCH(item.id)}
                                className="edit-btn"
                            >
                                <FaEdit />
                            </Link>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(item.id)}>
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


        </ManagementLayout >
    );
}

export default MerchManagement; 