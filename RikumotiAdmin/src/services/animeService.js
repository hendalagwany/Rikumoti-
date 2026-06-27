import { apiFetch } from "./apiClient";

export const getAnimeProject = () =>
    apiFetch("/api/anime");

export const getAnimeProjectById = (id) =>
    apiFetch(`/api/anime/${id}`);

export const updateAnimeProject = (id, data) =>
    apiFetch(`/api/anime/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

export const deleteAnimeProject = (id) =>
    apiFetch(`/api/anime/${id}`, {
        method: "DELETE"
    });

export const createAnimeProject = (data) =>
    apiFetch(`/api/anime`, {
        method: "POST",
        body: JSON.stringify(data)
    });
