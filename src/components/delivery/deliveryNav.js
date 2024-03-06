
import '../../css/delivery/deliveryNav.css'

const deliveryNav = () => {



    return ( 
        <div className="deliveryNav">
            <div>
                <img className='imgn' src={require ('../../assets/logo.png')}  alt="qdas"  />
            </div>
            <div className="heading ">
                <h2 className=' text text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            </div>
            <div className="navIcons  ">
                <div className="home navicon "> Home </div>
                <div className="products  navicon ">Add Staff</div>
                <div className="aboutus   navicon  ">Assign Staff</div>
            </div>
            <div className="sign">
                <button className="signout">log out</button>
            </div>
        </div>

     );
}
 
export default deliveryNav;