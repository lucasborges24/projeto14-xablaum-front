import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import HomeScreen from "./pages/Home/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import CartScreen from "./pages/CartScreen";

import UserContext from "./contexts/UserContext";

import Header from "./shared/Header";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (userToken) {
      localStorage.setItem("token", userToken);
    } else {
      localStorage.setItem("token", "");
    }
  }, [userToken]);
  const URL = "https://xablaum.herokuapp.com";

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
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SignupScreen />} />
          <Route path="/produto/:productId" element={<ProductScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
