import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SongCard from "../../components/ui/SongCard";

const API = "http://localhost:5228";

function SongDetails() {
    const { id } = useParams();
    const [song, setSong] = useState(null);

    const formatDuration = (duration) => {
        if (!duration) return "-";

        return duration.slice(0, 5);
    };

    
    useEffect(() => {
        fetch(`${API}/api/music/${id}`)
            .then(res => res.json())
            .then(data => setSong(data));
    }, [id]);

    if (!song) return <h1>Song not found</h1>;

    return (
        <div className="anime-details">
            <div className="anime-info">
                <h1>{song.title} </h1>
                <br />
                <p><strong>Singer:</strong> {song.singer} </p>
                <br />
                <p><strong>Album:</strong> {song.album} </p>
                <br />
                <p><strong>Genre:</strong> {song.genre} </p>
                <br />
                <p><strong>Release Date:</strong> {new Date(song.releaseDate).toLocaleDateString("en-CA")} </p>
                <br />
                <p><strong>Duration:</strong> {formatDuration(song.duration)} </p>
                <br />
                <p><strong>Anime:</strong>  {song.anime} </p>
                <br />
                <p><strong>Role:</strong> {song.role} </p>
                <br />
            </div>

            <div className="anime-img">
                <SongCard
                    key={song.id}
                    song={song}
                />
            </div>
        </div>
    );
}

export default SongDetails;