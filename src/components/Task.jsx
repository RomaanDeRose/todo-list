import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Checkbox from "./Checkbox";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

function Task({ task, idEdit, setIdEdit }) {
  const { removeTask, completeTask } = useContext(TasksContext);

  return (
    <div
      className={`relative w-62 bg-[#181818] flex justify-between items-center gap-2 px-4 py-3.5 rounded-lg border-2 border-[#dddddd]/10 shadow-md shadow-black/30 overflow-hidden ${
        task.id === idEdit && "scale-105"
      }`}
    >
      <div className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-amber-300 "></div>
      <p className="mr-4">{task.name}</p>
      <div className="flex gap-2.5">
        <Checkbox
          id={task.id}
          completed={task.completed}
          completeTask={completeTask}
        />
        <button
          className={`bg-indigo-200 text-white p-2 rounded cursor-pointer ${
            task.id === idEdit ? "grayscale-0" : "grayscale-45"
          } transition-all hover:grayscale-0 `}
          onClick={() => setIdEdit(task.id)}
        >
          <FaEdit size={13} className="text-indigo-600" />
        </button>
        <button
          className={`bg-red-200 text-white p-2 rounded ${
            task.id !== idEdit ? "cursor-pointer" : "cursor-no-drop"
          } ${
            task.id === idEdit && "grayscale-100 hover:grayscale-100"
          } grayscale-45 transition-all hover:grayscale-0`}
          onClick={() => removeTask(task.id)}
          disabled={task.id === idEdit ? true : false}
        >
          <FaTrash size={13} className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default Task;
