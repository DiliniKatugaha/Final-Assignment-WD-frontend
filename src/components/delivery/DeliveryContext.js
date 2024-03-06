import React, {useState,useContext} from 'react';




const DeliveryContext  = React.createContext();
const DeliveryContextUpdate = React.createContext()


export const useDeliveryContext  =()=>{
    return useContext(DeliveryContext)
}

export const useDeliveryContextUpdate  =()=>{
    return useContext(DeliveryContextUpdate)
}


const DelivetyProvider= ({children}) => {
    const [deliveryItems, setDeliveryItems] = useState([])

    return (  
        <DeliveryContext.Provider value={deliveryItems}>
            <DeliveryContextUpdate.Provider value={setDeliveryItems}>
                {children}
            </DeliveryContextUpdate.Provider>
        </DeliveryContext.Provider>
    );
}
 
export default DelivetyProvider;