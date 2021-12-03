import { Logos } from '../Logos';
import { Presentation } from '../Presentation';


import './main.css'

function Main(props) {
    const { brand } = props;

    return (
        <main className = "main">
            <div className = "__container">
                <div className = "__left">
                    <Logos />
                </div>
                <div className = "__right">
                    <Presentation brand = {props.brand}/>
                </div>
            </div>
        </main>
    );
};

export { Main }