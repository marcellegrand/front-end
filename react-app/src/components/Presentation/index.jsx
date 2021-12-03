import './presentation.css';

function Presentation(props) {
    const { brand } = props;

     return (
        <div className = "presentation">
            <p className = "__title">¡Bienvenido a {props.brand}!</p>
            <p className = "__description">
                 En {props.brand} estamos comprometidos contigo. Este es tu espacio para ofrecer  y dar a conocer tus productos. Si eres un productor artesanal, no importa si lo que haces son alimentos, bebidas, manualidad, productos para el hogar, vestimenta u otros, {props.brand} es tu espacio de promoción y llegada al público.
            </p>
            <p className = "__conclusion">
                 ¿Eres nuevo en {props.brand}? Regístrate, agrega tus productos y comienza a llegar a miles de personas.
            </p>

        </div>
    );
};

export { Presentation };