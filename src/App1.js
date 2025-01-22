import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handleReset() {
    setInputValue(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        {/* <button onClick={() => setInputValue((c) => c - 1)}>-</button> */}
        <span>Step: {inputValue}</span>
        {/* <button onClick={() => setInputValue((c) => c + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - inputValue)}>-</button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + inputValue)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || inputValue !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
