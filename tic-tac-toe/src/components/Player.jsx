import{useState} from 'react';
export function Player({initialName,symbol, isActive, onChangeName}){
const [playerName, setPlayerName]=useState(initialName);

function handlePlayerName(event){
  setPlayerName(event.target.value);
}

  const [isEditing, setIsEditing] =useState(false);
function handleEditClick(){
  setIsEditing((editing)=>!editing);
  if(isEditing){
    onChangeName(symbol,playerName)
  }
}
let editablePlayerName=<span className='player-name'>{playerName}</span>;
if(isEditing){
  editablePlayerName=<input type='text' required Value={playerName} onChange={handlePlayerName}/>;
}
return(
        <li className={isActive? 'active':undefined}>
        <span className='player'>
          {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
      </li>
    );

}