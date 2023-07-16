import { useParams } from 'react-router-dom'
import Data from "../data/data.json"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Category = () => {
  const {categoryid} =useParams()
  const CategoryFilter = Data.filter(producto => producto.category === categoryid)
  
    return (
    <div>
        <ItemListContainer data={CategoryFilter}/>  
    </div>
  )
}

export default Category