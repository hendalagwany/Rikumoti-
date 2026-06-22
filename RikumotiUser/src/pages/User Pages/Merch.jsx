import React from "react";
import { useEffect, useState } from "react";
import MerchCard from "../../components/ui/MerchCard";

const API = "http://localhost:5228";


function Merch() {

    const [merch, setMerch] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/merch`)
            .then(res => res.json())
            .then(data => setMerch(data));
    }, []);

    return (
        <section className="page merch-page">
            <div className="container">
                <h1>Merch</h1>

                <div className="merch-grid">
                    {merch.map((item) => (
                        <MerchCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Merch;