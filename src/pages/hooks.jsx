import { NavLink } from "react-router-dom";
import React, { useState, createContext, useContext, useRef, useEffect, useReducer, useCallback } from 'react';
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
          console.log("Current: " + inputValue + " previus: " + previousInputValue.current)
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

const ReducerExample = () => {
  const initialScore = [
    { name: 'Pedro', score: 0 },
    { name: 'Pablo', score: 0 },
  ]
  const changeScore = (state, action) => {
    let newScore = {};
    switch (action.type) {
      case 'increment':
        newScore = state.map(player => {
          if (player.name === action.name) {
            return { ...player, score: player.score + 1 };
          } else {
            return player;
          }
        });
        break;
      case 'decrease':
        newScore = state.map(player => {
          if (player.name === action.name) {
            return { ...player, score: player.score - 1 };
          } else {
            return player;
          }
        });
        break;
      default:
        newScore = state;
    }
    return newScore;
  }
  const [selectedPlayer, setSelectedPlayer] = useState('Pedro');
  const onRadioChange = (event) => {
    setSelectedPlayer(event.target.name);
  }
  const [score, dispatch] = useReducer(changeScore, initialScore)
  return (
    <>
      <h1>Reducer Example</h1>
      <label>
        <input 
        type="radio"
        name={score[0].name}
        checked={selectedPlayer === score[0].name}
        onChange={onRadioChange}
        /> Pedro: {score[0].score}
      </label>
      <br />
      <label>
        <input 
        type="radio"
        name={score[1].name}
        checked={selectedPlayer === score[1].name}
        onChange={onRadioChange}
        /> Pablo: {score[1].score}
      </label>
      <br />
      <button onClick={() => dispatch({type: "increment", name: selectedPlayer})}>Aumentar</button>
      <button onClick={() => dispatch({type: "decrease", name: selectedPlayer})}>Disminuir</button>
    </>
  )
}

// useCallback example
const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");
  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

const Hooks = () => {

  return (
    <>
      <NavLink to="/" style={{ marginRight: '10px', marginTop: '10px' }}>Go Home</NavLink>
      <Component1 />
      <ReducerExample />
      <WithCallbackExample />
    </>
  )
};

export default Hooks;