// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/header";
import Nav from "./componentes/layout/nav";
import Footer from "./componentes/layout/footer";
import HomePage from "./pages/home";
import NosotrosPage from "./pages/nosotros";
import ContactoPage from "./pages/contacto";
import NovedadesPage from "./pages/novedades";
import GaleriaPage from "./pages/galeria";
import './App.css';


function App() {
  return (
    <Router>
      <Header></Header>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="nosotros/" exact element={<NosotrosPage />}/>
        <Route path="novedades/" exact element={<NovedadesPage />}/>
        <Route path="galeria/" exact element={<GaleriaPage />}/>
        <Route path="contacto/" exact element={<ContactoPage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
