//import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import  pedirProductos from "../pedirProductos";
import { useState,useEffect } from "react"

const ItemListContainer = () => {
 
        const [productos,setProductos] = useState([]);
         
      useEffect(() => {
          pedirProductos()
           .then((res) => {
                setProductos (res);
           })
      }, [])

       
        return (
          <div>
           <ItemList productos={productos}/>
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