import { useParams } from 'react-router-dom'
import Data from "../data/data.json"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Category = () => {
  const {category} =useParams()
 // const CategoryFilter = Data.filter(producto => producto.category === category)
  const CategoryFilter = Data.filter(producto=> producto.category === category.category)
    return (
    <div>
        <ItemListContainer data={CategoryFilter}/>  
    </div>
  )
}

export default Category