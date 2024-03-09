import { useState } from 'react';
import '../../css/Admin/AddEmployee.css'
import axios from 'axios';


const AddEmployee = () => {
    const [employeeData,setEmployeeData] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
        role:undefined

    });

    const handleValues = (e)=>{
        setEmployeeData((prev)=>{return {...prev,[e.target.name]:e.target.value} })
        console.log(employeeData)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('/employee/addemployee',employeeData).then(()=>{
            window.location.reload()
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('Something is wrong. Please try again!');
        });
       
    }

    return (
        <div className="addEmployeeComponent">
            <div className="addEmployee">
                <h1>Add New Employees</h1>
            </div>
            <div className="addEmployeeForm">
                <form >
                        <table className='addEmployeetable'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="username">Employee Name</label></td>
                                    <td><input type="text" value={employeeData.username||''} onChange={handleValues} name="username" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email Address</label></td>
                                    <td><input type="email" value={employeeData.email||''} onChange={handleValues} name="email" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td><input type="password" value={employeeData.password||''} onChange={handleValues} name="password" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="role">Employee Role</label></td>
                                    <td><input type="role" value={employeeData.role||''} onChange={handleValues} name="role" id="" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='employeeSubmit' type='submit'  onClick={handleSubmit} >Submit</button>
                </form>
            </div>

        </div>
      );
}
 
export default AddEmployee;