import NavBar from "./components/NavBar";
import React, { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <CartContextProvider>
        <Router>
          <NavBar />
          {/* Se muestra el mensaje de "cargando..." hasta que se recupere la informacion de la promesa y se vuelva a poner en false */}
          {loading && (
            <h3 >cargando...</h3>
          )}
          <Switch>
            <Route exact path="/">
              <ItemListContainer
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            </Route>
            <Route path="/categoria/:id">
              <ItemListContainer
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            </Route>
            
            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
            
          </Switch>

          {error && <div>{error}</div>}
        </Router>
      </CartContextProvider>
    </>
  );
}
export default App;
