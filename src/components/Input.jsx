import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  const styleClasses =
    "w-full p-1 border-b-2 rouinded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-blod uppercase tex-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className={styleClasses} {...props} />
      ) : (
        <input ref={ref} className={styleClasses} {...props} />
      )}
    </p>
  );
});

export default Input;
