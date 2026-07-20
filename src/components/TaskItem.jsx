const TaskItem = ({
    task,
    onToggleTask,
    onDeleteTask,
}) => {
    return (
        <li
            style={{
                padding: "16px",
                marginBottom: "12px",
                border: "1px solid #d1d5db",
                borderRadious: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    fontWeight: 500,
                }}
            >
                {task.title}
            </span>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <button
                    onClick={() => onToggleTask(task.id)}
                >
                    {task.completed
                        ? "Undo"
                        : "Completed"}
                </button>
                <button
                    onClick={() => onDeleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};
export default TaskItem;