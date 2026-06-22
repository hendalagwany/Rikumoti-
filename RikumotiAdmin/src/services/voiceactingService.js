import { apiFetch } from "./apiClient";

export const getVoiceActingProject = () => {
    apiFetch("/api/voiceacting");
};

export const getVoiceActingProjectById = (id) => {
    apiFetch(`/api/voiceacting/${id}`);
};

export const updateVoiceActingProject = (id, data) => {
    apiFetch(`/api/voiceacting/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });
};
