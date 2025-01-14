import React from "react";

function GuessInput({ guess, setGuess }) {
  const [newGuess, setNewGuess] = React.useState("");
  const guessSubmit = (event) => {
    event.preventDefault();
    setGuess([
      ...guess,
      { id: crypto.randomUUID(), value: newGuess.toUpperCase() },
    ]);
    setNewGuess("");
  };
  return (
    <form className='guess-input-wrapper' onSubmit={guessSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='\w{5,5}'
        value={newGuess}
        onChange={(e) => {
          setNewGuess(e.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
