import React from "react";
import sea from "./sea.png";
/*******************************************
 *  Sea component to display the sea image *
 *******************************************/
const Sea = () => {
  /************************************************************************
   * style the sea image to make display in the right absolute position *
   ************************************************************************/
  let styles = {
    position: "absolute",
    width: `1700px`,
    bottom: "0px",
    height: "120px",
    left: 0
  };
  /*************************
   * send the image render *
   *************************/
  return (
    <div>
      {/* <canvas style={{ left: `${parseInt(props.state)*10+100}px`, right:`${parseInt(props.state)*10+100}px` }} /> */}
      <img src={sea} alt="sea" style={styles} />
    </div>
  );
};

export default Sea;
