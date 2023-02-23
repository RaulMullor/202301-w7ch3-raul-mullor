import React, { useState } from "react";

const selectWord = () => {
  const words = [
    "javascript",
    "programming",
    "html",
    "css",
    "development",
    "software",
  ];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

function HangmanGame() {
  const [selectedWord, setSelectedWord] = useState(selectWord());
  const [hiddenWord, setHiddenWord] = useState(
    selectedWord.replace(/./g, "_ ")
  );
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [chances, setChances] = useState(6);

  const handleLetterSelect = (letter) => {
    if (selectedLetters.includes(letter)) {
      return;
    }

    const letters = selectedWord.split("");
    if (letters.includes(letter)) {
      const wordWithLetter = hiddenWord.split(" ");
      letters.forEach((wordLetter, index) => {
        if (wordLetter === letter) {
          wordWithLetter[index] = letter;
        }
      });
      setHiddenWord(wordWithLetter.join(" "));
    } else {
      setChances(chances - 1);
    }

    setSelectedLetters([...selectedLetters, letter]);
  };

  const handleRestartGame = () => {
    const newSelectedWord = selectWord();
    setSelectedWord(newSelectedWord);
    setHiddenWord(newSelectedWord.replace(/./g, "_ "));
    setSelectedLetters([]);
    setChances(6);
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <p>Guess the word by selecting one letter at a time.</p>
      <p>You have {chances} chances left.</p>
      <p>{hiddenWord}</p>
      <div>
        {selectedLetters.map((letter) => (
          <span key={letter}>{letter} </span>
        ))}
      </div>
      <div>
        {chances === 0 ? (
          <div>
            <p>You lost!</p>
            <button type="button" onClick={handleRestartGame}>
              Play again
            </button>
          </div>
        ) : hiddenWord === selectedWord ? (
          <div>
            <p>You won!</p>
            <button type="button" onClick={handleRestartGame}>
              Play again
            </button>
          </div>
        ) : (
          <div>
            <p>Select a letter:</p>
            {[..."abcdefghijklmnopqrstuvwxyz"].map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleLetterSelect(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HangmanGame;
