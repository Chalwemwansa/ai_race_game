/**
 *
 * @param {Object} start - the initial state of the agent or the start position
 * @param {Object} goal - the goal state of the agent or the final state
 * @param {Array} maze - the maze representation (2D array)
 * @returns {Array|null} - the shortest path to reach the goal state or null if path is not found
 */
export default function breadthFirstSearch(start, goal, maze) {
  // Updated movements corresponding to up, down, left, and right
  const directions = [
    { dx: -1, dy: 0, move: "up" }, // Move up (decrease y)
    { dx: 1, dy: 0, move: "down" }, // Move down (increase y)
    { dx: 0, dy: -1, move: "left" }, // Move left (decrease x)
    { dx: 0, dy: 1, move: "right" }, // Move right (increase x)
  ];

  let queue = [{ ...start, path: [] }]; // Queue to store the paths being explored
  let visited = Array.from({ length: maze.length }, () =>
    Array(maze[0].length).fill(false)
  );

  visited[start.x][start.y] = true; // Mark the starting position as visited

  while (queue.length > 0) {
    let { x, y, path } = queue.shift(); // Remove the first element from the queue

    // Check if the current position is the goal
    if (y === goal.y && x === goal.x) {
      // Switch goal condition
      return path; // Return the path when the goal is reached
    }

    // Loop through the different directions and validate the movements
    for (let { dx, dy, move } of directions) {
      let newX = x + dx; // Calculate new x position
      let newY = y + dy; // Calculate new y position

      // Validate the new position
      if (
        newX >= 0 &&
        newX < maze.length && // Adjusted to check maze length
        newY >= 0 &&
        newY < maze[0].length && // Adjusted to check maze width
        maze[newX][newY] === 0 && // Check for free space
        !visited[newX][newY] // Check if it has been visited
      ) {
        visited[newX][newY] = true; // Mark as visited
        queue.push({ x: newX, y: newY, path: [...path, move] }); // Enqueue the new position with the updated path
      }
    }
  }

  return null; // Return null if no path is found
}
