export function Input({ textarea, label, ...props }) {
  const classes = "w-full rounded-sm bg-gray-200 border-stone-400 p-1 border-b-2 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-2 my-4">
      <label className="text-sm font-bold uppercase text-stone-600">{label}</label>
      {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props} />}
    </p>
  );
}
