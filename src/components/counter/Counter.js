import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
    </div>
  );
}
export default Counter;
 