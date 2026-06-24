import { apiFetch } from "./apiClient";

export const getMusic = () =>
    apiFetch("/api/music");

export const getSongById = (id) =>
    apiFetch(`/api/music/${id}`);

export const updateSong = (id, data) =>
    apiFetch(`/api/music/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

export const deleteSong = (id) =>
    apiFetch(`/api/music/${id}`, {
        method: "DELETE"
    });

export const createSong = (data) =>
    apiFetch(`/api/music`, {
        method: "POST",
        body: JSON.stringify(data)
    });