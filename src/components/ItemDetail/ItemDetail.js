import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='container'>
        <div className='producto-detalle'>
                   <img src={item.image} alt={item.titulo}/>
                    <div>
                            <h3 className='titulo'>{producto.titulo}</h3> 
                            <p className='precio'>{producto.precio}</p>
                            <p className='decripcion'>{producto.description}</p> 
                            <ItemCount
                                cantidad={cantidad}
                                handleSumar={handleSumar}
                                handleRestar={handleRestar}
                                handleAgregar={() => {agregarAlCarrito(item, cantidad)}}
                            />
                   </div>
                
        </div>


    </div>
  )
}

export default ItemDetail