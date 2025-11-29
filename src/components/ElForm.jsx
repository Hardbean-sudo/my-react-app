import { useState } from "react"
const ElForm = () => {
    console.log(useState());
    // const [name, setIt] = useState("Jhon Doe");
    // const [myCar, setMyCar] = useState("Volvo");
    const [inputs, setInputs] = useState({
        first: 'Jhon Doe',
        myCar: 'Volvo',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${inputs.first} and I drive a ${inputs.myCar}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="first" value={inputs.first} onChange={(event) => {
                setInputs(values => ({...values, [event.target.name]: event.target.value}))
            }} />
            <p>Value: {inputs.first}</p>
            <select name="myCar" value={inputs.myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ElForm;
