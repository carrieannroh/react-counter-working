import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

    //💻 Add new buttons for `-5`, `-1` and `+5`.

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 1);
  };

  const handleMinusFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };

  const handleMinusOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5);
  };

  const handleReset = () => {
    // TODO reset counter to 0 here
    queueRerenderWithNewCounterValue(0)
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleMinusFive}>-5</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handleAddFive}>+5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
