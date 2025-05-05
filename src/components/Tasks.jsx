import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import Task from "./Task";

function Tasks({ category, ...props }) {
  const { tasks } = useContext(TasksContext);
  const [filterTasks, setfFilterTasks] = useState([]);

  useEffect(() => {
    let filteredTasks = [];
    category === "Todas"
      ? (filteredTasks = tasks)
      : (filteredTasks = tasks.filter((task) => task.category === category));

    setfFilterTasks(filteredTasks);
  }, [tasks, category]);

  console.log(category, filterTasks);

  return (
    <div className="w-[90%] max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
      {filterTasks.length === 0 && category === "Todas" && (
        <p className="text-2xl font-medium">No hay tareas guardadas :(</p>
      )}
      {filterTasks.length === 0 && category !== "Todas" && (
        <p className="text-2xl font-medium">
          No hay tareas guardadas en esta categoría
        </p>
      )}
      {filterTasks.length > 0 &&
        filterTasks.map((task) => (
          <Task key={task.id} task={task} {...props} />
        ))}
    </div>
  );
}

export default Tasks;
