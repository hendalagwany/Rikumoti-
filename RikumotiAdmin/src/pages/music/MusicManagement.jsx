import { useState } from "react";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import DataTable from "../../components/admin/DataTable";
import { useFetch } from "../../hooks/useFetch";
import { getMusic, deleteSong } from "../../services/musicService";
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


function MusicManagement() {

    const [search, setSearch] = useState("");

    const {
        data: song = [],
        loading,
        error,
        refetch
    } = useFetch(getMusic);

    const filteredSong = song.filter(song =>
        song.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage,
        resetPage
    } = usePagination(filteredSong, 10);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        resetPage();
    }

    const handleDelete = async (id) => {
        const result =
            await showConfirm(
                "Delete Song",
                "Are you sure you want delete this song?"
            );

        if (!result) return;

        try {
            await deleteSong(id);
            await showSuccess(
                "Song deleted successfully"
            );
            refetch();
        } catch (error) {
            showError(
                error.message
            );
        }
    };

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="Music Management"
                    description="Manage group and member songs"
                />
            }
        >
            <div className="table-toolbar">
                <SearchBar
                    placeholder="🔍 Search song..."
                    value={search}
                    onChange={handleSearch}
                />
                <Link
                    to={ROUTES.NEW_MUSIC}
                    className="add-btn"
                >
                    <FaPlusCircle />
                </Link>
            </div>

            <div className="table-container">
                <DataTable
                    columns={[
                        { key: "title", label: "Title" },
                        { key: "singer", label: "Singer" },
                        { key: "album", label: "Album" },
                        { key: "releaseDate", label: "Release Date" },
                        { key: "duration", label: "Duration" },
                        { key: "genre", label: "Genre" },
                    ]}
                    data={paginatedData}
                    currentPage={currentPage}
                    itemsPerPage={10}
                    renderActions={(song) => (
                        <div className="action-buttons">
                            <Link
                                to={ROUTES.EDIT_MUSIC(song.id)}
                                className="edit-btn"
                            >
                                <FaEdit />
                            </Link>

                            <button className="delete-btn" onClick={() => handleDelete(song.id)}>
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

export default MusicManagement;