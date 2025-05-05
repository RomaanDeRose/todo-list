import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import taskPoster from "../assets/task-poster.png";

function ViewCompletedTask() {
  const { tasksCompleted } = useContext(TasksContext);

  console.log(tasksCompleted);
  return (
    <div
      className="hidden w-64 h-64 absolute -left-4 -top-14 bg-cover bg-center bg-no-repeat md:block md:left-0 lg:left-15 xl:left-40"
      style={{ backgroundImage: `url(${taskPoster})` }}
    >
      <div className="absolute w-44 h-18 top-24 right-10 p-1 text-[#101010] overflow-y-scroll">
        {tasksCompleted.length === 0 && <p>Completa tus tareas!</p>}
        {tasksCompleted.length > 0 &&
          tasksCompleted.map((taskCompleted) => (
            <div
              key={taskCompleted.id}
              className="w-full flex items-center gap-1.5 hover:bg-gray-200 p-0.5 py-1 rounded"
            >
              <div className="size-4.5 flex items-center bg-green-200 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="w-28 truncate" title={taskCompleted.title}>
                {taskCompleted.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ViewCompletedTask;
