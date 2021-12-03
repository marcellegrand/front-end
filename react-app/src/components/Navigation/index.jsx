import { Button } from '../Button';

import './navigation.css'

function Navigation() {
    return (
        <nav className = "nav">
            <div className = "__container">
                <Button label = "Catálogo"/>
                <Button label = "Regístrate"/>
                <Button label = "Login"/>
            </div>
        </nav>
    );
};

export { Navigation }