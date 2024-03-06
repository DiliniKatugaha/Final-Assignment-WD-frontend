import { useEffect, useState } from "react";
import axios from 'axios'
import '../../css/delivery/StaffList.css'

const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getEmployee();
    }, [])

    const getEmployee = async () => {
        try {
            const response = await axios.post('/employee/getemployee');
            const employeeData = response.data;
            if (Array.isArray(employeeData)) {
                setEmployee(employeeData);
            } else {
                console.error("Received data is not an array:", employeeData);
            }
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    }

    return ( 
        <div className="staffListComponent">
            <div className="addStaffHeading">
                <h1>Employee List</h1>
            </div>
            
            <div className="staff">
                <table className="table">
                    <thead className="th">
                        <tr>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((employeeMember) => (
                            <tr className="trr" key={employeeMember.id}>
                                <td className="ch">{employeeMember.username}</td>
                                <td className="text-lowercase">{employeeMember.email}</td>
                                <td className="cs">{employeeMember.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default EmployeeList;