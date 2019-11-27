import React from "react";
import boat from "./boat.png";

/********************************************
 *  Boat component to display              *
 *  the boat and re-render to make it move *
 *  in arrows                               *
 *******************************************/
const Boat = ({ pos }) => {
  /************************************************************************
   * style the boat image to make display in the right absolute position *
   ************************************************************************/
  let styles = {
    position: "absolute",
    width: "100px",
    height: "100px",
    bottom: "100px",
    left: `${pos[0]}px`
  };
  /*************************
   * send the image render *
   *************************/
  return (
    <div>
      {/* <canvas style={{ left: `${parseInt(props.state)*10+100}px`, right:`${parseInt(props.state)*10+100}px` }} /> */}
      <img src={boat} alt="boat" style={styles} />
    </div>
  );
};

export default Boat;
