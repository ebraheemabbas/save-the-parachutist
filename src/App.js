import React from "react";
import "./App.css";
import ArrowKeysReact from "arrow-keys-react";
import Boat from "./Compnents/boatComp/Boat";
import Sea from "./Compnents/seaComp/sea";
import Plane from "./Compnents/planeComp/Plane";
import Score from "./Compnents/scoreComp/Score";
import Parachutist from "./Compnents/parachutistsComp/parachutists";

var showParachutist = 11;
var planepos = 1600;
const planeStartPos = 1500;
const boatStartPos = 900;
const planStep = 10;
const planeJourny = 10;
const Lives = 3;

/************************************************************************
 *    App is the main component that's connect between all other compnent *
 ************************************************************************/
function App() {
  /**************************************
   * pos represent the boatpos          *
   **************************************/
  const [pos, setPos] = React.useState([boatStartPos]);

  /************************************************************************
   *  showPlane a state for represent the time that's the plane appearing *
   ************************************************************************/
  const [showPlane, setshowPlane] = React.useState(planeJourny);
  /*******************************************
   *   score a state for represent the score *
   ********************************************/
  const [score, setScore] = React.useState([0, Lives]);

  /*******************************************
   *   callback to save the plane position *
   ********************************************/
  const savePlanePos = e => {
    if (showPlane < showParachutist) planepos = e;
  };

  /*************************************************************
   *  divRef used to the main div to focuse in start so        *
   * the arrows listener start without clicking in the main div*
   *************************************************************/
    const divRef = React.useRef(null);


  /************************************************************************
   *  UseEffect to make the plane journy, making it appear for            *
   * 12 seconds and get a random number in range 2-9(which represent      *
   *  the time to make the parachutist jump                               *
   ************************************************************************/
  React.useEffect(() => {
    divRef.current.focus();
    const interval = setInterval(() => {
      setshowPlane(showPlane => {
        if (showPlane === planeJourny) {
          showParachutist = Math.floor(Math.random() * 5 + 2);
          return 0;
        } else {
          return showPlane + 1;
        }
      });
    }, 1370);
    return () => clearInterval(interval);
  }, []);

  /********************************************************************
   *    Listener for left & right arrows and update the boat position *
   ********************************************************************/

  ArrowKeysReact.config({
    left: () => {
      let newpos = [...pos];
      newpos[0] = newpos[0] !== 0 ? newpos[0] - planStep : 0;
      setPos(newpos);
    },
    right: () => {
      let newpos = [...pos];
      newpos[0] =
        newpos[0] < planeStartPos ? newpos[0] + planStep : planeStartPos;
      setPos(newpos);
    }
  });
  /*****************************************
   *  render the view if the lives is zero *
   *****************************************/
  if (score[1] <= 0) {
    return (
      <div className="App">
        <header className="App-header">
          <p style={{ color: "red", position: "absolute", left: "700px" }}>
            Game Over
          </p>
        </header>
      </div>
    );
  }
  return (
    <div className="App" {...ArrowKeysReact.events} tabIndex="1" ref={divRef}>
      <header className="App-header">
        {showPlane <= 6 ? <Plane savePlanePos={savePlanePos} /> : null}
        {showPlane >= showParachutist ? (
          <Parachutist
            planepos={planepos}
            setScore={setScore}
            boatPos={pos[0]}
          />
        ) : null}
        <Boat pos={pos} />
        <Sea />
        <Score score={score}></Score>
      </header>
    </div>
  );
}

export default App;
