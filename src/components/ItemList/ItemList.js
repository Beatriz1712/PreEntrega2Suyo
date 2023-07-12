import React from 'react'
import Item from '../Item/Item'

 const ItemList = ({productos}) => {
 return (
    <div className='container'>
        <h2 className='main-title'>Productos</h2>

        <div>
           {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>

         

    </div>
  )
}

export default ItemList;

/*
{
  productos.length > 0 &&
  productos.map((producto) => {
      return(
        <Item producto={producto} key = {producto.id} />
      )
        
      
  })

} 
*/      