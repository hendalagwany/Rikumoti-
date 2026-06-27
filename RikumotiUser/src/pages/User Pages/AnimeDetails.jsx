import { data, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5228";

function AnimeDetails() {
    const { id } = useParams();
    const [animeProject, setAnimeProject] = useState(null);

    useEffect(() => {
        fetch(`${API}/api/anime/${id}`)
            .then(res => res.json())
            .then(data => setAnimeProject(data));
    }, [id]);

    if (!animeProject) return <h1>Anime not found</h1>;

    return (
        <div className="anime-details">
            <div className="anime-info">
                <h1>{animeProject.title} </h1>
                <br />
                <p><strong>Role:</strong> {animeProject.role} </p>
                <br />
                <p><strong>Year:</strong>{animeProject.year} </p>
                <br />
                <p><strong>Description:</strong>{animeProject.description} </p>
                <br />
                <p><strong>Episodes:</strong>{animeProject.episodes} </p>
                <br />
                <p><strong>Genre:</strong>{animeProject.genre} </p>
                <br />
                <p><strong>Studio:</strong>{animeProject.studio} </p>
                <br />
                <p><strong>Contribution Type:</strong>{animeProject.contributionType} </p>
                <br />
                <p><strong>Members Involved:</strong>{animeProject.membersInvolved} </p>
                <br />
                <p><strong>Main Member:</strong>{animeProject.mainMember} </p>
                <br />
                <p><strong>Popularity Rank:</strong>{animeProject.popularityRank} </p>
                <br />
                <p><strong>Story:</strong>{animeProject.story} </p>
                <br />
            </div>

            <div className="anime-img">
                <img src={API + animeProject.image} alt={animeProject.name} />
            </div>
        </div>
    );
}

export default AnimeDetails;