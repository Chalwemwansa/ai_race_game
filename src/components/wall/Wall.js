import "./wall.css";
/**
 *
 * @prop {boolean showing whether to render a left or right wall} leftRight
 * @prop {boolean showing whether to render a bottom or top wall} topDown
 */
export default function Wall({ topDown, leftRight }) {
  return (
    <div className="wallMainContainer">
      {leftRight && (
        <img
          src={require("../../assests/leftRight.png")}
          className="leftRightWall"
        />
      )}
      {topDown && (
        <img
          src={require("../../assests/topDownWall.png")}
          className="topDownWall"
        />
      )}
    </div>
  );
}
