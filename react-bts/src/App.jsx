import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import { ConfigureCounter } from "./components/Counter/ConfigureCounter.jsx";
// million-ignore
function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);
  function handleSetCount(newCount) {
    setChosenCount(newCount);
    // setChosenCount((prevCount)=>prevCount+1); 
    // above is to ecplain the state batching
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0}/>
      </main>
    </>
  );
}

export default App;

// millionjs is used to make faster ad optimized
