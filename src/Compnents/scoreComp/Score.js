import React from "react";
/*******************
 * style the score *
 *******************/
let styles = {
  position: "absolute",
  width: `200px`,
  top: "0px",
  height: "100px",
  left: "0px",
  color: "red"
};
/***********************************************
 *  score component to display the score state *
 ***********************************************/
const Score = ({ score }) => {
  return (
    <div style={styles}>
      score:{score[0]}
      <br />
      Lives:{score[1]}
    </div>
  );
};

export default Score;
