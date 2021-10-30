import React, { useState } from "react";

function SummaryPage() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={isChecked}
          id="confirm-checkbox"
          onChange={(e) => setIsChecked(!isChecked)}
        />

        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>

        <button disabled={!isChecked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
