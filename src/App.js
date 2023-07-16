import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/Contacto';
import Category from './pages/Category';
function App() {
  return (
    <div className='App'>
         
       <BrowserRouter>
       <NavBar /> 
          
          <Routes>
         
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/contacto' element={<Contacto/>} />
            <Route exact path='/productos' element={<ItemListContainer />}/>
            <Route exact path='/Item/:id' element={<ItemDetailContainer /> }/>
            <Route exact path='/category' element={<Category/>} />
          </Routes>
          
      </BrowserRouter>  
   </div>
  );
}

export default App;

