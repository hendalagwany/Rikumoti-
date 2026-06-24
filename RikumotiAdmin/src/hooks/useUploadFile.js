import { useState } from "react";
import { uploadAudio } from "../services/uploadService";

export function useUploadAudio(folder) {
    const [uploading, setUploading] = useState(false);

    const upload = async (file) => {
        setUploading(true);

        try {
            return await uploadAudio(folder, file);
        } finally {
            setUploading(false);
        }
    };

    return { upload, uploading };
}