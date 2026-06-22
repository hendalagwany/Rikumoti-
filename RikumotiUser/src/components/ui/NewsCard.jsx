import { Link } from "react-router-dom";

const API = "http://localhost:5228";


function NewsCard({ news }) {

    return (
        <Link
            to={`/news/${news.id}`}
            className="news-card-link"
        >
            <div className="news-card">
                <img
                    src={API + news.image}
                    alt={news.title}
                />

                <div className="news-content">
                    <h3>{news.title}</h3>
                    <p>{news.date}</p>
                    <br />
                    <p>{news.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default NewsCard; 