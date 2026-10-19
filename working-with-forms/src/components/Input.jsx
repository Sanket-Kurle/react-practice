export function Input({ lable, id,error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{lable}</label>
      <input {...props} />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
