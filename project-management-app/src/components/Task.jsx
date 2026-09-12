import { AddNewTask } from "./AddNewTask";
import { Button } from "./Button";
export function Task({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800">Tasks</h2>
      <AddNewTask onAdd={onAdd} />
      {tasks?.length === 0 && <p>This Project Does Not Have Any Task Yet</p>}
      {tasks?.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 mx-4">
              <span>{task.text}</span>{" "}
              <Button onClick={()=>onDelete(task.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
