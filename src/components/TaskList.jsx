import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    onToggleTask,
    onDeleteTask,
}) => {
    if (tasks.length === 0) {
        return <p>No tasks available.</p>
    }
    return (
        <ul
            style={{
                listStyle: "none",
                padding: 0,
                marginTop: "24px",
            }}
        >
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                />

            ))}
        </ul>
    );
};
export default TaskList;
