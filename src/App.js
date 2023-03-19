import "./styles.css";

import React, { useState } from "react";
//Requirement: 1
function App() {
  const [inputValue, setInputValue] = useState("");
  const [specialCount, setSpecialCount] = useState(0);
  const [alphabetCount, setAlphabetCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    let special = 0;
    let alphabet = 0;
    let number = 0;

    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (/\W/.test(char)) {
        special++;
      } else if (/\d/.test(char)) {
        number++;
      } else if (/[a-zA-Z]/.test(char)) {
        alphabet++;
      }
    }

    setSpecialCount(special);
    setAlphabetCount(alphabet);
    setNumberCount(number);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Special characters: {specialCount}</p>
      <p>Alphabets: {alphabetCount}</p>
      <p>Numbers: {numberCount}</p>
    </div>
  );
}

export default App;
