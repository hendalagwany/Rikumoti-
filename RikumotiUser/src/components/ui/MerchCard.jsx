import { Link } from "react-router-dom";

const API = "http://localhost:5228";

function MerchCard({ item }) {
    return (
        <Link 
        to={`/merch/${item.id}`}
        className="merch-card-link"
        >
        <div className="merch-card">
            <img 
            src={API + item.image}
            alt={item.name}
            />

            <div className="merch-content">
                <h3>{item.name} </h3>
            </div>
        </div>
        </Link>
    );
}

export default MerchCard;