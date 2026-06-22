export const ROUTES = {
    ADMIN: "/admin",

    MEMBERS: "/admin/members",
    EDIT_MEMBER: (id = ":id") => `/admin/members/edit/${id}`,

    NEWS: "/admin/news",
    EDIT_NEWS: (id = ":id") => `/admin/news/edit/${id}`,
    NEW_NEWS : "/admin/news/new",

    MUSIC: "/admin/music",
    EDIT_MUSIC: (id = ":id") => `/admin/music/edit/${id}`,

    GALLERY: "/admin/gallery",

    ANIME: "/admin/anime",
    EDIT_ANIME: (id = ":id") => `/admin/anime/edit/${id}`,

    VOICEACTING: "/admin/voiceacting",
    EDIT_VOICEACTING: (id = ":id") => `/admin/voiceacting/edit/${id}`,

    MERCH: "/admin/merch",
    EDIT_MERCH: (id = ":id") => `/admin/merch/edit/${id}`,
};