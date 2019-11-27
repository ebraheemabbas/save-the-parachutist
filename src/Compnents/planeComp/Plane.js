import React from "react";
import plane from "./plane.png";
const startpos = 1600;
const re_render = 120;
const leftBoard = -100;
/********************************************
 *  Plane component to display              *
 *  the plane and re-render to make it move *
 *******************************************/
const Plane = ({ savePlanePos }) => {
  const [seconds, setSeconds] = React.useState(0);
  /************************************************************************
   * UseEffect to make the plane journy, making it re-render every 120 ms *
   ************************************************************************/

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds =>
        startpos - 20 * seconds < leftBoard ? 0 : seconds + 1
      );
    }, re_render);
    return () => clearInterval(interval);
  }, []);

  /************************************************************
   * callback to save the plane position in the app component *
   ************************************************************/
  savePlanePos(startpos - 20 * seconds);
  /************************************************************************
   * style the plane image to make display in the right absolute position *
   ************************************************************************/
  let styles = {
    position: "absolute",
    width: `100px`,
    top: "0px",
    height: "100px",
    left: `${startpos - 20 * seconds}px`
  };
  /*************************
   * send the image render *
   *************************/
  return (
    <div>
      {/* <canvas style={{ left: `${parseInt(props.state)*10+100}px`, right:`${parseInt(props.state)*10+100}px` }} /> */}
      <img src={plane} alt="plane" style={styles} />
    </div>
  );
};

export default Plane;
