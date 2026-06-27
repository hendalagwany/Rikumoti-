import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { createAnimeProject, getAnimeProjectById, updateAnimeProject } from "../../services/animeService";
import { useUploadImage } from "../../hooks/useUploadImage";

import { ROUTES } from "../../constants/routes";

import ImageUploader from "../../components/admin/ImageUploader";
import DateInput from "../../components/admin/DateInput";

import { useEditMode } from "../../hooks/useEditMode";
import { safeRequest } from "../../utils/safeRequest";
import FormField from "../../components/admin/FormField";
import { showSuccess } from "../../utils/alerts";
import { getImageUrl } from "../../utils/imageUrl";


const fields = [
    { key: "title", label: "Title", type: "text" },
    { key: "role", label: "Role", type: "text" },
    { key: "year", label: "Year", type: "number" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "episodes", label: "Episodes", type: "number" },
    { key: "status", label: "Status", type: "text" },
    { key: "season", label: "Season", type: "text" },
    { key: "genre", label: "Genre", type: "text" },
    { key: "studio", label: "Studio", type: "text" },
    { key: "contributionType", label: "Contribution Type", type: "text" },
    { key: "mainMember", label: "Main Member", type: "text" },
    { key: "memberInvolved", label: "Member Involved", type: "text" },
    { key: "popularityRank", label: "Popularity Rank", type: "number" },
    { key: "story", label: "Story", type: "textarea" },


];

const emptyAnime = {
    title: "",
    role: "",
    year: "",
    image: "",
    description: "",
    episodes: "",
    status: "",
    genre: [],
    season: "",
    studio: "",
    contributionType: "",
    mainMember: "",
    memberInvolved: "",
    popularityRank: "",
    story: "",
};

function EditAnime() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("anime");

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await safeRequest(() => upload(file));

        setAnime(prev => ({
            ...prev,
            image: result.imageUrl
        }));
        showSuccess("Image uploaded.");
    }

    const {
        data: anime,
        setData: setAnime,
        loading,
        error,
        isEditMode
    } = useEditMode(
        id,
        emptyAnime,
        getAnimeProjectById
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setAnime(prev => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : name === "genre"
                        ? value
                            .split(",")
                            .map(item => item.trim())
                            .filter(item => item !== "")
                        : value
        }));
    };

    const handleSubmit = async () => {
        await safeRequest(async () => {
            console.log(JSON.stringify(anime, null, 2));
            if (isEditMode) {
                await updateAnimeProject(id, anime);
            } else {
                await createAnimeProject(anime);
            }
            showSuccess(
                isEditMode
                    ? "Anime updated successfully"
                    : "Anime created successfully"
            )
            navigate(ROUTES.ANIME);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!anime) {
        return <div>Anime Project not found.</div>;
    }

    return (
        <div className="edit-page">
            <h1>{isEditMode ? "Edit Anime Project" : "Create Anime Project"}</h1>

            <div className="images-grid">
                <ImageUploader
                    label="Card-Image"
                    image={anime.image ? getImageUrl(anime.image) : ""}
                    alt={anime.character}
                    onUpload={handleUpload}
                    uploading={uploading}
                    buttonText={isEditMode ? "Change Card Image" : "Upload Card Image"}
                />

            </div>

            <div className="edit-grid">
                {fields.map((field) => (

                    <FormField
                        key={field.key}
                        value={anime[field.key]}
                        onChange={handleChange}
                        field={field}
                    />

                ))}
            </div>


            <div className="save-container">
                <button className="save-all" onClick={handleSubmit}>
                    {isEditMode ? "Update Anime Project" : "Create Anime"}
                </button>
            </div>
        </div>
    );
}

export default EditAnime;