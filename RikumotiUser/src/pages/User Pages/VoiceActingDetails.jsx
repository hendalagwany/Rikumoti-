import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5228";

function VoiceActingDetails() {
    const { id } = useParams();

      const [voiceActingProject, setVoiceActingProject] = useState(null);
    
        useEffect(() => {
            fetch(`${API}/api/voiceacting/${id}`)
                .then(res => res.json())
                .then(data => setVoiceActingProject(data));
        }, [id]);

    if (!voiceActingProject) return <h1>voiceActingProjectacter not found</h1>;

    return (
        <div className="character-details">
            <div className="character-info">
                <h1>{voiceActingProject.character} </h1>
                <p><strong>VA:</strong> {voiceActingProject.member} </p>
                <br />
                <p><strong>Anime:</strong>{voiceActingProject.anime} </p>
                <br />
                <p><strong>Description:</strong>{voiceActingProject.description} </p>
                <br />
                <p><strong>Year:</strong>{voiceActingProject.year} </p>
                <br />
                <p><strong>Season:</strong>{voiceActingProject.season} </p>
                <br />
                <p><strong>Genre:</strong>{voiceActingProject.genre} </p>
                <br />
                <p><strong>Role Type:</strong>{voiceActingProject.roleType} </p>
                <br />
                <p><strong>Studio:</strong>{voiceActingProject.studio} </p>
                <br />
                <p><strong>Charactater Age:</strong>{voiceActingProject.characterAge} </p>
                <br />
                <p><strong>Character Color:</strong>{voiceActingProject.characterColor} </p>
                <br />
                <p><strong>Status:</strong>{voiceActingProject.status} </p>
                <br />
            </div>

            <div className="voiceacting-img">
                <img src={API +voiceActingProject.image} alt={voiceActingProject.name} />
            </div>
        </div>
    );
}

export default VoiceActingDetails;