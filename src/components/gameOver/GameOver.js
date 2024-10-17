import "./gameOver.css";

export default function GameOver({ winner }) {
  return (
    <div className="gameoverMainContainer">
      {!(winner === "difficulty") && <h1 className="textDeco">Game Over</h1>}
      {winner === "agent" && <h3 className="otherText">You Lose</h3>}
      {winner === "player" && <h3 className="otherText">You Win</h3>}
      {winner === "draw" && <h3 className="otherText">Draw</h3>}
      {winner === "difficulty" && (
        <h3 className="otherTex">
          You have changed the level press start to continue
        </h3>
      )}
    </div>
  );
}
