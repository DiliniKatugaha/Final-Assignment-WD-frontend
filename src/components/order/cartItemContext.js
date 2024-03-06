import React, {useState,useContext} from 'react';




const CartContext  = React.createContext();
const CartContextUpdate = React.createContext()


export const useCartContext  =()=>{
    return useContext(CartContext)
}

export const useCartContextUpdate  =()=>{
    return useContext(CartContextUpdate)
}


const CartProvider= ({children}) => {
    const [cartItems, setCartItems] = useState([])

    return (  
        <CartContext.Provider value={cartItems}>
            <CartContextUpdate.Provider value={setCartItems}>
                {children}
            </CartContextUpdate.Provider>
        </CartContext.Provider>
    );
}
 
export default CartProvider;