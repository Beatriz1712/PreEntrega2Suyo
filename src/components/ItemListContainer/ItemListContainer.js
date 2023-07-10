import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({greeting}) => {




    
  return (
    <div>
        <h1 style ={{fontSize:"2.5rem",color:"black",margin:"20px"}}>{greeting}</h1>
        
        <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log("Cantidad agregada")} />
    </div>
  )
}

export default ItemListContainer