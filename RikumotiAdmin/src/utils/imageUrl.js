const API_URL = "http://localhost:5228";

export function getImageUrl(path) {
    if (!path) return "";

    return `${API_URL}${path}`;
}