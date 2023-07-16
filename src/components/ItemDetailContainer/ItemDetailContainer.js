import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirProductoById } from '../pedirProductos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id}= useParams()
    // FALTABAN LAS LLAVES {} EN ID 👉 {id}

    useEffect(() => {
      pedirProductoById(id)
      .then(response => {
        setItem(response)
      })
      .catch(error => {
        console.error(error)
      })
    },[id])

  return (
    <div>
        {item && <ItemDetail item={item}/>}
        {/* FALTABA PASAR EL ESTADO QUE AHORA YA ESTA CARGADO CON LO QUE TRAE LA PROMESA, ESTABA PASANDO UN NUMERO */}

    </div>
  )
}

export default ItemDetailContainer