import { useState } from 'react';
import styled from 'styled-components';
import { forwardRef, useRef } from 'react';

const Perrafo = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

const MyInputa = forwardRef((propsito, refri) => (
  <input ref={refri} {...propsito} />
));

function TeamFruta() {

  const inputReferencia = useRef();

  const tiraTalla = (x) => {
    inputReferencia.current.value = x;
  };

  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    tiraTalla(selectedFruit);
    // alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Perrafo>Select your favorite fruit:</Perrafo>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="orange" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <MyInputa ref={inputReferencia} placeholder="Type here..." />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TeamFruta;