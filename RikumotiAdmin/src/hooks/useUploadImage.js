import { useState } from "react";
import { uploadImage } from "../services/uploadService";

export function useUploadImage(folder) {
    const [uploading, setUploading] = useState(false);

    const upload = async (file) => {
        setUploading(true);

        try {
            return await uploadImage(file, folder);
        } finally {
            setUploading(false);
        }
    };

    return { upload, uploading };
}