import { colorCategory } from "../utils/colorCategory";
import TaskContainer from "./TaskContainer";

function Task({ task, ...props }) {
  return (
    <TaskContainer task={task} {...props}>
      <div
        className={`absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full ${colorCategory(
          task.category
        )}`}
      ></div>
      <p
        className={`w-22 ${task.completed && "line-through"} truncate mr-4`}
        title={task.title}
      >
        {task.title}
      </p>
    </TaskContainer>
  );
}

export default Task;
