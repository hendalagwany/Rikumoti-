import React from "react";
import { useState, useEffect } from "react";


const API = "http://localhost:5228";

function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/gallery`)
            .then(res => res.json())
            .then(data => setGalleryImages(data));
    }, []);

    return (
        <section className="page gallery-page">
            <div className="container">
                <h1 className="section-title">Gallery</h1>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (

                        <div key={img.id}
                            className="gallery-card"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={API + img.image} alt={img.title} />
                        </div>


                    ))}
                </div>

                {selectedIndex !== null && (
                    <div className="lightbox">
                        <button
                            className="close-btn"
                            onClick={() => setSelectedIndex(null)}
                        >
                            ✕
                        </button>

                        <button
                            className="prev-btn"
                            onClick={() => setSelectedIndex(
                                selectedIndex === 0
                                    ? galleryImages.length - 1
                                    : selectedIndex - 1
                            )
                            }
                        >
                            ←
                        </button>

                        <img
                            src={API + galleryImages[selectedIndex].image}
                            alt=""
                            className="lightbox-image"
                        />

                        <button
                            className="next-btn"
                            onClick={() => setSelectedIndex(
                                selectedIndex === galleryImages.length - 1
                                    ? 0
                                    : selectedIndex + 1
                            )
                            }
                        >
                            →
                        </button>

                    </div>
                )}
            </div>
        </section>
    );
}

export default Gallery;