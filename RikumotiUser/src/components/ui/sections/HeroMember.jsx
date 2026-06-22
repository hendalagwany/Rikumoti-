import React from "react";
import { Link } from "react-router-dom";

const instrumentIcons = {
    Piano: "🎹",
    Drums: "🥁",
    Guitar: "🎸",
    Bass: "🎸",
};


function HeroMember({ id, name, instrument, icon, className }) {
    
    return (
        <div className={`member-card-hero ${className}`}>
            <Link to={`/member/${id}`}>
                <h2 className="member-name-hero">{name}</h2>
            </Link>
            <div className="member-role-wrapper">
                <span className="member-line"></span>
                <span className="member-role">{instrumentIcons[instrument]}</span>
                <div className="member-icon">  {icon}</div>
            </div>
        </div>
    );
}

export default HeroMember;