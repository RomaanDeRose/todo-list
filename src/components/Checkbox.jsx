import { toast } from "react-hot-toast";

function Checkbox({ id, completed, completeTask }) {
  const handleComplete = () => {
    completeTask(id);
    !completed && toast.success("Tarea completada!");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative top-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleComplete}
          className="appearance-none w-5.5 h-5.5 bg-gray-300 rounded-sm p-1 cursor-pointer focus:outline-none"
        />
        <div
          className={`absolute inset-0 pointer-events-none w-5.5 h-5.5 p-0.5 ${
            completed ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-full bg-green-100 rounded-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-500"
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
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
