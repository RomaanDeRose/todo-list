import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Checkbox from "./Checkbox";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";

function TaskContainer({ task, children, idEdit, setIdEdit }) {
  const { removeTask, completeTask } = useContext(TasksContext);

  const handleRemove = (id) => {
    removeTask(id);
    toast.error("Tarea eliminada");
  };

  return (
    <div
      className={`relative w-62 ${
        task.completed ? "bg-white/25" : "bg-[#181818]"
      } flex justify-between items-center gap-2 px-4 py-3.5 rounded-lg border-2 border-[#dddddd]/10 shadow-md shadow-black/30 overflow-hidden ${
        task.id === idEdit && "scale-105"
      }`}
    >
      {children}
      <div className="flex gap-2.5">
        <Checkbox
          id={task.id}
          completed={task.completed}
          completeTask={completeTask}
        />
        <button
          className={`bg-indigo-200 text-white p-2 rounded grayscale-50 cursor-pointer  transition-all hover:grayscale-0 ${
            task.completed && "hidden"
          }`}
          onClick={() => setIdEdit(task.id)}
        >
          <FaEdit size={13} className="text-indigo-600" />
        </button>
        <button
          className={`bg-red-200 text-white p-2 rounded grayscale-45 cursor-pointer transition-all hover:grayscale-0`}
          onClick={() => handleRemove(task.id)}
          disabled={task.id === idEdit ? true : false}
        >
          <FaTrash size={13} className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TaskContainer;
