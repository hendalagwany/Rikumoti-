import { apiFetch } from "./apiClient";

export const getNews = () =>
    apiFetch("/api/news");

export const getNewsById = (id) =>
    apiFetch(`/api/news/${id}`);

export const updateNews = (id, data) =>
    apiFetch(`/api/news/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

export const deleteNews = (id) =>
    apiFetch(`/api/news/${id}`, {
        method: "DELETE",
    });

export const createNews = (data) =>
    apiFetch("/api/news", {
        method: "POST",
        body: JSON.stringify(data)
    });