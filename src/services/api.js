export const fetchTasks = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=7"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch tasks.");
    }

    const data = await response.json();
    return data.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.completed,
    }));
};