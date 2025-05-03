import { useContext, useEffect, useState } from "react";
import { TasksContext } from "./context/TasksContext";
import { Toaster } from "react-hot-toast";
import { LuPlus } from "react-icons/lu";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const { tasks, addTask, editTask } = useContext(TasksContext);
  const [name, setName] = useState("");
  const [idEdit, setIdEdit] = useState(null);
  const [nameEdit, setNameEdit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: Math.floor(Math.random() * 1000),
      name: name,
      completed: false,
    });

    setName("");
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    editTask(idEdit, { name: nameEdit });

    setIdEdit(null);
    setNameEdit("");
  };

  useEffect(() => {
    if (idEdit) {
      const name = tasks.filter((task) => task.id === idEdit)[0].name;
      setNameEdit(name);
    } else {
      setNameEdit("");
    }
  }, [tasks, idEdit]);

  return (
    <div className="w-full h-screen text-white pt-10">
      <h1 className="text-blue-500 text-6xl font-extrabold text-center">
        Todo List!
      </h1>
      <p className="text-white/90 text-lg mt-1 text-center">
        Agenda todas tus tareas!
      </p>
      <div className="w-[90%] max-w-3xl mx-auto mt-18 mb-8">
        <div className="flex justify-between">
          <button className="bg-blue-500 p-2 rounded-md cursor-pointer transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25">
            <LuPlus size={34} />
          </button>
          <div>
            <label htmlFor="" className="font-medium text-lg mr-2">
              Filtrar por:
            </label>
            <select
              name="category"
              className="h-full text-blue-500 font-medium border-2 border-blue-500 rounded-md px-0.5 cursor-pointer focus:outline-none"
            >
              <option value="Todas">Todas</option>
              <option value="Personal">Personal</option>
              <option value="Trabajo">Trabajo</option>
              <option value="Estudio">Estudio</option>
              <option value="Deporte">Deporte</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Otra">Otra</option>
            </select>
          </div>
        </div>
      </div>
      {/* <p className="text-orange-400 text-2xl font-ligth my-2">
        Total de tareas:{" "}
        <span className="text-3xl font-extrabold">{totalTasks}</span>
      </p> */}
      <Tasks idEdit={idEdit} setIdEdit={setIdEdit} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título..."
          className="border-2 border-amber-600 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {idEdit && (
        <form onSubmit={handleSubmitEdit}>
          <input
            type="text"
            placeholder="Nuevo título..."
            className="border-2 border-rose-600 focus:outline-none"
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          />
        </form>
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
