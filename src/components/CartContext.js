import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updateQty = [...cart];
            updateQty.map((element) => {
                if (element.item.id === item.id) {
                  element.quantity += quantity;
                }
              });
              setCart(updateQty);
            } else {
              setCart([...cart, { item, quantity }]);
            }
        };

        const isInCart = (id) => {
            cart.find((element) => element.item.id === id);
          };
        
        const clearCart = () => setCart([]);

        const removeItem = (id) => {
            const cartFilter = cart.filter((element) => element.item.id !== id);
            setCart(cartFilter);
          };
        
          console.log("carrito", cart);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
