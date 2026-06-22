import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { getMembers } from "../../services/memberService";
import DataTable from "../../components/admin/DataTable";
import SearchBar from "../../components/admin/SearchBar";
import { ROUTES } from "../../constants/routes";
import ManagementLayout from "../../components/admin/ManagementLayout";
import PageHeader from "../../components/admin/PageHeader";
import { useFetch } from "../../hooks/useFetch";


function MembersManagement() {
    const [search, setSearch] = useState("");

    const {
        data: members = [],
        loading,
        error
    } = useFetch(getMembers);

    const filteredMembers = members.filter(member =>
        member.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    if (loading) {
        return <p>Loading members...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <ManagementLayout

            header={
                <PageHeader
                    title="Members Management"
                    description="Manage all group members"
                />
            }

        >
            <SearchBar
                placeholder="🔍 Search member..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="table-container">
                <DataTable
                    columns={[
                        { key: "name", label: "Name" },
                        { key: "age", label: "Age" },
                        { key: "instrument", label: "Instrument" }
                    ]}
                    data={filteredMembers}
                    renderActions={(member) => (
                        <Link
                            to={ROUTES.EDIT_MEMBER(member.id)}
                            className="edit-btn"
                        >
                            <FaEdit />
                        </Link>
                    )}
                />
            </div>

        </ManagementLayout>

    );
}

export default MembersManagement;