import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    // Only allow whole numbers, no letters or decimals
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 8) {
      setResult(0);
    }
  };

  const handleSubmit = () => {
    const reverseValue = value.split("").reverse("").join("");
    const diff = Math.abs(Number(value) - Number(reverseValue));

    setResult(diff);
  };

  return (
    <div className="App">
      <div className="input-container">
        Number:{" "}
        <input
          onChange={handleInput}
          value={value}
          onKeyDown={handleOnKeyDown}
        />
        <button disabled={value?.length === 0} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
