import { Navigation } from '../Navigation';

import './header.css';

function Header(props) {
    const { brand } = props;

     return (
        <header className = "header">
            <div className = "__container">
                <div className = "__left">
                    <h2>{props.brand}</h2>
                </div>
                <div className = "__right">
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export { Header };