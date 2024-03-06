import { useState } from 'react';
import '../../css/Signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios';



const Signup = () => {
    
        const [signupData,setSignupData] = useState({
            username:undefined,
            email:undefined,
            password:undefined,
            contact:undefined,
            address:undefined,
            province:undefined,
            district:undefined,
            city:undefined
    
        });
    
        const handleValues = (e)=>{
            setSignupData((prev)=>{return {...prev,[e.target.name]:e.target.value} })
            console.log(signupData)
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
    
    
            axios.post('/user/signupdata',signupData).then(()=>{
                window.location.reload()
                alert('You have signed up successully! Now click Already have an account and Sign in !');
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again later.');
            });
           
        }
    

    return ( 
        <div className="signupComponent">
            <h1>Sign Up</h1>

            <form action="/signup" method="post" class="form">
                <div className="inputs">
                <div class="personal">
                    <h5 className='hf'>Personal Information</h5>
                    <label class="sign" htmlFor="username">Username:</label>
                    <input className="inp" type="text" value={signupData.username||''} onChange={handleValues} id="" name="username" required />
    
                    <label class="sign" htmlFor="email">Email Address:</label>
                    <input className="inp" type="email" value={signupData.email||''} onChange={handleValues} id="" name="email" required />

                    <label class="sign" htmlFor="password">Password:</label>
                    <input className="inp" type="password" value={signupData.password||''} onChange={handleValues} id="" name="password" required />

                    <label class="sign" htmlFor="contact">Contact Number:</label>
                    <input className="inp" type="contact" value={signupData.contact||''} onChange={handleValues} id="" name="contact" required />
                </div>

                <div class="delivery">
                    <h5 className='hf' >Delivery Information</h5>
                    <label class="sign" htmlFor="address">Address:</label>
                    <input className="inp" type="address" value={signupData.address||''} onChange={handleValues} id="" name="address" required />

                    <label class="sign" htmlFor="province">Province:</label>
                    <input className="inp" type="province" value={signupData.province||''} onChange={handleValues} id="" name="province" required />

                    <label class="sign" htmlFor="district">District:</label>
                    <input className="inp" type="district" value={signupData.district||''} onChange={handleValues} id="" name="district" required />

                    <label class="sign" htmlFor="city">City:</label>
                    <input className="inp" type="city" value={signupData.city||''} onChange={handleValues} id="" name="city" required />
                </div>

                </div>
                
                <button class="admin" type="submit" onClick={handleSubmit}>Sign Up</button>            

        </form>

        <div className="link">Already have an account?<Link to={'/home/signin'}>Sign In</Link></div>
        </div>
     );
}
 
export default Signup;