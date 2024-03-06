
import '../../css/nav.css'
import {Link, Outlet} from 'react-router-dom'

const RootLayout = () => {


    return (
        
        <div className="rootLayout">
        <div className="Nav">
            <div>
                <img className='imgn' src={require ('../../assets/logo.png')}  alt="qdas"  />
            </div>
            <div className="heading ">
                <h2 className=' text text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            </div>
            <div className="navIcons  ">
            <Link to={'/'} className="home navicon "> Home </Link>
                <div class="dropdown">
                    <button class="dropbtn">Products</button>
                    <div class="dropdown-content">
                        <Link to={'farm'}><a href="#">Products</a></Link>
                        <Link to={'cart'}><a href="#">Cart</a></Link>
                        <Link to={'order'}><a href="#">Order</a></Link>
                    </div>
                </div>
                <div className="navicon  ">About Us</div>
                <div className="contactus  navicon  ">Contact Us</div>
            </div>
            <div className="sign">
                <Link to={'sign in'}><button className="signout">log out</button></Link>
            </div>
        </div>
        <Outlet/>

    </div>  );
}
 
export default RootLayout;