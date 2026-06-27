import { useState } from "react";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import DataTable from "../../components/admin/DataTable";
import { useFetch } from "../../hooks/useFetch";
import { getAnimeProject, deleteAnimeProject } from "../../services/animeService";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { truncateText } from "../../utils/truncateText";
import Pagination from "../../components/admin/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { showConfirm, showError, showSuccess } from "../../utils/alerts";

function AnimeManagement() {

    const [search, setSearch] = useState("");

    const {
        data: anime = [],
        loading,
        error,
        refetch
    } = useFetch(getAnimeProject);

    const filteredAnimeProject = anime.filter(project =>
        project.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    } = usePagination(filteredAnimeProject);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        resetPage();
    }

    const handleDelete = async (id) => {
        const result =
            await showConfirm(
                "Delete Anime Project",
                "Are you sure you want delete this anime project?"
            );
        if (!result.isConfirmed) return;
        try {
            await deleteAnimeProject(id);
            showSuccess("Anime deleted successfully");
            refetch();
        } catch (error) {
            showError(error.message || "Failed to delete anime");
        }
    }

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="Anime Management"
                    descrtiption="Manage your anime projects here."
                />
            }
        >
            <div className="table-toolbar">

                <SearchBar
                    placeholder="🔍 Search anime project..."
                    value={search}
                    onChange={handleSearch}
                />
                <Link to={ROUTES.NEW_ANIME}
                    className="add-btn">
                    <FaPlusCircle />
                </Link>
            </div>
            <div className="table-container">
                <DataTable
                    columns={[
                        { key: "title", label: "Title", render: (value) => truncateText(value, 15), className: "truncate-cell" },
                        { key: "role", label: "Role", render: (value) => truncateText(value, 15), className: "truncate-cell" },
                        { key: "mainMember", label: "Member" },
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
                                to={ROUTES.EDIT_ANIME(project.id)}
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

export default AnimeManagement;