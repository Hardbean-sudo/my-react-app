import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCalculation(() => count + 1);
    }, 2000);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
function Timer() {
  const [counter, setCounter] = useState(0);
  const [colorPositive, setColorPositive] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 25);
    return () => clearTimeout(timer);
  }, [counter]); // <- add empty brackets here
  if (counter > 359) {
    setCounter(0);
    setColorPositive(!colorPositive);
  }
  const colorGrade = colorPositive ? counter * 1 : counter * -1;
  return (
    <>
      <h1>I've rendered {counter} times!</h1>
      <br />
      <img src="\public\pineapple.jpg" alt="A golden pineapple fruit rotating through a spectrum of hues, displayed as a five-pointed star shape against a plain background" style={{ filter: `hue-rotate(${colorGrade}deg)`, clipPath: `polygon(72.5% 0%, 100% 40%, 90% 90%, 55% 90%, 45% 40%)` }} />
      <img src="\public\pineapple.jpg" alt="A pineapple fruit with inverted colors becoming progressively more saturated, illustrating a visual effect demonstration" style={{ filter: `invert(${counter}%)`, clipPath: `polygon(72.5% 0%, 100% 40%, 90% 90%, 55% 90%, 45% 40%)` }} />
      <br />
      <p>{colorGrade}</p>
    </>
  );
}
const Carro = ({ color = "blue", carinfo }) => {
  const [newCar, setNewCar] = useState({
    name: "Lamborghini",
    model: "Aventador",
    year: "2020",
    color: "red",
  });
  const [fula, setFula] = useState("yellow");
  const handleChangeFula = (e) => {
    setFula(e.target.value);
  }
  const updateNewCar = (c) => {
    setNewCar(prevSate => ({
      ...prevSate,
      color: `${c || "yellow"}`,
    }));
  }
  return (
    <>
      <h2>My {carinfo.name} {carinfo.model}!</h2>
      <p>It is {color} and it is from {carinfo.year}!</p>
      <Timer />
      <Counter />
      <div>
        <h2>My second car is a {newCar.name}</h2>
        <p>It is a {newCar.color} {newCar.model} from {newCar.year}!</p>
        <input type="text" value={fula} onChange={handleChangeFula} />
        <button onClick={() => updateNewCar(fula)}>Update New Car</button>
      </div>
    </>
  );
}
export default Carro;
