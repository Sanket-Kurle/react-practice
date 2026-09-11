import { Input } from "./Input.jsx";
import { useRef } from "react";
import { Modal } from "./Modal.jsx";

export function NewProject({ onAddProject }) {
  const modal = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const enteredDueDateRef = useRef();

  function save() {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDueDate = enteredDueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please enter valid input.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li><button className="px-6 py-2 text-stone-800 hover:text-stone-950">Cancel</button></li>
          <li><button className="px-6 py-2 bg-stone-800 text-stone-200 hover:bg-stone-950 rounded-md" onClick={save}>Save</button></li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={titleInputRef} />
          <Input label="Description" textarea ref={descriptionInputRef} />
          <Input label="Due Date" type="date" ref={enteredDueDateRef} />
        </div>
      </div>
    </>
  );
}
