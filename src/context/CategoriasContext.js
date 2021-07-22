import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//el createContext(); crear el context en Categoria
//esto es solo la referencia al context
export const CategoriasContext = createContext();


//siempre que se crear el context se debe crear crear un provider, 
//El provider es donde se encuentran las funciones y los states
//siempre toma los props
const CategoriasProvider = (props) => {

    //crear el state del context aqui
    const [categorias, setCategorias] = useState([]);

    //useEfect se corre una vez que el componente o el context se inicia
    //ejecutar llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, [])


    return (
        <CategoriasContext.Provider
            // Aqui se pasa los valores que va estar disponible en todos los componentes
            value={{
                categorias
            }}
        >
            {/* de esta forma se pasan los datos a los hijos */}
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;