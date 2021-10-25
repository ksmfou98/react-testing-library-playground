import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button data-testid="minus-button">-</button>
        <button data-testid="plus-button">+</button>
      </div>
    </div>
  );
}
export default Counter;
