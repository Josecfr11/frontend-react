// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Alumnos from './pages/alumnos/Alumnos'
import Recibos from './pages/recibos/Recibos'
import Inscripciones from './pages/inscripciones/Inscripciones'
import NotFound from './pages/notFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Alumnos />} /> {/* Ruta raíz anidada */}
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="recibos" element={<Recibos />} />
          <Route path="inscripciones" element={<Inscripciones />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
