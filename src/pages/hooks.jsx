import { NavLink } from "react-router-dom";
import { useState, createContext, useContext, useRef, useEffect } from 'react';
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
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const headingRef = useRef();

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
    <h1>Component <span ref={headingRef}>2</span></h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          headingRef.current.innerText = e.target.value;
        }}
        onLoad={
          console.log("Current: " + inputValue + " previus: " + previousInputValue.current )
        }
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
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