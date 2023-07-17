import ItemList from "../ItemList/ItemList";
import  {pedirProductos} from "../pedirProductos";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams().category
   console.log(category);
  useEffect(() => {
    pedirProductos()
      .then((resp) => {
        setProductos(resp);
      })
      .catch(error => {
        console.error(error);
      })
  },[category])


  return (
    <div className="itemListContainer">
      <h2 className='main-title'>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )

};
export default ItemListContainer;