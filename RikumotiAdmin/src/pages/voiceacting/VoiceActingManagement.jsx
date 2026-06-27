import { useState } from "react";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import DataTable from "../../components/admin/DataTable";
import { useFetch } from "../../hooks/useFetch";
import { getVoiceActingProject, deleteVoiceActingProject } from "../../services/voiceactingService";
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


function VoiceActingManagement() {

    const [search, setSearch] = useState("");

    const {
        data: voiceActingProject = [],
        loading,
        error,
        refetch
    } = useFetch(getVoiceActingProject);

    const filteredVoiceActingProject = voiceActingProject.filter(project =>
        project.character
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    } = usePagination(filteredVoiceActingProject);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        resetPage();
    }

    const handleDelete = async (id) => {
        const result =
            await showConfirm(
                "Delete Voice Acting Project",
                "Are you sure you want delete this voice acting project?"
            );
        if (!result.isConfirmed) return;
        try {
            await deleteVoiceActingProject(id);
            showSuccess("Voice Acting Project deleted successfully");
            refetch();
        } catch (error) {
            showError(error.message || "Failed to delete voice acting project");
        }
    }

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="Voice Acting Management"
                    descrtiption="Manage your voice acting projects here."
                />
            }
        >
            <div className="table-toolbar">

                <SearchBar
                    placeholder="🔍 Search voice acting project..."
                    value={search}
                    onChange={handleSearch}
                />
                <Link to={ROUTES.NEW_VOICEACTING}
                    className="add-btn">
                    <FaPlusCircle />
                </Link>
            </div>
            <div className="table-container">
                <DataTable
                    columns={[
                        { key: "member", label: "Member" },
                        { key: "character", label: "Character" },
                        { key: "anime", label: "Anime" },
                        {
                            key: "description",
                            label: "Description",
                            render: (value) => truncateText(value, 50), className: "truncate-cell"
                        },

                    ]}
                    data={paginatedData}
                    currentPage={currentPage}
                    itemPerPage={10}
                    renderActions={(project) => (
                        <div className="action-buttons">
                            <Link
                                to={ROUTES.EDIT_VOICEACTING(project.id)}
                                className="edit-btn"
                            >
                                <FaEdit />
                            </Link>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(project.id)}>
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

export default VoiceActingManagement;