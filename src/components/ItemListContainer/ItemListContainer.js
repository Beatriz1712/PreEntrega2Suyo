//import ItemCount from "../ItemCount/ItemCount"
import data from"../data/productos.json"
import { useState,useEffect } from "react"

const ItemListContainer = () => {
 
        const [productos,setProductos] = useState([]);
        console.log(productos);

        const pedirProductos = () => {
          return new Promise((resolve, reject) => {
            resolve(data)
          })
        } 
      useEffect(() => {
          pedirProductos()
           .then((res) => {
                setProductos (res);
           })
      }, [])

       
        return (
          <div>
            {
              productos.length > 0 &&
              <div>
                <img src = {productos[0].image} alt= {productos[0].titulo}></img>
                 <h2>{productos[0].titulo}</h2> 
                 <p>{productos[0].precio}</p>
                 <p>{productos[0].description}</p>
              </div>
            }       
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