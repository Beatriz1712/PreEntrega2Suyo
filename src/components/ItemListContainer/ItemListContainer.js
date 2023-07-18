import ItemList from "../ItemList/ItemList";
import  {pedirProductos} from "../pedirProductos";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Data from "../../data/data.json";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams()
  const CategoryFilter = Data.filter(producto => producto.category === category)
  console.log(category);
   
  useEffect(() => {
    pedirProductos()
      .then((resp) => {
        setProductos(resp);
      })
      .catch(error => {
        console.error(error);
      })
  },[CategoryFilter])


  return (
    <div className="itemListContainer">
      <h2 className='main-title'>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )

};
export default ItemListContainer;