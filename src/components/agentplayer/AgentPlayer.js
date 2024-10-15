import "./agentPlayer.css";
/**
 *
 * @prop {a boolean showing whether to render an agent} agent
 * @prop {a boolean showing whether to render a player} player
 */
export default function AgentPlayer({ agent, player, goal }) {
  return (
    <div className="agentPlayerContainer">
      {agent && (
        <img src={require("../../assests/agent.png")} className="player" />
      )}
      {player && (
        <img src={require("../../assests/userImage.png")} className="player" />
      )}
      {goal && (
        <img src={require("../../assests/flag.png")} className="player" />
      )}
    </div>
  );
}
