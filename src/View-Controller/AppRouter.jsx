import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from '../Components/Inicio';
import { Tienda } from '../Components/Tienda';
import Tools from '../Components/Tools';


export const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route exact path="/" element={<Inicio />  } />
            <Route path="/tienda" element={ <Tienda /> } />
            <Route path="/tools" element={ <Tools /> } />
        </Routes>
    </Router>
</>
  );
};