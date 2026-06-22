import VoiceCard from "../../components/ui/VoiceCard";
import { useEffect, useState } from "react";

const API = "http://localhost:5228";

function VoiceActing() {

    const [char, setChar] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/voiceacting`)
            .then(res => res.json())
            .then(data => setChar(data));
    }, []);

    return (
        <section className="page voice-acting-page">
            <div className="container">
                <h1 className="section-title">Voice Acting </h1>

                <div className="voice-grid">
                    {char.map((project) => (
                        <VoiceCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VoiceActing;