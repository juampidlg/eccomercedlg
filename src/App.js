import Navbar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <ItemListContainer saludo ={'Bienvenidos'}/>
    
    </>
    
  );
}

export default App;
