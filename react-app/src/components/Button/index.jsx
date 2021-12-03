import './button.css';

function Button(props) {
    const { label } = props;    
    
    return  <button className = "button">{props.label}</button>;
};

export { Button };