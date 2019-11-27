import React from "react";
import parachutist from "./parachutist.png";

const re_render = 200;
const sea_surface = 400;
/**************************************************
 *  Parachutist component to display              *
 *  the Parachutist and re-render to make it move *
 **************************************************/

const Parachutist = ({ boatPos, planepos, setScore }) => {
  const [seconds, setSeconds] = React.useState(0);
  /*****************************************************************************
   * function to check if the boat picked the parachutist when it reached the sea *
   ********************************************************************************/
  const pickedUp = bPos => {
    if (bPos >= planepos - 100 && bPos <= planepos + 100) {
      setScore(score => {
        score[0]++;
        return score;
      });
    } else {
      setScore(score => {
        score[1]--;
        return score;
      });
    }
  };
  /******************************************************************************
   * UseEffect to make the parachutist journy, making it re-render every 200 ms *
   ******************************************************************************/
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => {
        if (seconds === -1) return seconds;
        if (40 + 30 * seconds > sea_surface) {
          return -1;
        } else {
          return seconds + 1;
        }
      });
    }, re_render);
    return () => clearInterval(interval);
  }, []);

  /*************************************************************************
   * UseEffect to make the score update when the parachutist reach the sea *
   *************************************************************************/

  React.useEffect(() => {
    if (seconds === -1) {
      pickedUp(boatPos);
    }
  }, [seconds]);

  /******************************************************************************
   * style the parachutist image to make display in the right absolute position *
   ******************************************************************************/

  let styles = {
    position: "absolute",
    width: `100px`,
    top: `${120 + 30 * seconds}px`,
    height: "100px",
    left: `${planepos}px`
  };

  /***************************************************
   * disappear the parachutist when reaching the sea *
   ***************************************************/
  if (seconds === -1) {
    return null;
  }
  /*************************
   * send the image render *
   *************************/
  return (
    <div>
      {/* <canvas style={{ left: `${parseInt(props.state)*10+100}px`, right:`${parseInt(props.state)*10+100}px` }} /> */}
      <img src={parachutist} alt="parachutist" style={styles} />
    </div>
  );
};

export default Parachutist;
