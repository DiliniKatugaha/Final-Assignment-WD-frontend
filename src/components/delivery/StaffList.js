import { useEffect, useState } from "react";
import axios from 'axios'
import '../../css/delivery/StaffList.css'


const StaffList = () => {

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        getStaff();
    }, [])

    const getStaff = async () => {
        try {
            const response = await axios.post('/delivery/getstaff');
            const staffData = response.data;
            if (Array.isArray(staffData)) {
                setStaff(staffData);
            } else {
                console.error("Received data is not an array:", staffData);
            }
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    }

    return ( 
        <div className="staffListComponent">
            <div className="addStaffHeading">
                 <h1>Staff List</h1>
            </div>
           
            <div className="staff">
                <table className="table">
                    <thead className="th">
                        <tr>
                            <th>Employee Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((staffMember) => (
                            <tr className="trr" key={staffMember.id}>
                                <td className="ch">{staffMember.name}</td>
                                <td>{staffMember.contact}</td>
                                <td className="cs">{staffMember.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default StaffList ;