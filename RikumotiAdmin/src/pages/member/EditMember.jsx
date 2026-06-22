import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMemberById, updateMember } from "../../services/memberService";
import { useUploadImage } from "../../hooks/useUploadImage";

import { ROUTES } from "../../constants/routes";

import ImageUploader from "../../components/admin/ImageUploader";
import { getImageUrl } from "../../utils/imageUrl";
import { useEditMode } from "../../hooks/useEditMode";
import { showError, showSuccess } from "../../utils/alerts";

const fields = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "instrument", label: "Instrument" },
    { key: "hobby", label: "Hobby" },
    { key: "favoriteFood", label: "Favorite Food" },
    { key: "favoriteDrink", label: "Favorite Drink" },
    { key: "favoriteColor", label: "Favorite Color" },
    { key: "birthday", label: "Birthday" },
    { key: "quote", label: "Quote" },
    { key: "bio", label: "Bio" },
    { key: "tagline", label: "Tagline" },
];

const emptyMember = {
    name: "",
    age: "",
    instrument: "",
    hobby: "",
    favoriteFood: "",
    favoriteDrink: "",
    favoriteColor: "",
    birthday: "",
    quote: "",
    bio: "",
    tagline: "",
    image: "",
    detailsImg: ""
};

function EditMember() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { upload, uploading } = useUploadImage("members");

    const createUploadHandler = (field) => async (e) => {
        const file = e.target.files[0]

        if (!file) return;

        try {
            const result = await upload(file);

            setMember(prev => ({
                ...prev,
                [field]: result.imageUrl
            }));

            showSuccess(
                "Image uploaded."
            )
        } catch (error) {
            showError("Image not uploaded.")
        }
    };


    const {
        data: member,
        setData: setMember,
        loading,
        error,

    } = useEditMode(
        id,
        emptyMember,
        getMemberById
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async () => {
        try {
            await updateMember(id, member);
            navigate(ROUTES.MEMBERS);
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="edit-page">
            <h1>Edit Member</h1>

            <div className="images-grid">

                <ImageUploader
                    label="Card Image"
                    image={getImageUrl(member.image)}
                    alt={member.name}
                    onUpload={createUploadHandler("image")}
                    uploading={uploading}
                />

                <ImageUploader
                    label="Details Image"
                    image={getImageUrl(member.detailsImg)}
                    alt={member.name}
                    onUpload={createUploadHandler("detailsImg")}
                    uploading={uploading}
                />
            </div>

            <div className="edit-grid">
                {fields.map((field) => (
                    field.key === "bio" ? (
                        <div key={field.key} className="floating-field textarea-field">
                            <textarea
                                placeholder=" "
                                name={field.key}
                                value={member[field.key] || ""}
                                onChange={handleChange}
                            />
                            <label>{field.label}</label>
                        </div>
                    ) :
                        <div className="floating-field" key={field.key}>

                            <input
                                placeholder=" "
                                name={field.key}
                                type={field.key === "age" ? "number" : "text"}
                                value={member[field.key] || ""}
                                onChange={handleChange}
                            />
                            <label>{field.label}</label>

                        </div>
                ))}

            </div>
            <div className="save-container">
                <button
                    className="save-all"
                    onClick={handleSubmit}>
                    Save All Changes
                </button>
            </div>
        </div >

    );
}

export default EditMember;