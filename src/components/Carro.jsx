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

  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter]); // <- add empty brackets here

  return <h1>I've rendered {counter} times!</h1>;
}
const Carro = ({color = "blue", carinfo}) => {
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
      color: `${c || "yellow" }`,
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
