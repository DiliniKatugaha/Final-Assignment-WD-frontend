import { useEffect, useState } from 'react'
import axios from 'axios';
import PermisionList from './PermisionList';

const Admin = () => {


    useEffect(() => {
        getUsers();
    }, [])

    const [userState, setUserState] = useState();
    const getUsers = async () => {
        const userList = await axios('/admin/getUsers').then((data) => {
            return data.data
        }).catch((err) => {
            console.log(err)
        })
        setUserState(userList);
    }

    const form = document.querySelector('form');
    const handleSubmit = async (event) => {
        event.preventDefault()

        const accessList = {
            delivery_module: 'denied',
            sells_module: 'denied',
            stock_module: 'denied',
            production_module: 'denied',
            report_module: 'denied',
            order: 'denied'
        }
        const payload = new FormData(form)
        const plainText = Object.fromEntries(payload.entries())

        const updatedAccessState = { ...accessList };
        for (const prop in plainText) {
            if (plainText.hasOwnProperty(prop)) {
                updatedAccessState[prop] = plainText[prop];
            }
        }

       axios.post('/admin/setpermision', updatedAccessState).then((data)=>{
        window.location.reload()
       })

    }

    return (
        <div className="adminContainer">

            <div className="updatePermisionContainer">

                <h1>update Permision</h1>

                <div className="moduleList">
                    <form >

                        <select name="user_id" id="" className="userList">
                            {userState && userState.map((user) => {
                                return (
                                    <option key={user.user_id} value={user.user_id}>{user.user_name}</option>
                                )
                            })}
                        </select>

                        <label htmlFor="delivery_module">Delivery</label>
                        <input type="checkbox" value={'granted'} name="delivery_module" id="" />

                        <label htmlFor="stock_module">Stock</label>
                        <input type="checkbox" value={'granted'} name="stock_module" id="" />

                        <label htmlFor="order_module">Order</label>
                        <input type="checkbox" value={'granted'} name="order_module" id="" />

                        <label htmlFor="sells_module">Sells</label>
                        <input type="checkbox" value={'granted'} name="sells_module" id="" />

                        <label htmlFor="production_module">Production</label>
                        <input type="checkbox" value={'granted'} name="production_module" id="" />

                        <label htmlFor="report_module">Report</label>
                        <input type="checkbox" value={'granted'} name="report_module" id="" />

                        <button type='submit' onClick={handleSubmit}> Submit </button>
                    </form>
                </div>



            </div>

            <div className="permisionContainer">

                <h1>View Permision</h1>

                <table>
                    <tbody>

                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Delivery</th>
                            <th>Stock</th>
                            <th>Order</th>
                            <th>Sells</th>
                            <th>Production</th>
                            <th>Report</th>
                        </tr>
                        {userState && <PermisionList userList={userState} />}

                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default Admin;