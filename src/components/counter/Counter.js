import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((prev) => prev - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter((prev) => prev + 1)}
          disabled={disabled}
        >
          +
        </button>
      </div>
      <div>
        <button
          data-testid="on/off-button"
          onClick={() => setDisabled((prev) => !prev)}
          style={{ backgroundColor: "blue" }}
        >
          on/off
        </button>
      </div>
    </div>
  );
}
export default Counter;
