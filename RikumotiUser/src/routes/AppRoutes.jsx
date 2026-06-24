import { Routes, Route } from "react-router-dom";

import Home from "../pages/User Pages/Home.jsx";
import Members from "../pages/User Pages/Members.jsx";
import MemberDetails from "../pages/User Pages/MemberDetails.jsx";
import Anime from "../pages/User Pages/Anime.jsx";
import Music from "../pages/User Pages/Music.jsx";
import VoiceActing from "../pages/User Pages/VoiceActing.jsx";
import News from "../pages/User Pages/News.jsx";
import Merch from "../pages/User Pages/Merch.jsx";
import Gallery from "../pages/User Pages/Gallery.jsx";
import FanClub from "../pages/User Pages/FanClub.jsx";
import VoiceActingDetails from "../pages/User Pages/VoiceActingDetails.jsx";
import NewsDetails from "../pages/User Pages/NewsDetails.jsx";
import AnimeDetails from "../pages/User Pages/AnimeDetails.jsx";
import MerchDetails from "../pages/User Pages/MerchDetails.jsx";
import SongDetails from "../pages/User Pages/SongDetails.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/member/:id" element={<MemberDetails />} />
            <Route path="/voiceacting" element={<VoiceActing />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/:id" element={<SongDetails />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/fanclub" element={<FanClub />} />
            <Route path="/news" element={<News />} />
            <Route path="/voiceacting/:id" element={<VoiceActingDetails />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
            <Route path="/merch/:id" element={<MerchDetails />} />

        </Routes>
    );
}

export default AppRoutes;