import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

import './app.css';

function App() {
    let nCurrentYear = new Date().getFullYear();
    let vBrand = "ArteSALES";
    let vCountry = "Perú";

    return (
        <div className = "app">
            <Header brand = {vBrand}/>
            <Main brand = {vBrand}/>
            <Footer text = "Todos los derechos reservados" country = {vCountry} year = {nCurrentYear}/>
        </div>
    );
};

export { App };