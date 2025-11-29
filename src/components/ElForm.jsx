import { useState } from "react"
const ElForm = () => {
    console.log(useState());
    const [name, setIt] = useState("Jhon Doe");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" value = {name} onChange = {(event) =>{
                setIt(event.target.value)
                }} />
                <p>Value: {name}</p>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ElForm;
