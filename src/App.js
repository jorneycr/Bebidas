import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModelContext';


function App() {
  return (
    <>
      {/* para que los datos flujan asi abajo el provider del context debe rodear todo */}
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
            <Header />
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>
              <ListaRecetas />
            </div>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
    </>
  );
}

export default App;
