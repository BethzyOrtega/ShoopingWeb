import React from 'react';
import imgen from '../Images/Rela-plaza-go.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCartShopping, faTruck, faStore} from '@fortawesome/free-solid-svg-icons';
import '../Styles/nav.css';

const Navegation = () => {
  return (
    <nav className='navigation'>
       <img className='imagen-logo' src={imgen} alt="" />    
       
       <div className='container-input-icon'>
          <FontAwesomeIcon className='icon1' icon={faSearch} /><input type="search" name="" id="" placeholder='¿Que estas buscando?' />
       </div>
       <div>
         <Link className='link-navigator' to="/tienda"><FontAwesomeIcon className='icon-nav' icon={faStore} /><p>Tienda</p></Link>
       </div>
       <div>
        <Link className='link-navigator' to="/carrito"><FontAwesomeIcon className='icon-nav' icon={faCartShopping} /><p>Carrito</p></Link>
       </div>
        <div>
        <Link className='link-navigator' to="/pedidos"><FontAwesomeIcon className='icon-nav' icon={faTruck} /><p>Pedidos</p></Link>
        </div>    

    </nav>
  )
}

export default Navegation