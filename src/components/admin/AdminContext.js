import React, {useState,useContext} from 'react';




const AdminContext  = React.createContext();
const AdminContextUpdate = React.createContext()


export const useAdminContext  =()=>{
    return useContext(AdminContext)
}

export const useAdminContextUpdate  =()=>{
    return useContext(AdminContextUpdate)
}


const AdminProvider= ({children}) => {
    const [admins, setAdmins] = useState([])

    return (  
        <AdminContext.Provider value={admins}>
            <AdminContextUpdate.Provider value={setAdmins}>
                {children}
            </AdminContextUpdate.Provider>
        </AdminContext.Provider>
    );
}
 
export default AdminProvider;