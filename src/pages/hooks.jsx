import { NavLink } from "react-router-dom";
import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <button onClick={() => user === "Linus" ? setUser("Rolo") : setUser("Linus")}>Greet</button>
    </>
  );
}

const Hooks = () => {

    return (
        <>
        <NavLink to="/" style={{ marginRight: '10px', marginTop: '10px' }}>Go Home</NavLink>
        <Component1 />
        </>
    )
};

export default Hooks;