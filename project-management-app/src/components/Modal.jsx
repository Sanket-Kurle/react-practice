import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";

export function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="px-6 py-2 bg-stone-800 text-stone-200 hover:bg-stone-950 rounded-md">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
