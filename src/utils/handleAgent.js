// function that helps us move the agent around in the maze

export default function handleAgent(movement, agentPosition, setAgentPosition) {
  if (movement === "right") {
    setAgentPosition({ x: agentPosition.x, y: agentPosition.y + 1 });
  }
  if (movement === "left") {
    setAgentPosition({ x: agentPosition.x, y: agentPosition.y - 1 });
  }
  if (movement === "down") {
    setAgentPosition({ x: agentPosition.x + 1, y: agentPosition.y });
  }
  if (movement === "up") {
    setAgentPosition({ x: agentPosition.x - 1, y: agentPosition.y });
  }
}
