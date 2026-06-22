import { apiFetch } from "./apiClient";

export const getMembers = () =>
    apiFetch("/api/members");

export const getMemberById = (id) =>
    apiFetch(`/api/members/${id}`);

export const updateMember = (id, data) =>
    apiFetch(`/api/members/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });