import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import AdminLayout from "../components/layout/AdminLayout";

import Dashboard from "../pages/Dashboard";

import MembersManagement from "../pages/member/MembersManagement";
import EditMember from "../pages/member/EditMember";

import NewsManagement from "../pages/news/NewsManagement";
import EditNews from "../pages/news/EditNews";

import AnimeManagement from "../pages/anime/AnimeManagement";
import EditAnime from "../pages/anime/EditAnime";

import MerchManagement from "../pages/merch/MerchManagement";
import EditMerch from "../pages/merch/EditMerch";

import MusicManagement from "../pages/music/MusicManagement";
import EditSong from "../pages/music/EditSong";

import VoiceActingManagement from "../pages/voiceacting/VoiceActingManagement";
import EditVoiceActing from "../pages/voiceacting/EditVoiceActing";

function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="members" element={<MembersManagement />} />
                <Route path="members/edit/:id" element={<EditMember />} />

                <Route path="news" element={<NewsManagement />} />
                <Route path="news/edit/:id" element={<EditNews />} />
                <Route path="/admin/news/new" element={<EditNews />} />

                <Route path="music" element={<MusicManagement />} />
                <Route path="music/edit/:id" element={<EditSong />} />
                <Route path="/admin/music/new" element={<EditSong />} />

                <Route path="anime" element={<AnimeManagement />} />
                <Route path="anime/edit/:id" element={<EditAnime />} />
                <Route path="/admin/anime/new" element={<EditAnime />} />

                <Route path="voiceacting" element={<VoiceActingManagement />} />
                <Route path="voiceacting/edit/:id" element={<EditVoiceActing />} />
                <Route path="/admin/voiceacting/new" element={<EditVoiceActing />} />

                <Route path="merch" element={<MerchManagement />} />
                <Route path="merch/edit/:id" element={<EditMerch />} />
                <Route path="/admin/merch/new" element={<EditMerch />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;