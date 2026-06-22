import { apiFetch } from "./apiClient";

export const getAnimeProject = () => {
    apiFetch("/api/anime");
};

export const getAnimeProjectById = (id) => {
    apiFetch(`/api/anime/${id}`);
};

export const updateAnimeProject = (id, data) => {
    apiFetch(`/api/anime/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });
};
