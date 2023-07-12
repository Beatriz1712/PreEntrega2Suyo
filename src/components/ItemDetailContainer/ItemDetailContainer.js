import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    useEffect(() => {

    })
  return (
    <div>
        {item && <ItemDetail item={item}/>}

    </div>
  )
}

export default ItemDetailContainer