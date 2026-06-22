import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import {
    FaUsers,
    FaNewspaper,
    FaImages,
    FaMusic,
    FaFilm,
    FaMicrophone,
    FaShoppingBag
} from "react-icons/fa";

const cards = [
    {
        title: "Members",
        description: "Manage group members",
        path: ROUTES.MEMBERS,
        icon: <FaUsers />
    },
    {
        title: "News",
        description: "Manage news articles",
        path: ROUTES.NEWS,
        icon: <FaNewspaper />
    },
    {
        title: "Gallery",
        description: "Manage gallery",
        path: ROUTES.GALLERY,
        icon: <FaImages />
    },
    {
        title: "Music",
        description: "Manage songs",
        path: ROUTES.MUSIC,
        icon: <FaMusic />
    },
    {
        title: "Anime",
        description: "Manage anime projects",
        path: ROUTES.ANIME,
        icon: <FaFilm />
    },
    {
        title: "Voice Acting",
        description: "Manage voice acting projects",
        path: ROUTES.VOICEACTING,
        icon: <FaMicrophone />
    },
    {
        title: "Merch",
        description: "Manage group goods",
        path: ROUTES.MERCH,
        icon: <FaShoppingBag />
    }
];

function Dashboard() {
    return (
        <div className="dashboard-page">
            <h1>Welcome Admin 👋</h1>

            <div className="dashboard-grid">

                {cards.map((card) => (
                    <Link to={card.path} key={card.path} className="card">
                        <span className="card-icon">
                            {card.icon} {" "}
                        </span>
                        <span>{card.title}</span>
                        <p>{card.description}</p>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;
