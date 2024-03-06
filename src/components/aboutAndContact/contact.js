import { useState } from 'react';
import '../../css/aboutAndContact/Contact.css'
import axios from 'axios';

const Contact = () => {

    const [contactData,setContactData] = useState({
        username:undefined,
        email:undefined,
        message:undefined

    });

    const handleValues = (e)=>{
        setContactData((prev)=>{return {...prev,[e.target.name]:e.target.value} })
        console.log(contactData)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();


        axios.post('message/customermessages',contactData).then(()=>{
            window.location.reload()
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        });
       
    }


    return (  
        <div className="contactComponent">
        
            <div className='contact'>
                <div className='address'>
                    <div className="imgContainer">
                        <img className='imgc' src={require ('../../assets/location.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc'>Red Rooster Farm vzw, </p>
                        <p className='pc'>Groenendaal street 12, </p>
                        <p className='pc'>1560, Hoeilaart, Belgium</p>
                    </div>
                </div>

                <div className='phone'>
                    <div className="imgContainer">
                      <img className='imgc' src={require ('../../assets/phone.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc'>+94 768 645 584</p>
                        <p className='pc'>+94 768 645 585</p>
                    </div>
                </div>
                <div className='email'>
                    <div className="imgContainer">
                        <img className='imgc' src={require ('../../assets/email.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc'>redrooster@gmail.com</p>
                        <p className='pc'>redroosterfarm@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="write">
                <h1>Or write us</h1>
                <form>
                <label class="sign" htmlFor="username">Username:</label>
                    <input className='inpc' type="text" value={contactData.username||''} onChange={handleValues} id="" name="username" required />

                    <label class="sign" htmlFor="email">Email Address:</label>
                    <input className='inpc' type="email" value={contactData.email||''} onChange={handleValues} id="" name="email" required />

                    <label class="sign" htmlFor="message">Enter your message:</label>
                    {/* <input className='inpc' type="text" id="message" name="message" required /> */}
                    <textarea className='inp' value={contactData.message||''} onChange={handleValues} name="message" id="" cols="20" rows="6"></textarea>
                </form>
                <button class="submit" type="submit" onClick={handleSubmit}>Submit</button>
            </div>




        </div>
    );
}
 
export default Contact;