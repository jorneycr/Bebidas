import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';


function App() {
  return (
    <>
    {/* para que los datos flujan asi abajo el provider del context debe rodear todo */}
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas/>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
    </>
  );
}

export default App;
