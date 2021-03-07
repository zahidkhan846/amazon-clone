import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
