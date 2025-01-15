import React from "react";
import { range } from "../../utils";
import { checkGuess } from "/src/game-helpers.js";
function Guess({ value, answer }) {
  const isCorrect = checkGuess(value, answer);
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${
            isCorrect != null ? isCorrect[num].status : ""
          }`}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
