import "./wall.css";
/**
 *
 * @prop {boolean showing whether to render a left or right wall} leftRight
 * @prop {boolean showing whether to render a bottom or top wall} topDown
 */
export default function Wall({ light, dark }) {
  return (
    <div className="wallMainContainer">
      {dark && (
        <img
          src={require("../../assests/wall.png")}
          className="leftRightWall"
        />
      )}
      {light && (
        <img src={require("../../assests/wall2.png")} className="topDownWall" />
      )}
    </div>
  );
}
