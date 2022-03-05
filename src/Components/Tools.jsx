import React, {useEffect, useState} from 'react';
import Navegation from '../Components/Navegation';
import db from '../services/firebase-config'
import { collection, getDocs, deleteDoc, doc, updateDoc, query, where  } from "firebase/firestore";
import '../Styles/tools.css';

const Tools = () => {
    const [products , setProducts] = useState([]);
    const [id, setId] = useState('');
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [dataCapturada, setDataCapturada]= useState({
        nombre:'',
        categoria:'',
        precio:'',
        marca:'',
      });

  const [updateData, setUpdateData]= useState({
     nombre:'',
     categoria:'',
     precio:'',
     marca:'',
    })

  const handleChange = (e) =>{
    e.preventDefault();
    setUpdateData({
       ...updateData,
       [e.target.name] : e.target.value,
    })
  }
    
  const getData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => { 
      array.push(doc);
    });
    setProducts(array);
  }

  const deleteData = async(id) => {
    await deleteDoc(doc(db, "productos", id));
    getData();
  }

  const btnUpdate =async (id) =>{
    const washingtonRef = doc(db, "productos", id);
    await updateDoc(washingtonRef, updateData);
    getData();
    setShow(false);
  }

 useEffect(() => {
   getData()
 }, [])

 const openModal = (id, nombre, categoria, precio, marca) => {
    setId(id);
    setShow(true);
    setDataCapturada({
       nombre:nombre,
       categoria:categoria,
       precio:precio,
       marca:marca,
    });
 }

const closeModal = () => {
  setShow(false);
}  

const handleChange2 = (e) =>{
   setSearch(e.target.value);
}

 const dataFilter = async (name) =>{
   let array = [];
   const q = query(collection(db, "productos"), where("nombre", "==", name));
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => { 
   array.push(doc);
   });
  setProducts(array)
}  
 const allGetData = () =>{
    getData();
 }
  return (
  
  <><Navegation />
  
  <section className='containerTable'>

  <div className='container-input-icon'>
         <input className='inputSearch' onClick={allGetData}  onChange={handleChange2} type='search' name="name" placeholder='Buscar por Nombre' />
          <button className='btnSearch'  onClick={() =>dataFilter(search)}>Buscar</button>
  </div>     

  <table>
        <thead>
          <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoria</th>
          <th scope="col">Precio</th>
          <th scope="col">Marca</th>
          <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
              products.map(ele => (

                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.data().nombre}</td>
                    <td>{ele.data().categoria}</td>
                    <td>{ele.data().precio}</td>
                    <td>{ele.data().marca}</td>   
                    <td><button className='delete' onClick={()=>deleteData(ele.id)}>Eliminar</button><button className='update' onClick={()=>openModal(ele.id,ele.data().nombre, ele.data().categoria, ele.data().precio, ele.data().marca)}>Actualizar</button></td>          
            </tr>

              ))

            

          }

        </tbody>
      </table>   
      <section style={{ display: show ? "block" : "none" }}>
        <div  className="modal">
          <div className="modal-content">
          <input onChange={handleChange} name='nombre' type="text" defaultValue={dataCapturada.nombre} placeholder='nombre' />
          <input onChange={handleChange} name='categoria' type="text" defaultValue={dataCapturada.categoria} placeholder='categoria' />
          <input onChange={handleChange} name='precio' type="text" defaultValue={dataCapturada.precio} placeholder='precio' />
          <input onChange={handleChange} name='marca' type="text" defaultValue={dataCapturada.marca} placeholder='marca' />
          <div>
          <button className='btnUpdate' onClick={() =>btnUpdate(id) }>Actualizar</button>
          <button className='btnCancelar' onClick={closeModal} >Cancelar</button>
          </div>
           
          </div>
        </div>
      </section>  

  </section>
  </> 
   
  )
}

export default Tools;
