import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ eatenSushi, handleEatSushi }) {

  const [sushis, setSushis] = useState([])
  const [position, setPosition] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
  .then((r)=>r.json())
  .then((data)=>setSushis(data))
  }, [])

  let sushiArray;
  if (sushis) {
    sushiArray = sushis.slice(position, position + 4).map((sushi)=>{
      return <Sushi 
      key={sushi.id} 
      name={sushi.name}
      image={sushi.img_url}
      price={sushi.price}
      eatenSushi={eatenSushi}
      handleEatSushi={handleEatSushi}
      />
    })
  }

  function handleMoreClick() {
    setPosition(position + 4)
  }

  return (
    <div className="belt">
      {sushiArray}
      <MoreButton onHandleMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
