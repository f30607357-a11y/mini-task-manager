import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;