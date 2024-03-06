import { useEffect, useState } from "react";
import axios from 'axios'
import '../../css/delivery/StaffList.css'

const CustomerList = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        getCustomer();
    }, [])

    const getCustomer = async () => {
        try {
            const response = await axios.post('/user/customerdata');
            const customerData = response.data;
            if (Array.isArray(customerData)) {
                setCustomer(customerData);
            } else {
                console.error("Received data is not an array:", customerData);
            }
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    }

    return ( 
        <div className="staffListComponent">
            <div className="addStaffHeading">
                <h1>Customer List</h1>
            </div>
            
            <div className="staff">
                <table className="table">
                    <thead className="th">
                        <tr>
                            <th>Customer Name</th>
                            <th>Email Address</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Province</th>
                            <th>District</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((customer) => (
                            <tr className="trr" key={customer.id}>
                                <td className="ch">{customer.username}</td>
                                <td className="text-lowercase">{customer.email}</td>
                                <td>{customer.contact}</td>
                                <td className="ch">{customer.address}</td>
                                <td className="ch">{customer.province}</td>
                                <td className="ch">{customer.district}</td>
                                <td className="ch">{customer.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default CustomerList;