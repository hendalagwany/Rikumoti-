import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const API = "http://localhost:5228";

function SongCard({ song }) {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleplay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="song-card">

            <div
                className="song-cover"
                onClick={handleplay}
            >
                <img
                    src={API + song.cover}
                    alt={song.title}
                />

                <div className="song-overlay">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </div>
            </div>

            <h3>{song.title}</h3>

            <audio
                ref={audioRef}
                src={API + song.audio}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
}

export default SongCard;