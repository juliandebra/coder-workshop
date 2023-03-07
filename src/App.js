import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Checkout from './Components/Checkout';
import { Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartWidget/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
