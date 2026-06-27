import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { createMerch, getMerchById, updateMerch } from "../../services/merchService";
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
    { key: "name", label: "name", type: "text" },
    { key: "category", label: "Category", type: "text" },
    { key: "price", label: "Price", type: "text" },
    { key: "description", label: "Description", type: "text" },
    { key: "stock", label: "Stock", type: "text" },
    { key: "releaseDate", label: "Release Date", type: "text" },

];

const emptyMerch = {
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
    releaseDate: "",

};


function EditMerch() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("merch");

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await safeRequest(() => upload(file));

        setMerch(prev => ({
            ...prev,
            image: result.imageUrl
        }));
        showSuccess("Image uploaded.");
    }

    const {
        data: merch,
        setData: setMerch,
        loading,
        error,
        isEditMode
    } = useEditMode(
        id,
        emptyMerch,
        getMerchById
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setMerch(prev => ({
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
            console.log(JSON.stringify(merch, null, 2));
            if (isEditMode) {
                await updateMerch(id, merch);
            } else {
                await createMerch(merch);
            }
            showSuccess(
                isEditMode
                    ? "Merch updated successfully"
                    : "Merch created successfully"
            )
            navigate(ROUTES.MERCH);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!merch) {
        return <div>Merch not found.</div>;
    }

    return (
        <div className="edit-page">
            <h1>{isEditMode ? "Edit Merch" : "Create Merch"}</h1>

            <div className="images-grid">
                <ImageUploader
                    label="Card-Image"
                    image={merch.image ? getImageUrl(merch.image) : ""}
                    alt={merch.character}
                    onUpload={handleUpload}
                    uploading={uploading}
                    buttonText={isEditMode ? "Change Card Image" : "Upload Card Image"}
                />

            </div>

            <div className="edit-grid">
                {fields.map((field) => (

                    <FormField
                        key={field.key}
                        value={merch[field.key]}
                        onChange={handleChange}
                        field={field}
                    />

                ))}
            </div>

           
            <div className="save-container">
                <button className="save-all" onClick={handleSubmit}>
                    {isEditMode ? "Update Merch" : "Create Merch"}
                </button>
            </div>
        </div>
    );
}

export default EditMerch;