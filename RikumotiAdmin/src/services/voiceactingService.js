import { apiFetch } from "./apiClient";

export const getVoiceActingProject = () =>
    apiFetch("/api/voiceacting");

export const getVoiceActingProjectById = (id) =>
    apiFetch(`/api/voiceacting/${id}`);

export const updateVoiceActingProject = (id, data) =>
    apiFetch(`/api/voiceacting/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

export const deleteVoiceActingProject = (id) =>
    apiFetch(`/api/voiceacting/${id}`, {
        method: "DELETE"
    });

export const createVoiceActingProject = (data) =>
    apiFetch(`/api/voiceacting`, {
        method: "POST",
        body: JSON.stringify(data)
    });
