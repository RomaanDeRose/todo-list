import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { LuPlus } from "react-icons/lu";
import Tasks from "./components/Tasks";
import FormTask from "./components/FormTask";
import ViewCompletedTask from "./components/ViewCompletedTasks";
import EditFormTask from "./components/EditFormTask";

function App() {
  const [categoryView, setCategoryView] = useState("Todas");
  const [openForm, setOpenForm] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  return (
    <div className="relative w-full h-screen text-white pt-10">
      <ViewCompletedTask />
      <h1 className="text-blue-500 text-6xl font-extrabold text-center">
        Todo List!
      </h1>
      <p className="text-white/90 text-lg mt-1 text-center">
        Agenda todas tus tareas!
      </p>
      <div className="w-[90%] max-w-3xl mx-auto mt-18 mb-8">
        <div className="flex justify-between">
          <button
            className="bg-blue-500 p-2 rounded-md cursor-pointer transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
            onClick={() => setOpenForm(true)}
          >
            <LuPlus size={34} />
          </button>
          <div>
            <label htmlFor="" className="font-medium text-lg mr-2">
              Filtrar por:
            </label>
            <select
              name="category"
              value={categoryView}
              onChange={(e) => setCategoryView(e.target.value)}
              className="h-full text-blue-500 font-medium border-2 border-blue-500 rounded-md px-0.5 cursor-pointer focus:outline-none"
            >
              <option value="Todas">Todas</option>
              <option value="Personal">Personal</option>
              <option value="Trabajo">Trabajo</option>
              <option value="Estudios">Estudios</option>
              <option value="Deporte">Deporte</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Otra">Otra</option>
            </select>
          </div>
        </div>
      </div>
      <Tasks category={categoryView} idEdit={idEdit} setIdEdit={setIdEdit} />
      {openForm && <FormTask open={setOpenForm} />}
      {idEdit && <EditFormTask idEdit={idEdit} setIdEdit={setIdEdit} />}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
