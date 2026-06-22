import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Rikumoti⋆</h1>
                <span>✧-Joy Quartet-✧</span>
                <p>-A Symphony of Smiles and Comfort-</p>
            </div>

            <div className="navbar-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink>
                <NavLink to="/members" className={({ isActive }) => isActive ? "active" : ""}>MEMBERS</NavLink>
                <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>NEWS</NavLink>
                <NavLink to="/music" className={({ isActive }) => isActive ? "active" : ""}>MUSIC</NavLink>
                <NavLink to="/voiceacting" className={({ isActive }) => isActive ? "active" : ""}>VOICE ACTING</NavLink>
                <NavLink to="/anime" className={({ isActive }) => isActive ? "active" : ""}>ANIME</NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>GALLERY</NavLink>
                <NavLink to="/merch" className={({ isActive }) => isActive ? "active" : ""}>MERCH</NavLink>
                <NavLink to="/fanclub" className={({ isActive }) => isActive ? "active" : ""}>FANCLUB</NavLink>
            </div>

            <div className="nav-icons">
                <span>🛒</span>
                <span>✉</span>
                <span>🌐</span>
            </div>

            <div className="fanclub-badge">
                <h3>⋆ Rikumoti ⋆</h3>
                <p>⋆Offical Fanclub⋆</p>
                <span>⋆Join Us!⋆</span>
            </div>
        </nav>
    );
}

export default Navbar;