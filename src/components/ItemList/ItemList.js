 

import Item from '../Item/Item'
//presentacional-check
 const ItemList = ({productos}) => {
 return (
    <div className='container'>
        
        <div>
           {
            productos.length > 0 &&
            productos.map((prod )=> {
              return (
                    <Item  producto={prod} key={prod.id}/>
                    )
            }
           )}
        </div>

    </div>
  )
}

export default ItemList;

/*
        <div>
           {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
        */
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