import React, {useState, useEffect} from 'react';
import Navegation from './Navegation';
import db from '../services/firebase-config'
import { collection, getDocs } from "firebase/firestore";
import '../Styles/tienda.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

export const Tienda =  () => {
    const [show, setShow] = useState(false);
    const [products , setProducts] = useState([]);
    const [productsId , setProductsId] = useState([]);
    const [total, setTotal] = useState(0);
    
    const getData = async () => {
      let array = [];
      const querySnapshot = await getDocs(collection(db, "productos"));
      querySnapshot.forEach((doc) => { array.push(doc)        
      });

      setProducts(array);
    }

    const alldata = () => {
        getData();
    }

    useEffect(() => {
        getData()
    }, [])

    const [productsCard, setProductsCard] = useState([]); 
    const [cantidad, setCantidad] = useState(0)

    const capturaDatos = (product, precio) => {   

        setProductsId([
            ...productsId,
            product.id
        ]);

        if(productsId.includes(product.id)){
            console.log('incluido');
        } else{

            setProductsCard([
                ...productsCard,
                product
            ]);

        }
        
        const count = productsCard.length +1;
        setCantidad(count)

        setTotal(total + precio)
    };

    const verDetalle = (caracteristica, marca, nombre) =>{
        swal( `${nombre} - ${marca} `, caracteristica);
    }  

    const btnDelete = (id, precio) => {
      const data =  productsCard.map(el => el);
  
        const dataFilter = data.filter((product) => product.id!== id);
        setProductsCard(dataFilter);
        const count = productsCard.length -1;
        setCantidad(count);
        const newDataIds = productsId.filter(e => e !== id);
        setProductsId(newDataIds);

        setTotal(total - precio)
       
    }
  return (
    <><Navegation getData={getData}   alldata={alldata} cantidad={cantidad} show={show} setShow={setShow}/>
    <section className='container-all'>
    {
        products.map((el, i) => (      
            <> 
            <div className='card-product' key={i.id}>
                <div>
                 <img key={i+3} src={el.imagen || el.data().imagen } alt="" />   
                </div>                
              <p key={i +1 }>{el.data().nombre || el.nombre}</p>
              <p key={i +2}>Precio: {el.data().precio || el.precio}</p>
              <button className='btnAddCarrito' onClick={() =>capturaDatos(el, el.data().precio)}>Agregar a carrito</button>
              <button className='btnVerDetalle' onClick={() =>verDetalle(el.data().caracteristica, el.data().marca, el.data().nombre)} >Ver Detalle</button>
            </div> </>        
            
        ))

    }
    <section className='container-carrito' style={{ display: show ? "block" : "none" }}>

    { productsCard.length ===0 ? <p>No hay productos</p> : productsCard.map((item, index) => (
        <>
        <label className="lblProduct" key={index}>{item.data().nombre}</label> 
        <label className="lblPrecio" key={index}>S/.{item.data().precio}</label> 
        <button className="btnTrash" ><FontAwesomeIcon icon ={faTrashAlt} onClick={()=>btnDelete(item.id, item.data().precio)}/></button>
        <br /></> 
    ))}  
    <p>Total: {total}</p>

    </section>
    
    </section>
    

    </>
  )
}

