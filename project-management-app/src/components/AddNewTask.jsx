import { Button } from "./Button"
import { useState } from "react"
export function AddNewTask({onAdd}){
    const [enteredTask, setEnteredTask] =useState("");

    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
         if (enteredTask.trim() === "") return;
        onAdd(enteredTask);
        setEnteredTask('')
    }
    return(
        <div className="flex w-full items-center justify-between gap-4">
            <input type="text" value={enteredTask} className="border-stone-800 bg-slate-200 rounded-md " onChange={handleChange}/>
            <Button onClick={handleClick}>Add Task</Button>
        </div>
    )
}
