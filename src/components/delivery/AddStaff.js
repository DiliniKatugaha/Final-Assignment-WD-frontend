import { useState } from 'react';
import '../../css/delivery/delivery.css'
import axios from 'axios';
const AddStaff = () => {
 
    const [staffData,setStaffData] = useState({
        name:undefined,
        nic:undefined,
        contact_number:undefined,
        email:undefined

    });

    const handleValues = (e)=>{
        setStaffData((prev)=>{return {...prev,[e.target.name]:e.target.value} })
        console.log(staffData)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('delivery/addstaff',staffData).then(()=>{
            window.location.reload()
        })
       
    }

    return (
        <div className="addStaffContainer">
            <div className="addStaffHeading">
                <h1 className='head'>Add New Delivery Staff Member</h1>
            </div>
            <div className="addStaffForm">
                <form >
                        <table className='addStafftable'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="name">Employee Name</label></td>
                                    <td><input type="text" value={staffData.name||''} onChange={handleValues} name="name" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="nic">NIC Number</label></td>
                                    <td><input type="text" value={staffData.nic||''} onChange={handleValues} name="nic" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="contact_number">Contact Number</label></td>
                                    <td><input type="tel" value={staffData.contact_number||''} onChange={handleValues} name="contact_number" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email Address</label></td>
                                    <td><input type="email" value={staffData.email||''} onChange={handleValues} name="email" id="" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='staffSubmit' type='submit'  onClick={handleSubmit} >Submit</button>
                </form>
            </div>
        </div>
      );
}
 
export default AddStaff;