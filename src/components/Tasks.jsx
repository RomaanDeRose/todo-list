import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Checkbox from "./Checkbox";
import Task from "./Task";

function Tasks({ ...props }) {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="w-[90%] max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
      {tasks.length === 0 && (
        <p className="text-2xl font-medium">No hay tareas guardadas :(</p>
      )}
      {tasks.length > 0 &&
        tasks.map((task) => <Task key={task.id} task={task} {...props} />)}
    </div>
  );
}

export default Tasks;
