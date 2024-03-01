
import { createContext, useContext, useState} from "react";



const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    
    const [ordenes, setOrdenes] = useState([])

    const [totalCarrito, setTotalCarrito] = useState(0);

    const [unidadesCarrito, setUnidadesCarrito] = useState(0);    

    
    
    return (
        <AppContext.Provider value={{ carrito, setCarrito, totalCarrito, setTotalCarrito, unidadesCarrito, setUnidadesCarrito, ordenes, setOrdenes}}>
            {props.children}
        </AppContext.Provider>
    );
};
