import { useState } from 'react';
import '../../css/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signinData, setSigninData] = useState({
        email: undefined,
        password: undefined
    });

    const handleValues = (e) => {
        setSigninData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/user/signindata', signinData)
            .then(response => {
                console.log(response.data)
                const role = response.data;
                console.log(role)
                if (role.role === 'Customer') {
                    navigate("/home/signin/homepage");
                } else if (role.role === 'Admin') {
                    navigate("/admin/addemployee");
                } else if (role.role === 'Delivery Manager') {
                    navigate("/AssignDelivery /addstaff");
                } else if (role === 'Farm Manager') {
                    navigate("/farm");
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Email or Password is incorrect. Please try again!');
            });
    };

    return (
        <div className="loginFormContainer">
            <div className="loginHeading">
                <h1>Sign In</h1>
            </div>

            <form className="loginForm my-4">
                <div className="inp"></div>

                <label htmlFor="email" className="inpLable">Email Address</label>
                <input className="finp" type="email" value={signinData.email || ''} onChange={handleValues} name="email" id="username" />

                <label className="inpLable" htmlFor="password">Password</label>
                <input className="finp" type="password" value={signinData.password || ''} onChange={handleValues} name="password" id="password" />

                <div className="form-check form-switch my-4 rCheck text-start">
                    <input className="form-check-input" role="switch" type="checkbox" name="rChek" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remember Me</label>
                </div>

                <button className="admin" type="submit" onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    );
};

export default Login;
