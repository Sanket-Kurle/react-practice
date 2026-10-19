import { useActionState, use } from "react";
import {OpinionsContext} from '../store/opinions-context.jsx'
import { Submit } from "./Submit.jsx";

function isNotEmpty(value) {
  return value.trim() !== "";
}

export function NewOpinion() {
  const{addOpinion}=use(OpinionsContext)
  async function submitOpinionAction(prevStateData, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const opinion = formData.get("body");
    let errors = [];

    if (!isNotEmpty(userName) || !isNotEmpty(title) || !isNotEmpty(opinion)) {
      errors.push("Any of These Fields Can't Be Empty");
    }
    if(errors.length>0){
      return {errors,enteredValues:{
        title,
        opinion,
        userName
      }}
    }
    if(errors.length===0){
      await addOpinion({
        title,
        body:opinion,
        userName
      })
      return {errors:null}
    }
  }

  const [formState, formAction]=useActionState(submitOpinionAction,{errors:null})
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"  defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        {formState.errors && (
        <ul className="errors">
          {formState.errors.map((errors) => (
            <li key={errors}>{errors}</li>
          ))}
        </ul>
      )}

        <Submit/>
      </form>
    </div>
  );
}
