import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "#2563eb" : "#274151",
        TextDecoration: "none",
        fontWeight: isActive ? "700" : "500",
    });
    return (
        <header
            style={{
                padding: "20px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e5e73b",
                backgroundColor: "#ffffff",
            }}
        >
            <h2>Mini Task Manager</h2>

            <nav
                style={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                <NavLink to="/about" style={navLinkStyle}>About</NavLink>
            </nav>
        </header>
    );

};
export default Header;