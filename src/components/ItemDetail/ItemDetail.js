//import  useState  from 'react';
//import ItemCount from '../ItemCount/ItemCount'

//ojito
const ItemDetail = ({item}) => {

//car
  return (
    <div className='container'>
        <div className='producto-detalle'>
                   <img src={item.image} alt={item.titulo}/>
                    <div>
                            <h3 className='titulo'>{item.titulo}</h3> 
                            <p className='precio'>{item.precio}</p>
                            <p className='decripcion'>{item.description}</p> 
                            <p className='categoria'> Categoria:{item.category}</p>
                            
                            {/* <ItemCount
                                cantidad= {cantidad}
                                handleRestar={handleRestar }
                                handleSumar={handleSumar }
                                
                            /> */}
                   </div>
                
        </div>


    </div>
  )
}

export default ItemDetail


/*<ItemCount
                                cantidad={cantidad}
                                handleSumar={handleSumar}
                                handleRestar={handleRestar}
                                handleAgregar={() => {agregarAlCarrito(item, cantidad)}}
                            />
                            */


                            /*handleAgregar={() => {agregarAlCarrito(item, cantidad)}}*/