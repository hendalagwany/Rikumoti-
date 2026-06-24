import { API_URL } from "../constants/api";

export async function uploadImage(folder, file) {
    console.log("folder =", folder);
    console.log("file =", file);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        `http://localhost:5228/api/upload/image/${folder}`,
        {
            method: "POST",
            body: formData
        }
    );

    return await response.json();
}

export async function uploadAudio(folder, file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        `http://localhost:5228/api/upload/audio/${folder}`,
        {
            method: "POST",
            body: formData
        }
    );

    return await response.json();
}