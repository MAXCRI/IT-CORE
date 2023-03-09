import { createContext, useState } from "react";
export const CartContex = createContext (null);

export const ShoppingCartProvider = ({children}) => {
const [cart, setCart] = useState ([]);
    
return(
<CartContex.Provider value={[cart, setCart]}>
    {children}
</CartContex.Provider>

);

};

