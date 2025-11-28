const Carro = ({color = "blue", carinfo}) => {
  return (
    <>
      <h2>My {carinfo.name} {carinfo.model}!</h2>
      <p>It is {color} and it is from {carinfo.year}!</p>
    </>
  );
}
export default Carro;
