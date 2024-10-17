// the start position of the app
import "./app.css";
import Maze from "../components/maze/Maze";
import startEndLocations from "../utils/startEndLocations";
import mazes from "../utils/mazes";
import bredthFirstSearch from "../utils/bredthFirstSearch";

function App() {
  const [level, setLevel] = useState(mazes.easy);
  const [start, setstart] = useState(0);
  const [path, setPath] = useState(
    bredthFirstSearch(
      startEndLocations.easy[start].start,
      startEndLocations.easy[start].goal,
      level
    )
  );
  const [easy, setEasy] = useState(true);
  const [won, setWon] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(
    startEndLocations.easy[start].start
  );
  const [agentPosition, setAgentPosition] = useState(
    startEndLocations.easy[start].start
  );
  const [goalPosition, setGoalPosition] = useState(
    startEndLocations.easy[start].goal
  );
  const [index, setIndex] = useState(0);

  const resetPositions = (easy, start) => {
    if (easy) {
      setPath(
        bredthFirstSearch(
          startEndLocations.easy[start].start,
          startEndLocations.easy[start].goal,
          mazes.easy
        )
      );
      setPlayerPosition(startEndLocations.easy[start].start);
      setAgentPosition(startEndLocations.easy[start].start);
      setGoalPosition(startEndLocations.easy[start].goal);
    } else {
      setPath(
        bredthFirstSearch(
          startEndLocations.hard[start].start,
          startEndLocations.hard[start].goal,
          mazes.hard
        )
      );
      setPlayerPosition(startEndLocations.hard[start].start);
      setAgentPosition(startEndLocations.hard[start].start);
      setGoalPosition(startEndLocations.hard[start].goal);
    }
    setIndex(0);
  };

  return (
    <div className="appMainContainer">
      <h1 className="mainHeader">The Maze Race</h1>
      <img src={require("../assests/flag.png")} className="maizeFlag" />
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            resetPositions(easy, (start + 1) % 3);
            setWon(false);
            setstart((start + 1) % 3);
          }}
        >
          Start
        </button>
        <button
          className="button"
          onClick={() => {
            resetPositions(easy, start);
            setWon(false);
          }}
        >
          Restart
        </button>
        <button
          className="button"
          onClick={() => {
            if (easy) {
              resetPositions(!easy, start);
              setLevel(mazes.hard);
            } else {
              resetPositions(!easy, start);
              setLevel(mazes.easy);
            }
            setWon(false);
            setEasy(!easy);
          }}
        >
          Difficulty
        </button>
      </div>
      {
        <Maze
          level={easy ? mazes.easy : mazes.hard}
          goalPosition={goalPosition}
          agentPath={path}
          easy={easy}
          setWon={setWon}
          won={won}
          playerPosition={playerPosition}
          agentPosition={agentPosition}
          setAgentPosition={setAgentPosition}
          setPlayerPosition={setPlayerPosition}
          index={index}
          setIndex={setIndex}
        />
      }
    </div>
  );
}

export default App;
