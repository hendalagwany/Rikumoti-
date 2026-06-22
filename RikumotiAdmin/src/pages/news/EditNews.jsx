import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { createNews, getNewsById, updateNews } from "../../services/newsService";
import { useUploadImage } from "../../hooks/useUploadImage";

import { ROUTES } from "../../constants/routes";

import ImageUploader from "../../components/admin/ImageUploader";
import { getImageUrl } from "../../utils/imageUrl";
import DateInput from "../../components/admin/DateInput";

import { useEditMode } from "../../hooks/useEditMode";
import { safeRequest } from "../../utils/safeRequest";
import FormField from "../../components/admin/FormField";
import { showSuccess } from "../../utils/alerts";

const fields = [
    { key: "title", label: "Title", type: "text" },
    { key: "date", label: "Date", type: "date" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "member", label: "Member", type: "text" },
    { key: "category", label: "Category", type: "text" },
    { key: "anime", label: "Anime", type: "text" },
    { key: "role", label: "Role", type: "text" },
    { key: "author", label: "Author", type: "text" },
    { key: "tags", label: "Tags", type: "tags" },
    { key: "featured", label: "Featured", type: "switch" }
];

const emptyNews = {
    title: "",
    date: "",
    description: "",
    member: "",
    category: "",
    anime: "",
    role: "",
    author: "",
    featured: false,
    tags: [],
    image: ""
};

function EditNews() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("news");

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await safeRequest(() => upload(file));

        setNews(prev => ({
            ...prev,
            image: result.imageUrl
        }));
        showSuccess(
            "Image uploaded."
        )
    };

    const {
        data: news,
        setData: setNews,
        loading,
        error,
        isEditMode
    } = useEditMode(
        id,
        emptyNews,
        getNewsById
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNews(prev => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : name === "tags"
                    ? value.split(",").map(tag => tag.trim())
                    : value
        }));
    };

    const handleSubmit = async () => {
        await safeRequest(async () => {
            if (isEditMode) {
                await updateNews(id, news);
            } else {
                await createNews(news);
            }
            showSuccess(
                isEditMode
                    ? "News updated successfully"
                    : "News created successfully"
            )
            navigate(ROUTES.NEWS);
        });
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!news) {
        return <h2>News not found</h2>;
    }

    return (
        <div className="edit-page">
            <h1>{isEditMode ? "Edit News" : "Add News"}</h1>

            <div className="images-grid">
                <ImageUploader
                    label="Card-Image"
                    image={news.image ? getImageUrl(news.image) : ""}
                    alt={news.title}
                    onUpload={handleUpload}
                    uploading={uploading}
                    buttonText={isEditMode ? "Change Image" : "Upload Image"}
                />
            </div>

            <div className="edit-grid">
                {fields.map((field) => (
                    <FormField
                        key={field.key}
                        field={field}
                        value={news[field.key]}
                        onChange={handleChange}
                    />
                ))}

                <div className="featured-card">
                    <div>
                        <h3>Featured News</h3>
                        <p>Show this article in featured section</p>
                    </div>

                    <label className="switch">
                        <input
                            type="checkbox"
                            name="featured"
                            checked={news.featured || false}
                            onChange={handleChange}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="save-container">
                <button
                    className="save-all"
                    onClick={handleSubmit}>
                    {isEditMode ? "Save Changes" : "Add News"}
                </button>
            </div>
        </div >
    );
}

export default EditNews;