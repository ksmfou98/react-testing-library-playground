import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
