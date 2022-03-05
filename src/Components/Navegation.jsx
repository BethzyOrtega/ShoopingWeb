import React from 'react';
import imgen from '../Images/Rela-plaza-go.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGear, faStore, faHouse} from '@fortawesome/free-solid-svg-icons';
import '../Styles/nav.css';


const Navegation = (props) => {

  const mostrar = () => {
    if(props.show === false) {
      props.setShow(true)
    } else
    props.setShow(false)
  }

  
  return (
    <nav className='navigation'>
       <img className='imagen-logo' src={imgen} alt="" />    
        <div>
       <Link className='link-navigator' to="/"><FontAwesomeIcon className='icon-nav' icon={faHouse} /><p>Tools</p></Link>
       </div>
       <div>
       <Link className='link-navigator' to="/tools"><FontAwesomeIcon className='icon-nav' icon={faGear} /><p>Tools</p></Link>
       </div>
       <div>
         <Link className='link-navigator' to="/tienda"><FontAwesomeIcon className='icon-nav' icon={faStore} /><p>Tienda</p></Link>
       </div>
       <div>         
       <button className='btnCarrito' onClick={mostrar}><FontAwesomeIcon className='icon-nav' icon={faCartShopping} /></button><br/>
       <div> <label className='lbl-count' htmlFor="">{props.cantidad}</label></div>
       </div>

    </nav>
  )
}

export default Navegation