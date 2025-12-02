import { useState } from "react";
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
