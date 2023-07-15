//import ItemCount from "../ItemCount/ItemCount"
// eslint-disable-next-line
import ItemList from "../ItemList/ItemList";
import  {pedirProductos} from "../pedirProductos";//pedir con promesa
import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  console.log(productos);
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirProductos()
      .then((resp) => {
        setProductos(resp);
      })
      .catch(error => {
        console.error(error);
      })
  },[categoria])


  return (
    <div className="itemListContainer">
      <h2 className='main-title'>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )

  /*return (
    <div>
        <h1 style ={{fontSize:"2.5rem",color:"black",margin:"20px"}}>{greeting}</h1>
        
        <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log("Cantidad agregada")} />
    </div>
  )*/

};
export default ItemListContainer;