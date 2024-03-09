import '../../css/nav.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RootLayoutDelivery = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/");
    }

    const isLoginPage = location.pathname === '/home/signin';
    const isSignupPage = location.pathname === '/home/signup';
    const isHomePage = location.pathname === "/home";

    return (
        <div className="rootLayout">
            {!isLoginPage && !isSignupPage && !isHomePage && (
                <div className="Nav">
                    <div>
                        <img className='imgn' src={require('../../assets/logo.png')} alt="qdas" />
                    </div>
                    <div className="heading ">
                        <h2 className=' text text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
                        <h5 className='text text-start fs-4 text my-4 p-1'> Delivery Manager </h5>
                    </div>

                    <div className="navIcons  ">
                        <Link to={'/delivery/assign'} className="home "> Assign Delivery </Link>
                        <Link to={'/delivery/addstaff'} className='product navicon'>Add Staff</Link>
                        <Link to={'/delivery/staff'} className='product navicon'>Staff List</Link>
                    </div>
                    <div className="sign">
                        <button className="signout" onClick={handleSubmit}>log out</button>
                    </div>
                </div>
            )}
            <Outlet /> 
        </div>
    );
}

export default RootLayoutDelivery;
