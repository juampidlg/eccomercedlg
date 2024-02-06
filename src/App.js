import Navbar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (   
    <div className="App">
    <BrowserRouter>
        <Navbar />      
      {/*<ItemListContainer saludo ={'Bienvenidos a e-market De La Garma'}/>*/}
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path = '*' element={<h1>404</h1>} />
        </Routes>
  </BrowserRouter>
    </div>
  );    
  
    
  
}

export default App;
