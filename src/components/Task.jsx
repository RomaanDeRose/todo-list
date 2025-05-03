import TaskContainer from "./TaskContainer";

function Task({ task, ...props }) {
  return (
    <TaskContainer task={task} {...props}>
      <p className="mr-4">{task.title}</p>
    </TaskContainer>
  );
}

export default Task;
