import Button from "./components/ui/Button";
import CounterHistory from "./CounterHistory";

export default function Counter() {
  let countValue = 100;

  const increment = () => {
    countValue++;
    console.log("increment", countValue);
    // document.getElementById("count").innerText = countValue;
  };
  const decrement = () => {
    countValue--;
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
      {/* <Button  onClick={increment} label="incrment" />
        <Button label="decrement" /> */}
    </>
  );
}
