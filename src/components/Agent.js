// gives the agent that will be shown as well as the flag etc
import AgentPlayer from "./agentplayer/AgentPlayer";
import Wall from "./wall/Wall";

export default function RenderBox({ boxValue, wall }) {
  // 2 is topDown wall
  // 3 is left right wall
  if (boxValue === 3) {
    if (wall === "light") return <Wall light={true} />;
    return <Wall dark={true} />;
  }

  if (boxValue === 2) {
    if (wall === "light") return <Wall light={true} />;
    return <Wall dark={true} />;
  }

  if (boxValue === 0) {
    return <AgentPlayer />;
  }

  if (boxValue === 4) {
    return <AgentPlayer player={true} agent={true} />;
  }

  if (boxValue === 5) {
    return <AgentPlayer goal={true} />;
  }

  if (boxValue === 6) {
    return <AgentPlayer player={true} />;
  }

  if (boxValue === 7) {
    return <AgentPlayer agent={true} />;
  }
}
