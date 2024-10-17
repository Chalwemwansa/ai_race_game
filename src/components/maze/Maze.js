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
export default function Maze({
  level,
  goalPosition,
  agentPath,
  easy,
  setWon,
  won,
  playerPosition,
  agentPosition,
  setAgentPosition,
  setPlayerPosition,
  index,
  setIndex,
}) {
  const [winner, setWinner] = useState(false);
  // function used to check if there is a winner
  function checkWinner() {
    if (
      agentPosition.x === goalPosition.x &&
      agentPosition.y === goalPosition.y &&
      playerPosition.x === goalPosition.x &&
      playerPosition.y === goalPosition.y
    ) {
      setWinner("draw");
      setWon(true);
    } else if (
      agentPosition.x === goalPosition.x &&
      agentPosition.y === goalPosition.y
    ) {
      setWinner("agent");
      setWon(true);
    } else if (
      playerPosition.x === goalPosition.x &&
      playerPosition.y === goalPosition.y
    ) {
      setWinner("player");
      setWon(true);
    }
  }

  const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  const handleKeyDown = useCallback(
    // function that makes the agent move
    async (event) => {
      let value = handleKey(event, playerPosition, setPlayerPosition, level);
      if (value) {
        await pause(50);
        handleAgent(agentPath[index], agentPosition, setAgentPosition, event);
        setIndex(index + 1);
      }
    },
    [
      playerPosition,
      level,
      setPlayerPosition,
      goalPosition,
      won,
      agentPath,
      index,
      agentPosition,
      setAgentPosition,
      setIndex,
    ]
  );

  // handling keyPreses
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    checkWinner();
    return () => {
      // to clean up the event listener when the component unmounts
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    playerPosition,
    level,
    setPlayerPosition,
    goalPosition,
    won,
    agentPath,
    index,
    agentPosition,
    setAgentPosition,
    setIndex,
    checkWinner,
    handleKeyDown,
  ]);

  return (
    <div className="mazeMainContainer">
      {won ? (
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
                    goalPosition
                  )}
                  wall={easy ? "light" : "dark"}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
