import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function PageHeader({ title, description, buttonText }) {
    return (
        <div className="page-header">
            <div>
                <h1>{title}</h1>

                {description && (<p>{description}</p>)}
            </div>

        </div>
    );
}

export default PageHeader;