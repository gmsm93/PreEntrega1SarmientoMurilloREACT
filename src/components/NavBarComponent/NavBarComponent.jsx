import React from "react";
import Navbar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaInicio, CuidadoFacial, Maquillaje, Nosotros } from "../../pages";

export const NavBarComponent = () =>{
    return(
    <Router>    
      <Navbar />
      <Routes>
        <Route path='/' exact component={PaginaInicio} />
        <Route path='/CuidadoFacial' component={CuidadoFacial} />
        <Route path='/Maquillaje' component={Maquillaje} />
        <Route path='/Nosotros' component={Nosotros} />
      </Routes>
    </Router>
    );
}
