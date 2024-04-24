import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProjectForm({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textArea={true} />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
      <Modal ref={modalRef} buttonTitle="Close">
        <h2 className="text-xl font-cold text-stone-5000 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oops. T.T</p>
        <p className="text-stone-400 mb-4">It seems like something is wrong</p>
        <p className="text-stone-400 mb-4">Please, make sure to enter valid values to the inputs.</p>
      </Modal>
    </>
  );
}
