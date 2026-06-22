import { NavLink, Outlet } from "react-router-dom";

import {
    FaUsers,
    FaNewspaper,
    FaMusic,
    FaImages,
    FaFilm,
    FaMicrophone,
    FaShoppingBag,
    FaHome
} from "react-icons/fa";

function AdminLayout() {
    const menuItems = [
        {
            path: "/admin",
            label: "Dashboard",
            icon: <FaHome />
        },
        {
            path: "/admin/members",
            label: "Members",
            icon: <FaUsers />
        },
        {
            path: "/admin/news",
            label: "News",
            icon: <FaNewspaper />
        },
        {
            path: "/admin/music",
            label: "Music",
            icon: <FaMusic />
        },
        {
            path: "/admin/gallery",
            label: "Gallery",
            icon: <FaImages />
        },
        {
            path: "/admin/anime",
            label: "Anime",
            icon: <FaFilm />
        },
        {
            path: "/admin/voiceacting",
            label: "Voice Acting",
            icon: <FaMicrophone />
        },
        {
            path: "/admin/merch",
            label: "Merch",
            icon: <FaShoppingBag />
        }
    ];

    return (
        <div className="admin-container">

            <aside className="admin-aside">

                <div className="admin-logo">
                    <h2>🎛 Admin Panel</h2>
                </div>

                <nav>
                    <ul className="admin-menu">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end={item.path === "/admin"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "admin-link active"
                                            : "admin-link"
                                    }
                                >
                                    <span className="menu-icon">
                                        {item.icon}
                                    </span>

                                    <span className="menu-text">
                                        {item.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

            </aside>

            <main className="admin-content">
                <Outlet />
            </main>

        </div>
    );
}

export default AdminLayout;