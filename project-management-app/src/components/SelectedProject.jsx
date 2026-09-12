import { Task } from "./Task.jsx";
import { Button } from "./Button.jsx";
export function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks
}) {
  const formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="flex-1 mt-16 mx-4">
      <header className="pb-4 mb-4 border-b-2 border-stone-500">
        <div className="flex items-center justify-between ">
          <h2 className="text-xl font-bold text-stone-700 mb-4">
            {project.title}
          </h2>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="text-stone-500">Due Date: {formatedDate}</p>
        <p className="text-stone-600 mb-4">{project.description}</p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
