import { useRef } from "react";

const TaskForm = ({ onAddTask }) => {
    const inputRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();

        const title = inputRef.current.value.trim();
        if (!title) return;

        onAddTask(title);
        inputRef.current.value = "";
        inputRef.current.focus();
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                gap: "12px",
                margin: "24px 0",
            }}

        >
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a task..."
                style={{
                    flex: 1,
                    padding: "10px",
                    fontSize: "16px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                Add Task

            </button>
        </form >
    );
};
export default TaskForm; 