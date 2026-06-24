import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { createSong, getSongById, updateSong } from "../../services/musicService";
import { useUploadImage } from "../../hooks/useUploadImage";

import { ROUTES } from "../../constants/routes";

import ImageUploader from "../../components/admin/ImageUploader";
import DateInput from "../../components/admin/DateInput";

import { useEditMode } from "../../hooks/useEditMode";
import { safeRequest } from "../../utils/safeRequest";
import FormField from "../../components/admin/FormField";
import { showSuccess } from "../../utils/alerts";
import { useUploadAudio } from "../../hooks/useUploadFile";
import { getImageUrl, getAudioUrl } from "../../utils/imageUrl";


const fields = [
    { key: "title", label: "Title" },
    { key: "album", label: "Album" },
    { key: "genre", label: "Genre" },
    { key: "releaseDate", label: "Release Date" },
    { key: "duration", label: "Duration" },
    { key: "anime", label: "Anime" },
    {key: "singer", label: "Singer" },
    { key: "role", label: "Role" },
];

const emptySong = {
    title: "",
    audio: "",
    cover: "",
    singer: "",
    album: "",
    genre: "",
    releaseDate: "",
    duration: "",
    isFeatured: false,
    anime: "",
    role: ""
};

function EditSong() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("music");

    const { upload: uploadAudio, uploading: uploadingAudio } = useUploadAudio("music");

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;
        const result = await safeRequest(() => upload(file));

        setSong(prev => ({
            ...prev,
            cover: result.imageUrl
        }));
        showSuccess("Image uploaded.");
    }

    const handleAudioUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await safeRequest(() =>
            uploadAudio(file)
        );

        if (!result) return;

        setSong(prev => ({
            ...prev,
            audio: result.audioUrl
        }));

        showSuccess("Audio uploaded.");
    }

    const {
        data: song,
        setData: setSong,
        loading,
        error,
        isEditMode
    } = useEditMode(
        id, emptySong, getSongById
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setSong(prev => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : value
        }));
    };

    const handleSubmit = async () => {
        await safeRequest(async () => {
            if (isEditMode) {
                await updateSong(id, song);
            } else {
                await createSong(song);
            }
            showSuccess(
                isEditMode
                    ? "Song updated successfully."
                    : "Song created successfully."
            )
            navigate(ROUTES.MUSIC);
        });
    };

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    if (!song) {
        return <h2>Song not found.</h2>
    }

    return (
        <div className="edit-page">
            <h1>{isEditMode ? "Edit Song" : "Create Song"}</h1>

            <div className="images-grid">
                <ImageUploader
                    label="Card-Image"
                    image={song.cover ? getImageUrl(song.cover) : ""}
                    alt={song.title}
                    onUpload={handleUpload}
                    uploading={uploading}
                    buttonText={isEditMode ? "Change Song Cover" : "Upload Song Cover"}
                />

                <div className="audio-upload-card">
                    <label
                        htmlFor="audio-upload"
                        className="upload-btn"
                    >
                        {song.audio
                            ? "Change Audio"
                            : "Upload Audio"}
                    </label>

                    <input
                        id="audio-upload"
                        type="file"
                        accept=".mp3,.wav,.m4a"
                        hidden
                        onChange={handleAudioUpload}
                    />

                    {song.audio && (
                        <audio controls className="audio-preview">
                            <source
                                src={getAudioUrl(song.audio)}
                            />
                        </audio>
                    )}

                </div>
            </div>

            <div className="edit-grid">
                {fields.map((field) => (

                    field.key === "releaseDate" ? (
                        <DateInput
                            key={field.key}
                            label={field.label}
                            value={song.releaseDate}
                            onChange={(value) => setSong(prev => ({
                                ...prev,
                                releaseDate: value
                            }))}
                        />
                    ) : field.key === "audio" ? null : (
                        <FormField
                            key={field.key}
                            field={field}
                            value={song[field.key]}
                            onChange={handleChange}
                        />
                    )
                ))}

                <div className="featured-card">
                    <div>
                        <h3>Featured Song</h3>
                        <p>Show this song in the featured section</p>
                    </div>

                    <label className="switch">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={song.isFeatured || false}
                            onChange={handleChange}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

            </div>



            <div className="save-container">
                <button className="save-all" onClick={handleSubmit}>
                    {isEditMode ? "Update Song" : "Create Song"}
                </button>
            </div>
        </div>
    );
}

export default EditSong;