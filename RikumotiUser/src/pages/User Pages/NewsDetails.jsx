import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5228";


function NewsDetails() {
    const { id } = useParams();

    const [newsItem, setNewsItem] = useState(null);
  
      useEffect(() => {
          fetch(`${API}/api/news/${id}`)
              .then(res => res.json())
              .then(data => setNewsItem(data));
      }, [id]);

    if (!newsItem) return <h1>News not found</h1>;

    return (
        <div className="news-details">
            <div className="news-info">
                <h1>{newsItem.title} </h1>
                <br />
                <p><strong>Date:</strong>{newsItem.date} </p>
                <br />
                <p><strong>Description:</strong>{newsItem.description} </p>
                <br />
                <p><strong>Category:</strong>{newsItem.category} </p>
                <br />
                <p><strong>Member:</strong>{newsItem.member} </p>
                <br />
                <p><strong>author:</strong>{newsItem.author} </p>
                <br />
                <p><strong>Tags:</strong>{newsItem.tags} </p>
                <br />
            </div>

            <div className="news-img">
                <img src={API + newsItem.image} alt={newsItem.name} />
            </div>
        </div>
    );
}

export default NewsDetails;