import Hijo from './Hijo';
const Padre = () => {
    return (
        <div>
            <Hijo>
                <h4>Copilot es Tixa</h4>
                <p>Contenido pasado desde el componente Padre al componente Hijo.</p>
            </Hijo>
        </div>
    );
} 
export default Padre;