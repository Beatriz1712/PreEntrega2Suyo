import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 const Item = ({producto}) => {
  return (
    /*
    <div className='producto' >
      <img src = {producto.image} alt= {producto.titulo}/>
        <div>
            <h4>{producto.titulo}</h4> 
            <p>${producto.precio}</p>
            <p>{producto.description}</p> 
        </div>
        </div>
*/
  <div className='row row-cols-4'>
    <Card style={{ borderRadius:"1rem",  width: '20rem',padding:"1rem",color:"black" }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.titulo} </Card.Title>
        
        <Card.Text>
          {producto.description}
        </Card.Text>
        <Card.Text>${producto.precio}</Card.Text>
        <Button variant="primary">Descripcion</Button>
      </Card.Body>
    </Card>

 </div>
  )
}
export default Item;

//<Card.Number>{producto.precio}</Card.Number>