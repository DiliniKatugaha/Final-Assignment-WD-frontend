// rootLayoutAdmin.js
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const RootLayoutAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  }

  // const isLoginPage = location.pathname === '/home/signin';
  // const isSignupPage = location.pathname === '/home/signup';
  // const isHomePage = location.pathname === "/";

  return (
    <div className="rootLayout">
      {/* {!isLoginPage && !isSignupPage && !isHomePage && ( */}
        <div className="Nav">
          <div>
            <img className='imgn' src={require('../../assets/logo.png')} alt="qdas" />
          </div>
          <div className="heading ">
            <h2 className=' text text-start fs-1 text my-3 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            <h3 className='text text-start fs-4 text my-4 p-1'> Admin Module </h3>
          </div>

          <div className="navIcons  ">
            <Link to={'addemployee'} className='home'>Add Employee</Link>
            <Link to={'employeedetails'} className="home"> Employee Details </Link>
            <Link to={'customerdetails'} className="home"> Customer Details </Link>
          </div>
          <div className="sign">
            <button className="signout" onClick={handleSubmit}>Log out</button>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default RootLayoutAdmin;
