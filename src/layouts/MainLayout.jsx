import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
    const { isDark } = useTheme();

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                color: isDark ? "#ffffff" : "#111827",
                transition: "0.3s",
            }}
        >
            <Header />

            <main
                style={{
                    padding: "40px",
                }}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;