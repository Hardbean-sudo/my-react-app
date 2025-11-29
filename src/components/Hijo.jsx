const Hijo = ({ children }) => {
    const wow = (a, b) => {
        alert(a + " " + b.type);
    }
    return (
        <>
        <div>{children}</div>
        <button onClick={(event) => wow("Yeah!", event)}>Alertar!</button>
        </>
    );
}
export default Hijo;