import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Curator } from './Pages/curator';
import { Participant } from './Pages/participant';
import { Registration } from './Pages/registraion';

import './App.css';

function App() {
  return (
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Registration />}/>
            <Route path="/participant" element={<Participant />}/>
            <Route path="/curator" element={<Curator />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;