import React from "react";
import { useEffect, useState } from "react";
import AnimeCard from "../../components/ui/AnimeCard";

const API = "http://localhost:5228";


function Anime() {

    const [anime, setAnime] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/anime`)
            .then(res => res.json())
            .then(data => setAnime(data));
    }, []);

    return (
        <section className="page anime-page">
            <div className="container">
                <h1 className="section-title">Anime</h1>

                <div className="anime-page-grid">
                    {anime.map((anime) => (
                        <AnimeCard
                            key={anime.id}
                            anime={anime}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Anime;