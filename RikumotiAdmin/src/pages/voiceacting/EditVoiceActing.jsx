import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { createVoiceActingProject, getVoiceActingProjectById, updateVoiceActingProject } from "../../services/voiceactingService";
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
    { key: "member", label: "Member", type: "text" },
    { key: "character", label: "Character", type: "text" },
    { key: "anime", label: "Anime", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "year", label: "Year", type: "number" },
    { key: "season", label: "Season", type: "text" },

    { key: "genre", label: "Genre", type: "text" },

    { key: "episodes", label: "Episodes", type: "number" },

    { key: "roleType", label: "Role Type", type: "text" },
    { key: "studio", label: "Studio", type: "text" },
    { key: "characterAge", label: "Character Age", type: "number" },
    { key: "sampleQuote", label: "Sample Quote", type: "textarea" },
    { key: "characterColor", label: "Character Color", type: "text" },
    { key: "status", label: "Status", type: "text" },
];

const emptyVoiceActing = {
    member: "",
    character: "",
    anime: "",
    image: "",
    description: "",
    year: "",
    season: "",

    genre: [],

    episodes: "",

    roleType: "",
    studio: "",
    characterAge: "",
    sampleQuote: "",

    fanFavorite: false,

    characterColor: "",
    status: "",
};

function EditVoiceActing() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("voiceacting");

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await safeRequest(() => upload(file));

        setVoiceActing(prev => ({
            ...prev,
            image: result.imageUrl
        }));
        showSuccess("Image uploaded.");
    }



    const {
        data: voiceActing,
        setData: setVoiceActing,
        loading,
        error,
        isEditMode
    } = useEditMode(
        id,
        emptyVoiceActing,
        getVoiceActingProjectById
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setVoiceActing(prev => ({
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
            console.log(JSON.stringify(voiceActing, null, 2));
            if (isEditMode) {
                await updateVoiceActingProject(id, voiceActing);
            } else {
                await createVoiceActingProject(voiceActing);
            }
            showSuccess(
                isEditMode
                    ? "Voice Acting Project updated successfully"
                    : "Voice Acting Project created successfully"
            )
            navigate(ROUTES.VOICEACTING);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!voiceActing) {
        return <div>Voice Acting Project not found.</div>;
    }

    return (
        <div className="edit-page">
            <h1>{isEditMode ? "Edit Voice Acting Project" : "Create Voice Acting Project"}</h1>

            <div className="images-grid">
                <ImageUploader
                    label="Card-Image"
                    image={voiceActing.image ? getImageUrl(voiceActing.image) : ""}
                    alt={voiceActing.character}
                    onUpload={handleUpload}
                    uploading={uploading}
                    buttonText={isEditMode ? "Change Card Image" : "Upload Card Image"}
                />

            </div>

            <div className="edit-grid">
                {fields.map((field) => (

                    <FormField
                        key={field.key}
                        value={voiceActing[field.key]}
                        onChange={handleChange}
                        field={field}
                    />

                ))}
            </div>

            <div className="featured-card">
                <div>
                    <h3>Fan Favorite</h3>
                    <p>Check if this is a fan favorite</p>
                </div>

                <label className="switch">
                    <input
                        type="checkbox"
                        name="fanFavorite"
                        checked={voiceActing.fanFavorite || false}
                        onChange={handleChange}
                    />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="save-container">
                <button className="save-all" onClick={handleSubmit}>
                    {isEditMode ? "Update Voice Acting Project" : "Create Voice Acting Project"}
                </button>
            </div>
        </div>
    );
}

export default EditVoiceActing;