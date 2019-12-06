import React from "react";

const Display = ({ strikes, balls, outs, homePoints, awayPoints }) => {
  return (
    <div className="display">
      <div className="team">
        <h2>Home Team</h2>
        <h2 className="score">{homePoints}</h2>
      </div>
      <div className="strikes">
        <h2>Strikes</h2>
        <h2>{strikes}</h2>
        {/* display strike count */}
      </div>
      <div className="balls">
        <h2>Balls</h2>
        <h2>{balls}</h2>
        {/*display ball count}*/}
      </div>
      <div className="outs">
        <h2>Outs</h2>
        <h2>{outs}</h2> {/*display out count*/}
      </div>

      <div className="team">
        <h2>Away Team</h2>
        <h2 className="score">{awayPoints}</h2>
      </div>
    </div>
  );
};

export default Display;
