import{useState} from 'react';
import {Player} from './components/Player.jsx'
import {GameBoard} from './components/GameBoard.jsx'
import {Log} from './components/Log.jsx'
import {WINNING_COMBINATIONS} from './components/winning-combinations.js'
import {GameOver} from './components/GameOver.jsx'


function deriveActivePlayer(gameTurns){
  let activePlayer='X';
  if (gameTurns.length>0 && gameTurns[0].player==='X') {
    activePlayer='O'; 
  }
  return activePlayer;
}

function deriveWinner(gameBoard, players){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol &&
      firstSquareSymbol==secondSquareSymbol &&
      secondSquareSymbol==thirdSquareSymbol
    ){
      winner=players[firstSquareSymbol];
    }
  }
  return winner;
}

const initialGameBoard=[
  [null, null, null],[null, null, null],[null, null, null]
]

function deriveGameBoard(gameTurns){
  let gameBoard=[...initialGameBoard.map(array=>[...array])];
  for(const turn of gameTurns){
      const{square, player}=turn;
      const{col,row}=square;

      gameBoard[row][col]=player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers]=useState({
    X:'Player 1',
    O:'Player 2'
  })
  const[gameTurns, setGameTurns]=useState([]);
  const gameBoard=deriveGameBoard(gameTurns);
    function handleRestart(){
      setGameTurns([]);
    }
    function handlePlayerNameChange(symbol,newName){
      setPlayers(prevPlayers=>{
        return{
          ...prevPlayers,
          [symbol]:newName
        }
      })

    }
  const winner=deriveWinner(gameBoard,players)
  const hasDraw=gameTurns.length===9 && !winner;
function handleSelectSquare(rowIndex,colIndex){
  setGameTurns(prevTurns=>{
    let currentPlayer=deriveActivePlayer(prevTurns);
 
    const updatedTurns=[{square:{row:rowIndex, col:colIndex},player:currentPlayer},...prevTurns];
    return updatedTurns;
  });
  
}
  return (
<main>
  <div id="game-container">
    <ol id='players' className='highlight-player'>
    <Player initialName='player 1' symbol='X' isActive={deriveActivePlayer(gameTurns)==='X'}onChangeName={handlePlayerNameChange}/>
    <Player initialName='player 2' symbol='O' isActive={deriveActivePlayer(gameTurns)==='O'}onChangeName={handlePlayerNameChange}/>

      </ol> 
      {(winner || hasDraw) && <GameOver restart={handleRestart} winner={winner}/>}
     <GameBoard onSelectSquare={handleSelectSquare} 
      board={gameBoard}/>

  </div>
 <Log turns={gameTurns}/>
</main>
  );
}

export default App
