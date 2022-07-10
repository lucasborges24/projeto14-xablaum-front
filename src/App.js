import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Header from "./shared/Header";
import Produto from "./pages/Produto";
import UserContext from "./contexts/UserContext";
import HomeScreen from './pages/HomeScreen';

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    localStorage.setItem('token', userToken);
  }, [userToken]);
  const URL = 'https://xablaum.herokuapp.com';

  return (
    <UserContext.Provider
      value={{
        URL,
        userToken,
        setUserToken,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
