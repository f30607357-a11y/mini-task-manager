import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "#2563eb" : "#374151",
        textDecoration: "none",
        fontWeight: isActive ? "700" : "500",
    });

    return (
        <header
            style={{
                padding: "20px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
            }}
        >
            <h2>Mini Task Manager</h2>

            <nav
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                <NavLink to="/" style={navLinkStyle}>
                    Home
                </NavLink>

                <NavLink to="/api-tasks" style={navLinkStyle}>
                    API Tasks
                </NavLink>

                <NavLink to="/about" style={navLinkStyle}>
                    About
                </NavLink>

                <ThemeToggle />
            </nav>
        </header>
    );
};

export default Header;