import { useRef } from "react";
export function Answers({answers,selectedAnswer,isAnswered,onSelect}){
    const shuffledAnswers=useRef();
     if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
    return(
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            let cssClass = "";
            const isSelected=answer == selectedAnswer;
            if (isAnswered=="answered" && isSelected) {
              cssClass = "selected";
            }
            if ((isAnswered==="correct"|| isAnswered==='wrong') && isSelected) {
              cssClass =isAnswered;
            }
         
            return (
              <li key={answer} className="answer">
              <button onClick={() => onSelect(answer) } className={cssClass} disabled={isAnswered!==''} >
                {answer}
              </button>
            </li>)
            
})}
        </ul>
    )
}