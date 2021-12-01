import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

import './app.css';

function App() {
    let nCurrentYear = new Date().getFullYear();

    return (
        <div className = "app">
            <Header brand = "ArtesSALES"/>
            <Main />
            <Footer text = "Todos los derechos reservados" country = "Perú" year = {nCurrentYear}/>
        </div>
    );
};

export { App };