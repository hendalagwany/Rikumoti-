import React from "react";
import SongCard from "../../components/ui/SongCard";

import { useEffect, useState } from "react";

const API = "http://localhost:5228";

function Music() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/music`)
            .then(res => res.json())
            .then(data => setSongs(data));
    }, []);

    const sections = [
        { title: "Rikumoti Songs", singer: "group" },
        { title: "Myuki", singer: "myuki", className: "myuki-title" },
        { title: "Ranmoki", singer: "ranmoki", className: "ranmoki-title" },
        { title: "Riku", singer: "riku", className: "riku-title" },
        { title: "Toti", singer: "toti", className: "toti-title" }
    ];

    return (
        <section className="page music-page">
            <div className="container">

                <h1 className="section-title"> Songs</h1>

                {sections.map((section) => (
                    <div
                        key={section.singer}
                        className="music-section"
                    >
                        <h2 className={section.className}>{section.title}</h2>
                        <div className="songs-grid">
                            {songs.filter(
                                (song) => song.singer === section.singer
                            ).map((song) => (
                                <SongCard
                                    key={song.id}
                                    song={song}
                                />
                            ))}

                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Music;