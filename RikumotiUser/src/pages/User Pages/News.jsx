import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "../../components/ui/NewsCard";


const API = "http://localhost:5228";

function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/news`)
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    return (
        <section className="page news-page">
            <div className="container">
                <h1 className="section-title">News</h1>

                <div className="news-grid">
                    {news.map((news) => (
                        <NewsCard
                            key={news.id}
                            news={news}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News; 