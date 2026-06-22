import {API_URL} from "../constants/api";

export async function uploadImage(file, folder) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch(`${API_URL}/api/upload/${folder}`,
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
    }

    return response.json();
}