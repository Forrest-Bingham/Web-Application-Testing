import React, { useState, useEffect } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);
  const [homePoints, setHomePoints] = useState(0);
  const [awayPoints, setAwayPoints] = useState(0);
  const [inning, setInning] = useState(1);

  const strike = () => {
    if (strikes < 2) {
      setStrikes(strikes => ++strikes);
    } else if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
      setOuts(outs => ++outs);

      if (outs >= 2) {
        setStrikes(0);
        setBalls(0);
        setOuts(0);
      }
    }
  };

  const ball = () => {
    if (balls < 3) {
      setBalls(balls => ++balls);
    } else if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    }
  };

  const foul = () => {
    if (strikes < 2) {
      setStrikes(strikes => ++strikes);
    }
  };

  const out = () => {
    if (outs < 2) {
      setOuts(outs => ++outs);
    } else if (outs === 2) {
      setOuts(0);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  const clear = () => {
    setStrikes(0);
    setBalls(0);
    setOuts(0);
  };

  const scoreHome = () => {
    setHomePoints(homePoints => ++homePoints);
  };

  const scoreAway = () => {
    setAwayPoints(awayPoints => ++awayPoints);
  };

  const clearScores = () => {
    setHomePoints(0);
    setAwayPoints(0);
    setInning(1);
  };

  const addInning = () => {
    setInning(inning => ++inning);
  };

  const subtractInning = () => {
    if (inning >= 2) {
      setInning(inning => --inning);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Baseball Dashboard</h1>
      </div>
      <Display
        strikes={strikes}
        balls={balls}
        outs={outs}
        homePoints={homePoints}
        awayPoints={awayPoints}
      />

      <div className="buttons">
        <button onClick={strike} className="button">
          Strike
        </button>
        <button onClick={foul} className="button">
          Foul
        </button>
        <button onClick={ball} className="button">
          Ball
        </button>
        <button onClick={hit} className="button">
          Hit
        </button>
        <button onClick={out} className="button">
          Out
        </button>
      </div>

      <div className="inning">
        <div className="inningDisplay">
          <h1>Inning</h1>
          <h2>{inning}</h2>
        </div>
        <button onClick={subtractInning}>-</button>
        <button onClick={addInning}>+</button>
      </div>

      <div className="bottomRow">
        <button onClick={scoreHome}>Home Team Score</button>

        <button onClick={clear} className="clear">
          Clear
        </button>

        <button onClick={scoreAway}>Away Team Score</button>
      </div>

      <button onClick={clearScores}>Game Over</button>
    </div>
  );
};

export default Dashboard;
