import './footer.css';

function Footer(props) {
    const { text, country, year } = props;    
    return (
        <footer className = "footer">
            <div className = "__container">
                <div className = "__left">
                    <p>{props.text}</p>
                </div>
                <div className = "__right">
                    <p>{props.country}, {props.year}</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };