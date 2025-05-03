import { useEffect, useReducer } from "react";
import { createContext } from "react";

const TasksContext = createContext();

function TasksContextProvider({ children }) {
  function tasksReducer(state, action) {
    switch (action.type) {
      case "ADD TASK":
        return [...state, action.payload];
      case "REMOVE TASK":
        return state.filter((task) => task.id !== action.payload);
      case "EDIT TASK":
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, ...action.payload.task };
          }
          return task;
        });
      case "COMPLETE TASK":
        return state.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        });
      default:
        return state;
    }
  }

  const allTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, dispatch] = useReducer(tasksReducer, allTasks);

  const addTask = (task) => {
    dispatch({ type: "ADD TASK", payload: task });
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE TASK", payload: id });
  };

  const editTask = (id, task) => {
    dispatch({ type: "EDIT TASK", payload: { id, task } });
  };

  const completeTask = (id) => {
    dispatch({ type: "COMPLETE TASK", payload: id });
  };

  const totalTasks = tasks.length;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  return (
    <TasksContext.Provider
      value={{ tasks, totalTasks, addTask, removeTask, editTask, completeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext };
export default TasksContextProvider;
