/**
 *
 * @param {the initial state of the agent or the start position} start
 * @param {the goal state of the agent or the final state} goal
 * @returns the shortest path to reach the goal state or null if path is not found
 */
export default function bredthFirstSearch(start, goal, maze) {
  // movements corresponding to up, down, right and left
  const directions = [
    { dx: 0, dy: -1, move: "up" },
    { dx: 0, dy: 1, move: "down" },
    { dx: -1, dy: 0, move: "left" },
    { dx: 1, dy: 0, move: "right" },
  ];

  let queue = [{ ...start, path: [] }]; // queue used to store the paths that the algorithm is exploring
  let visited = Array.from({ length: maze.length }, () =>
    Array(maze[0].length).fill(false)
  );
  visited[start.y][start.x] = true;

  while (queue.length > 0) {
    let { x, y, path } = queue.shift(); // remove the first element from the queue and return it

    if (x === goal.y && y === goal.x) {
      return path;
    }

    /**
     * loop throught the different directions and validate the movements from the given node being expanded,
     * if a movement is valid it is added to the queue for expanding later on
     * the move is appended to the path that is already there in the queue
     */
    for (let { dx, dy, move } of directions) {
      let newX = x + dx;
      let newY = y + dy;

      if (
        newX >= 0 &&
        newX < maze[0].length &&
        newY >= 0 &&
        newY < maze.length &&
        maze[newY][newX] === 0 &&
        !visited[newY][newX]
      ) {
        visited[newY][newX] = true;
        queue.push({ x: newX, y: newY, path: [...path, move] });
      }
    }
  }

  return null;
}
