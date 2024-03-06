import '../../css/aboutAndContact/Homepage.css'
const Homepage = () => {
    return ( 
    <div class="backgroundH">
      
        <img className='imgh' src={require ('../../assets/1.jpg')}  alt="qdas"  />
        <div className="homepageComponent " >
            <div  className="container">
            <img className='imgn' src={require ('../../assets/logo.png')}  alt="qdas"  />
            <h2 className=' text text-start fs-1 text-success text-center text my-4 p-1'>Red Rooster <span className="hSpan">Farm</span></h2>
            <p className='fs-4 fw-semibold text-success text-center my-3'>Welcome to the organic food store!</p>
                <p>PROVIDING QUALITY PRODUCTS</p>
                <p class="fs-3 fw-semibold">ORGANIC FRUITS &VEGETABLE</p>
                <p  class="fs-7">100% HEALTHY &AFFORDABLE</p>
            </div>
        </div>
    </div>
    
     );
}
 
export default Homepage;