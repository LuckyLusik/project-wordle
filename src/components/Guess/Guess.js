import React from "react";
import { range } from "../../utils";
import { checkGuess } from "/src/game-helpers.js";

function Guess({ value, answer, guess }) {
  const isCorrect = checkGuess(value, answer);
  let guessNumber = guess.length;

  const isCorrectArray = (isCorrect) => {
    let counter = 0;
    for (const property in isCorrect) {
      if (isCorrect[property].status === "correct") {
        counter++;
      }
    }
    if (counter === 5) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
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
      {isCorrectArray(isCorrect) === true ? (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessNumber} guesses</strong>.
          </p>
        </div>
      ) : guessNumber === 6 ? (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Guess;
