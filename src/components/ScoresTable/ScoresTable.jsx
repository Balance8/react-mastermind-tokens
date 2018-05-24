import React from 'react';

const ScoresTable = (props) => {

  function formatElapsedTime(seconds) {
    function pad(val, places) {
      var s = val.toString();
      return '0'.repeat(places - s.length) + s;
    } 
    return `${pad(Math.floor(seconds / 60), 2)}:${pad(seconds % 60, 2)}`;
  }

  return (
    <table className='table table-striped' style={{width: 300}}>
      <thead>
        <tr>
          <th>Player</th>
          <th># Guesses</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.scores.map(score => 
          <tr key={score.player}>
            <td>{score.player}</td>
            <td>{score.guesses}</td>
            <td>{formatElapsedTime(score.seconds)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ScoresTable;