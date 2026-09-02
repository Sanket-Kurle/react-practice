export function GameOver({winner, restart}){
return (
    <div id='game-over'>
        <h2>Game Over</h2>
        {winner && <p>{winner}, WON 🏆</p>}
        {!winner && <p>It&apos; A Draw</p>}
        <p>
            <button onClick={restart}>Rematch</button>
            </p>
    </div>
)
}