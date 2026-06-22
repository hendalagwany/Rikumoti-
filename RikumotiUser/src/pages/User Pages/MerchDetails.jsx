import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5228";

function MerchDetails() {
    const { id } = useParams();
    const [merchItem, setMerchItem] = useState(null);
  
      useEffect(() => {
          fetch(`${API}/api/merch/${id}`)
              .then(res => res.json())
              .then(data => setMerchItem(data));
      }, [id]);

    if (!merchItem) return <h1>Merch not found</h1>;

    return (
        <div className="merch-details">
            <div className="merch-info">
                <h1>{merchItem.name} </h1>
                <br />
                <p><strong>Category:</strong>{merchItem.category} </p>
                <br />
                <p><strong>Price:</strong>{merchItem.price} </p>
                <br />
                <p><strong>Stock:</strong>{merchItem.stock} </p>
                <br />
                <p><strong>Release Date:</strong>{merchItem.releaseDate} </p>
                <br />
                <p><strong>Description:</strong>{merchItem.description} </p>
                <br />
            </div>

            <div className="merch-img">
                <img src={API + merchItem.image} alt={merchItem.name} />
            </div>
        </div>
    );
}

export default MerchDetails;