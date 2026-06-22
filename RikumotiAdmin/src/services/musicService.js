import { apiFetch } from "./apiClient";

export const getSongs =  () => {
    apiFetch("/api/music");
};

export const getSongById =  (id) => {
    apiFetch(`/api/music/${id}`);
};

export const updateSong =  (id, data) => {
    apiFetch(`/api/music/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });
};
