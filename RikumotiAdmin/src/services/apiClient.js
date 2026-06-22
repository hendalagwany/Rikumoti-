import { API_URL } from "../constants/api";

export async function apiFetch(endpoint, options = {}) {
    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            },
            ...options
        }
    );

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}