import { Link } from "react-router-dom";

const API = "http://localhost:5228";

function VoiceCard({ project }) {
    return (
        <Link
            to={`/voiceacting/${project.id}`}
            className="voice-acting-link"
        >
            <div className="voice-card">
                <img
                    src={API + project.image}
                    alt={project.character}
                />
                <div className="voice-content">
                    <h3>{project.character}</h3>
                    <p><strong>Anime:</strong>{project.anime}</p>
                    <p><strong>Voice:</strong>{project.member}</p>
                    <p>{project.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default VoiceCard;