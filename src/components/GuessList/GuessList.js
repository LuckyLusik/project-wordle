import React from "react";
import Guess from "../Guess";

function GuessList({ guess }) {
  return (
    <div className='guess-results'>
      {guess.map(({ id, value }) => (
        <p className='guess' key={id}>
          <Guess value={value} />
        </p>
      ))}
    </div>
  );
}

export default GuessList;
