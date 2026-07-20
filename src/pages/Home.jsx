import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../services/api";

const Home = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Learn React",
            completed: false,
        },
        {
            id: 2,
            title: "Practice useState",
            completed: true,
        },
    ]);
    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            ));
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <h1>Mini Task Manager</h1>

            <TaskForm onAddTask={addTask} />

            <TaskList tasks={tasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
            />
        </>
    );
};

export default Home;