const Hijo = ({ children }) => {
    const wow = (a, b) => {
        alert(a + " " + b.type);
    }
    const assets = ["Casa", "Carro", "Negocio", "Vending Machine", "IA", "Online Store"];
    return (
        <>
        <div>{children}</div>
        <button onClick={(event) => wow("Yeah!", event)}>Alertar!</button>
        <ul>
            {assets.map((assetsItem, index) => <li key={index}>{assetsItem}</li>)}
        </ul>
        </>
    );
}
export default Hijo;