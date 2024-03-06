import { useEffect, useState } from "react";
import axios from 'axios';
import '../../css/delivery/StaffList.css';

const AssignDelivery = () => {
    const [details, setDetails] = useState([]);
    const [staff , setStaff] = useState([])

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        try {
            const response = await axios.post('/delivery/getdetails');
            const { details, staff} = response.data;
            console.log(details)
            console.log(staff)
            if (Array.isArray(details)) {
                setDetails(details);
            }

            if (Array.isArray(staff)) {
                setStaff(staff);
            } else {
                console.error("Received data is not in the expected format:", response.data);
            }
            } catch (error) {
                console.error("Error fetching staff data:", error);
            }
    }
    


    return ( 
        <div className="nav">
            <div className="assignDeliveryContainer">
            <div className="addStaffHeading">
                <h1>Delivery Details</h1>
            </div>
                
                <div className="staff">
                {details && details.length > 0 && (
                    <table className="table">
                        <thead className="th">
                            <tr>
                                <th>Customer Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Amount</th>
                                <th>Customer Address</th>
                                <th>City</th>
                                <th>ZIP Code</th>
                                <th>Contact Number</th>
                                <th>Payment Method</th>
                                <th>Assign Delivery Employee</th>
                            </tr>
                        </thead>
                        <tbody>
                        {details.map((deliveryData) => (
                                <tr className="trr" key={deliveryData.id}>
                                    <td>{deliveryData.customer_name}</td>
                                    <td>{deliveryData.item_name}</td>
                                    <td>{deliveryData.quantity}</td>
                                    <td>{deliveryData.unit_price}</td>
                                    <td>{deliveryData.total_amount}</td>
                                    <td>{deliveryData.address}</td>
                                    <td>{deliveryData.city}</td>
                                    <td>{deliveryData.zipcode}</td>
                                    <td>{deliveryData.contact_number}</td>
                                    <td>{deliveryData.payment_method}</td>
                                    <td>
                                        <select className="staff-dropdown">
                                        {staff.map((staffMember, index) => (
                                            <option key={index} className="staff-option">{staffMember.name}</option>
                                        ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                </div>
            </div>
        </div>
    );
}

export default AssignDelivery;
