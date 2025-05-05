import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { colorCategory } from "../utils/colorCategory";

function EditFormTask({ idEdit, setIdEdit }) {
  const { tasks, editTask } = useContext(TasksContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    editTask(idEdit, { title, category });

    setIdEdit(null);

    setTitle("");
    setCategory("Personal");
  };

  useEffect(() => {
    const taskToEdit = tasks.filter((task) => task.id === idEdit)[0];

    setTitle(taskToEdit.title);
    setCategory(taskToEdit.category);
  }, [tasks, idEdit]);

  return (
    <div className="absolute inset-0 w-full h-screen flex justify-center items-center flex-col gap-2 bg-[#181818]/10 backdrop-blur-xl">
      <h2 className="text-5xl font-extrabold text-blue-500 text-center mb-12">
        Editando...
      </h2>
      <form onSubmit={handleSubmitEdit} className="w-sm">
        <div className="w-full flex gap-2">
          <div className="relative w-[60%] bg-[#181818] flex justify-between items-center gap-2 px-4 py-3.5 rounded-lg border-2 border-[#dddddd]/10 shadow-md shadow-black/30 overflow-hidden">
            <div
              className={`absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full ${colorCategory(
                category
              )}`}
            ></div>
            <input
              type="text"
              placeholder="Nuevo título..."
              className="w-full pb-0.5 pl-0.5 border-b-2 border-white focus:outline-none"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="hidden"></button>
          </div>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[40%] bg-blue-500 text-white-500 font-medium rounded-md px-0.5 py-3.5 cursor-pointer focus:outline-none"
          >
            <option value="Personal">Personal</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Estudios">Estudios</option>
            <option value="Deporte">Deporte</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Otra">Otra</option>
          </select>
        </div>
        <div className="w-full h-12 flex gap-[4%] text-lg mt-6">
          <button
            type="button"
            className="w-[48%] bg-red-500 rounded-md cursor-pointer transition-shadow hover:shadow-lg hover:shadow-red-500/30"
            onClick={() => setIdEdit(null)}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-[48%] bg-blue-500 rounded-md cursor-pointer transition-shadow hover:shadow-lg hover:shadow-blue-500/30"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFormTask;
