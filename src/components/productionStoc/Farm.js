import { useState } from 'react'
import '../../css/production/farm.css'
import axios from 'axios';

const Farm = () => {

    const date = new Date()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    const day = date.getDate();

    const fullDate = `${day}/${month}/${year}`

    const [farmvalues, setfarmValues] = useState(
        {
            cabage: undefined,
            been: undefined,
            carrot: undefined,
            apple: undefined,
            strawberry: undefined,
            orange: undefined,
            butter: undefined,
            cheese: undefined,
            yoghurt: undefined
        }
    );

    const handleValues = (e)=>{
        setfarmValues((prev)=>{return {...prev,[e.target.name]:e.target.value} })
        console.log(farmvalues)
    }
            
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const items = Object.entries(farmvalues).map(([name, value]) => ({ name, value }));
        console.log(items);
    
        try {
            const response = await axios.post('/order/additems', items);
            console.log(response.data); // Check the response from the backend
            window.location.reload();
        } catch (error) {
            console.error(error);
            // Handle error here, display a message to the user, etc.
        }
    };


    return (
        <div className="farmContainer">
            <div className="farmHeading">
                <h1>Enter Production Details for  {fullDate} </h1>
            </div>

            
            <form className='formContainer' >

                    <table className='formTable'>
                        <tbody>
                            <tr>
                                <td> <label htmlFor="cabage">Cabage</label></td>
                                <td><input type="text" value={farmvalues.cabage||''} onChange={handleValues} name="cabage" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="been">Been</label></td>
                                <td> <input type="text" value={farmvalues.been||''} onChange={handleValues} name="been" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="carrot">Carrot</label></td>
                                <td><input type="text" value={farmvalues.carrot||''} onChange={handleValues} name="carrot" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="apple">Apple</label></td>
                                <td> <input type="text" value={farmvalues.apple||''} onChange={handleValues} name="apple" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="strawberry">Strawberry</label></td>
                                <td><input type="text" value={farmvalues.strawberry||''} onChange={handleValues} name="strawberry" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="orange">Orange</label></td>
                                <td><input type="text" value={farmvalues.orange||''} onChange={handleValues} name="orange" id="" /></td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="butter">Butter</label></td>
                                <td><input type="text" value={farmvalues.butter||''} onChange={handleValues} name="butter" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="cheese">Cheese</label></td>
                                <td><input type="text" value={farmvalues.cheese||''} onChange={handleValues} name="cheese" id="" /> kg</td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="yoghurt">Yoghurt</label></td>
                                <td><input type="text" value={farmvalues.yoghurt||''} onChange={handleValues} name="yoghurt" id="" /> Cups</td>
                            </tr>
                        </tbody>
                    </table>
                
                {/* <input type="submit" className='submitbtn' name="" value="Submit" id="" /> */}
                {/* <input className='verificationSubmit' type="submit" name="submit" onClick={handleSubmit} id="submit" /> */}
                <button className='verificationSubmit' type='submit'  onClick={handleSubmit} >Submit</button>
            </form>
           


        </div>
    );
}

export default Farm;