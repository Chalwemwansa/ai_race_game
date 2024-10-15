// function that decides what to render based on the values for the box being
// rendered

export default function cell(
  boxValue,
  columnIndex,
  rowIndex,
  playerPosition,
  agentPosition,
  position
) {
  if (
    rowIndex === playerPosition.x &&
    columnIndex === playerPosition.y &&
    rowIndex === agentPosition.x &&
    columnIndex === agentPosition.y
  ) {
    return 4;
  }
  if (rowIndex === agentPosition.x && columnIndex === agentPosition.y) {
    return 7;
  }
  if (rowIndex === playerPosition.x && columnIndex === playerPosition.y) {
    return 6;
  }
  if (rowIndex === position.goal.x && columnIndex === position.goal.y) {
    return 5;
  }
  return boxValue;
}
