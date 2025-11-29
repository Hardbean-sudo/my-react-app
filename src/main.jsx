import { createRoot } from 'react-dom/client'
import Casa from './components/Casa.jsx'
import Carro from './components/Carro.jsx'
import Padre from './components/Padre.jsx';

const town = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

const TownElement = (props) => {
  let townNamme =  town;
  if (props.id) {
    townNamme = props.id;
  } else if (props) {
    console.log(props);
  } else {
    townNamme = town;
  }
  return <h3>{townNamme}</h3>;
};

const SateFL = () => {
  return (
    <>
      <TownElement />
      <TownElement id="Open Road" />
      <TownElement id="Millonario gracias a la IA" />
      <TownElement id="Millionaire Thanks to AI" />
      <p>is in the state of New Zealand</p>
    </>
  );
}
const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "green",
  year: 1969};

createRoot(document.getElementById('root')).render(
  <>
    <SateFL />
    <Casa />
    <Carro carinfo={carInfo} />
    <Padre />
  </>
)