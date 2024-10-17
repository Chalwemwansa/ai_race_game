// function that decides what to render based on the values for the box being
// rendered

export default function cell(
  boxValue,
  columnIndex,
  rowIndex,
  playerPosition,
  agentPosition,
  goalPosition
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
  if (rowIndex === goalPosition.x && columnIndex === goalPosition.y) {
    return 5;
  }
  return boxValue;
}
