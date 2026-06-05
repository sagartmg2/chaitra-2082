import { useState } from "react";

import Button from "./components/ui/Button";
import CounterHistory from "./CounterHistory";

/* 
    useState(initalValue){
        ...
        ..
        ..
        cont functionTochangeTheInitialValue = () =>{ 
            ....
        }

        return [ initialValue , functionTochangeTheInitialValue ]

    }
*/


export default function Counter() {
  let initalValue = 100;
  const [countValue, setCountValue] = useState(initalValue);  // array destructuring

  const increment = () => {
    // countValue++; // ERROR: we cannto change state varialbe directly

    let newValue = countValue + 1;
    setCountValue(newValue);
    console.log("increment", countValue);
    // document.getElementById("count").innerText = countValue;
  };
  
  const decrement = () => {
    setCountValue(countValue - 1);
    console.log("decrement", countValue);
    // document.getElementById("count").innerText = countValue;
  };

  console.log("counter component render | re-render");
  return (
    <>
      <h1 id="count">{countValue}</h1>
      <button onClick={increment}> increment</button>
      <button onClick={decrement}> decrement</button>

      {/* <CounterHistory countValue={countValue} /> */}
      {/* <Button rounded onClick={increment} label="incrment" />
      <Button label="decrement" /> */}
    </>
  );
}
