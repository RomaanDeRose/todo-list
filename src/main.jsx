import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TasksContextProvider from "./context/TasksContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </StrictMode>
);
