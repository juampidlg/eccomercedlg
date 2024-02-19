import Navbar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import ItemCarritoContainer from './components/itemCarritoContainer/ItemCarritoContainer';
import FormContainer from './components/formContainer/FormContainer';

function App() {  

  return (   
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/rubro/:rubroId' element={<ItemListContainer />} />
              <Route path='/carrito' element={<ItemCarritoContainer />} />
              <Route path='/formulario' element={<FormContainer />} />
              <Route path = '*' element={<h1>404</h1>} />
            </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );    
  
    
  
}

export default App;
