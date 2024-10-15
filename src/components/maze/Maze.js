import "./maze.css";
import { useState, useEffect, useCallback } from "react";
import handleKey from "../../utils/handleKeyDown";
import RenderBox from "../Agent";
import cell from "../../utils/cell";
import handleAgent from "../../utils/handleAgent";
import GameOver from "../gameOver/GameOver";

/**
 *
 * @returns the maze that will be seen in the game
 */
export default function Maze({ level, position, agentPath }) {
  const [playerPosition, setPlayerPosition] = useState(position.start);
  const [agentPosition, setAgentPosition] = useState(position.start);
  const [winner, setWinner] = useState(false);
  const [index, setIndex] = useState(0);
  // function used to check if there is a winner
  function checkWinner() {
    if (
      agentPosition.x === position.goal.x &&
      agentPosition.y === position.goal.y &&
      playerPosition.x === position.goal.x &&
      playerPosition.y === position.goal.y
    ) {
      setWinner("draw");
    } else if (
      agentPosition.x === position.goal.x &&
      agentPosition.y === position.goal.y
    ) {
      setWinner("agent");
    } else if (
      playerPosition.x === position.goal.x &&
      playerPosition.y === position.goal.y
    ) {
      setWinner("player");
    }
  }

  const handleKeyDown = useCallback(
    // function that makes the agent move
    (event) => {
      let value = handleKey(event, playerPosition, setPlayerPosition, level);
      if (value) {
        handleAgent(agentPath[index], agentPosition, setAgentPosition, event);
        setIndex(index + 1);
      }
    },
    [playerPosition, level, setPlayerPosition]
  );

  // handling keyPreses
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    checkWinner();
    return () => {
      // to clean up the event listener when the component unmounts
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition, agentPosition, index]);

  return (
    <div className="mazeMainContainer">
      {winner != false ? (
        <GameOver winner={winner} />
      ) : (
        <div className="mazeHeight">
          {level.map((row, rowIndex) => (
            <div className="mazeWidth">
              {row.map((boxValue, columnIndex) => (
                <RenderBox
                  boxValue={cell(
                    boxValue,
                    columnIndex,
                    rowIndex,
                    playerPosition,
                    agentPosition,
                    position
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
