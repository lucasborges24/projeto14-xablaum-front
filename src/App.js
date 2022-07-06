import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Header from './shared/Header';

function App() {

  const [userToken, setUserToken] = useState({})

  return (
    <BrowserRouter>
      <Header userToken={userToken}/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
