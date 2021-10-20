import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    console.log(cartList);
    const agregarItem = (item, quantity) => {
        if (isInCart(item.id)) {
          const updateQty = [...cartList]; 

          updateQty.map((element) => {
            if (element.item.id === item.id) {
              element.quantity += quantity;
            }
          });
          setCartList(updateQty); 
          window.sessionStorage.setItem("cart", JSON.stringify(updateQty));
        } else {
          const carro = [...cartList, { item, quantity }];
          setCartList(carro); 
          window.sessionStorage.setItem("cart", JSON.stringify(carro));
        }
      };
    
      const isInCart = (id) => cartList.find((element) => element.item.id === id);
    
      const clearCart = () => setCartList([]);
    
      const removeItem = (id) => {
        const cartFilter = cartList.filter((element) => element.item.id !== id);
        setCartList(cartFilter);
      };
    
      const cartProducts = cartList.reduce(
        (acc, product) => (acc += product.quantity),
        0
      );
    
      return (
        <CartContext.Provider
          value={{
            cartList,
            agregarItem,
            setCartList,
            clearCart,
            removeItem,
            cartProducts,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };
    