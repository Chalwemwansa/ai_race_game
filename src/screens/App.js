// the start position of the app
import "./app.css";
import Maze from "../components/maze/Maze";
import startEndLocations from "../utils/startEndLocations";
import mazes from "../utils/mazes";
import { useEffect, useState } from "react";
import bredthFirstSearch from "../utils/bredthFirstSearch";

function App() {
  const [level, setLevel] = useState(mazes.hard);
  const [position, setPosition] = useState(startEndLocations.hard[0]);
  const [path, setPath] = useState([]);

  useEffect(() => {
    setPath(bredthFirstSearch(position.start, position.goal, level));
  }, []);
  return (
    <div className="appMainContainer">
      <h1 className="mainHeader">The Maze Race</h1>
      <img src={require("../assests/flag.png")} className="maizeFlag" />
      <div className="buttons">
        <button className="button" onClick={() => {}}>
          Start
        </button>
        <button className="button" onClick={() => {}}>
          Restart
        </button>
        <button className="button" onClick={() => {}}>
          Difficulty
        </button>
      </div>
      {path.length !== 0 && (
        <Maze level={level} position={position} agentPath={path} />
      )}
    </div>
  );
}

export default App;
