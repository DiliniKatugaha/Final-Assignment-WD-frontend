import React from 'react';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate();

    const handleSubmit = (buttonName) => {
        if (buttonName === 'signup') {
            navigate("/home/signup");
        } else if (buttonName === 'signin') {
            navigate("/home/signin");
        }
    };


    return ( 
    <div class="background">
      
        <img className='imgh' src={require ('../../assets/1.jpg')}  alt="qdas"  />
        <div className="homeComponent " >
            <div  className="container">
            <img className='imgn' src={require ('../../assets/logo.png')}  alt="qdas"  />
            <h2 className=' text text-start fs-1 text-success text-center text my-4 p-1'>Red Rooster <span className="hSpan">Farm</span></h2>
            <p className='fs-4 fw-semibold text-success text-center my-3'>Welcome to the organic food store!</p>
                <p>PROVIDING QUALITY PRODUCTS</p>
                <p class="fs-3 fw-semibold">ORGANIC FRUITS &VEGETABLE</p>
                <p  class="fs-7">100% HEALTHY &AFFORDABLE</p>
            </div>
            <div className="btn">
            <button type="button" class="btn btn-outline-danger " onClick={() => handleSubmit('signup')} name='signup'>Sign Up</button>
            <button type="button" class="btn btn-outline-danger " onClick={() => handleSubmit('signin')} name='signin'>Sign In</button>

            </div>
        </div>
    </div>
    
     );
}
 
export default Home;