import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos  a nuestra web"/>
    </>
  );
};

export default App;
