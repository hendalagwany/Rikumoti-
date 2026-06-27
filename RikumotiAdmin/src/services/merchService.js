import { apiFetch } from "./apiClient";

export const getMerch =  () =>
    apiFetch("/api/merch");

export const getMerchById =  (id) =>
    apiFetch(`/api/merch/${id}`);

export const updateMerch =  (id, data) =>
    apiFetch(`/api/merch/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

    export const deleteMerch = (id) =>
    apiFetch(`/api/merch/${id}`, {
        method: "DELETE"
    });

export const createMerch = (data) =>
    apiFetch(`/api/merch`, {
        method: "POST",
        body: JSON.stringify(data)
    });