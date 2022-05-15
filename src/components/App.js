import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [money, setMoney] = useState(50)
  const [eatenSushi, setEatenSushi] = useState(false)

  const handleEatSushi = (id) => {
    if(!eatenSushi.includes(id)) {
      const newEaten = [...eatenSushi, id]
      setEatenSushi(newEaten)
    }
  }

  return (
    <div className="app">
      <SushiContainer eatenSushi={eatenSushi} handleEatSushi={handleEatSushi} />
      <Table plate={eatenSushi} onMoney={money} onSetMoney={setMoney} />
    </div>
  );
}

export default App;
