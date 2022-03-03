import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from '../Components/Inicio';
import { Tienda } from '../Components/Tienda';
import { Carrito } from '../Components/Carrito';
import { Pedidos } from '../Components/Pedidos';


export const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route exact path="/" element={<Inicio />  } />
            <Route path="/tienda" element={ <Tienda /> } />
            <Route path="/carrito" element={ <Carrito /> } />
            <Route path="/pedidos" element={ <Pedidos /> } />
        </Routes>
    </Router>
</>
  );
};