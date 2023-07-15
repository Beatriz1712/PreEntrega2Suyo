import { useState, useEffect } from 'react';
// eslint-disable-next-line
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirProductoById } from '../pedirProductos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ([itemId]) => {

    const [item, setItem] = useState(null);
    const id= useParams().id;
    console.log(id);

    useEffect(() => {
      pedirProductoById(Number(id))
      .then(response => {
        setItem(response)
      })
      .catch(error => {
        console.error(error)
      })
    },[])

  return (
    <div>
        {item && <ItemDetail item={2}/>}

    </div>
  )
}

export default ItemDetailContainer