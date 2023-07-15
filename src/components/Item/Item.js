// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import{Link} from 'react-router-dom';


//info de cada producto
 const Item = ({producto}) => {
   
  return (
       <div className='producto' >
        <img src = {producto.image} alt= {producto.titulo}/>
          <div>
              <h4>{producto.titulo}</h4> 
              <p>Precio: ${producto.precio}</p>
              <p>Categoria: {producto.category}</p>
              {/*<p>{producto.description}</p>*/}
              <Link className='Ver-mas' to={`/Item`}>Ver más</Link>
          </div>
     </div>

    )
    }
    export default Item; 
      
          /*<Headers HeadersH1='Detalles del producto'/>*/
          /*
            <div className='row row-cols-4'>
              <Card style={{ borderRadius:"1rem",  width: '20rem',padding:"1rem",color:"black" }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.titulo} </Card.Title>
                  
                  <Card.Text>
                    {producto.description}
                  </Card.Text>
                  <Card.Text>${producto.precio}</Card.Text>
                  <Button href='#'variant="primary">Descripcion</Button>
                </Card.Body>
              </Card>

            </div>
          */
     
 

//<Card.Number>{producto.precio}</Card.Number>