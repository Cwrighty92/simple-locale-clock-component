import React from "react";
import "./App.css";

function App() {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div id="MyClockDisplay" className="clock">
      {date.toLocaleTimeString()}
    </div>
  );
}

export default App;
