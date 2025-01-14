import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ value }) {
  return (
    <>
      {value.split("").map((num) => (
        <span className='cell'>{num}</span>
      ))}
    </>
  );
}

export default Guess;
