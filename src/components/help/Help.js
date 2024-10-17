import "./help.css";
export default function Help({ setHelp }) {
  return (
    <div className="helpMain">
      <img
        className="cross"
        onClick={() => setHelp(false)}
        src={require("../../assests/crossIcon.png")}
      />
      <h2 className="helpHeader">Help</h2>
      <p className="helpText">
        The Maze is a simple game in which there is an automated AI that chooses
        its path in the game and follows it.
      </p>
      <p className="helpTexts">
        you move around the maze using the arrow keys on the keyboard.
      </p>
      <p className="helpTexts">
        The Start button starts a new game with different start or goal
        positions.
      </p>
      <p className="helpTexts">
        The Restart button starts a new game with the same start and goal
        position.
      </p>
      <p className="helpTexts">
        The Difficulty button toggles between easy and hard, changes the game to
        hard or easy.
      </p>
    </div>
  );
}
