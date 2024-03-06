
import '../../css/nav.css'
import {Link, Outlet,useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const RootLayout = () => {

    const location = useLocation();
    let navigate = useNavigate();
    const handleSubmit = ()=>{
    navigate("/")
    }

    const isLoginPage = location.pathname === '/home/signin';
  const isSignupPage = location.pathname === '/home/signup';
    const isHomePage = location.pathname === "/";
    const isFarm =location.pathname === "/farm";
    return (
        
        <div className="rootLayout">
             {!isLoginPage && !isSignupPage && !isHomePage && !isFarm&&(
        <div className="Nav">
            <div>
                <img className='imgn' src={require ('../../assets/logo.png')}  alt="qdas"  />
            </div>
            <div className="heading ">
                <h2 className=' text text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            </div>
            <div className="navIcons  ">
            <Link to={'/home/signin/homepage'} className="navicon "> Home </Link>
                        <Link to={'order'} className='product navicon'>Products</Link>
                <Link to={'about'} className="navicon  ">About Us</Link>
                <Link to={'contact'} className="contactus  navicon  ">Contact Us</Link>
            </div>
            <div className="sign">
                <button className="signout" onClick={handleSubmit}>log out</button>

            </div>
        </div>
        )} 
        <Outlet/>

    </div>  );
    
}
 
export default RootLayout;