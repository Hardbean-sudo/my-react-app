import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import Casa from './components/Casa.jsx'
import Carro from './components/Carro.jsx'
import Padre from './components/Padre.jsx';
import TeamFruta from './components/TeamFruta.jsx';
import './index.css';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

const town = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

const TownElement = (props) => {
  let townNamme = town;
  if (props.id) {
    townNamme = props.id;
  } else if (props) {
    console.log(props);
  } else {
    townNamme = town;
  }
  return <h3>{townNamme}</h3>;
};

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

const SateFL = () => {
  const [wecopen, setWecopen] = useState("Wecopen");
  return (
    <>
      <TownElement />
      <TownElement id="Open Road" />
      <TownElement id="Millonario gracias a la IA" />
      <TownElement id="Millionaire Thanks to AI" />
      <p>is in the {wecopen} of New Zealand</p>
      <button onClick={() => setWecopen(wecopen === "Wecopen" ? "TakiMomomoo" : "Wecopen")}>Set Wecopen</button>
      <nav>
        <NavLink to="/padre" style={navLinkStyle}>Padre</NavLink> |{' '}
        <NavLink to="/teamfruta" style={navLinkStyle}>TeamFruta</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "green",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <nav>
      <NavLink to="/" style={navLinkStyle}>SateFL</NavLink> |{' '}
      <NavLink to="/casa" style={navLinkStyle}>Casa</NavLink> |{' '}
      <NavLink to="/carro" style={navLinkStyle}>Carro</NavLink> |{' '}
    </nav>
    <Routes>
      <Route path="/" element={<SateFL />} >
        <Route path="/padre" element={<Padre />} />
        <Route path="/teamfruta" element={<TeamFruta />} />
      </Route>
      <Route path="/casa" element={<Casa />} />
      <Route path="/carro" element={<Carro carinfo={carInfo} />} />
    </Routes>
  </BrowserRouter>
)