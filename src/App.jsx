import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import ItemDetailContainer from './containers/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Productos' element={<ItemListContainer/>}></Route>
        <Route exact path="/category/:category" element={<ItemListContainer/>}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route exact path="/cart" element={<Cart />} />
       
        
      </Routes>
    
    
    </BrowserRouter>
  );
};

export default App;
