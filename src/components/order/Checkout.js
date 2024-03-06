import {useCartContext} from './cartItemContext'
import '../../css/order/checkout.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Checkout = () => {
    const [deliveryinfo,setDeliveryInfo] = useState({
            itemName:undefined,
            quantity:undefined,
            price:undefined,
            total:undefined,
            name:undefined,
            addrsLine1:undefined,
            city:undefined,
            zip:undefined,
            contact:undefined,
            paymentOption:undefined
    });

    const [orderDetails, setOrderDetails] = useState([]);

    const handleValues = (e)=>{
            let prevState = deliveryinfo
            setDeliveryInfo({...prevState,[e.target.name]:e.target.value})

            console.log(deliveryinfo)
      
    }
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const orderDetailsArray = cart.map((item) => ({
            itemName: item.itemName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            total:item.unitPrice * item.quantity
        }));
        try {
            const response = axios.post('/delivery/details', {
                deliveryInfo: deliveryinfo,
                orderDetails: orderDetailsArray
            });
            console.log('Order submitted successfully!', response.data);
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('An error occurred while submitting your order. Please try again later.');
        }
       
        deliveryinfo.paymentOption === 'card' ? navigate("/order/paymetPortal") : navigate("/order/checkout/processed");

    };

    const cart = useCartContext();
 
    let total = 0;
    return (
        <div className="checkoutContainer container">
          

            <div className="chekoutForm Regular bg-secondary-subtle  my-4 rounded shadow p-2">
                <h4>Delivery Information</h4>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="firstName">Name</label></td>
                            <td><input type="text" value={deliveryinfo.name||""} onChange={handleValues} name="name" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="addrsLine1">Address</label></td>
                            <td><input type="text" value={deliveryinfo.addrsLine1||""}  onChange={handleValues}  name="addrsLine1" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="city">City</label></td>
                            <td><input type="text" value={deliveryinfo.city||""} onChange={handleValues}  name="city" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="zip">ZIP code</label></td>
                            <td><input type="text" value={deliveryinfo.zip||""} onChange={handleValues}  name="zip" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="contact">Contact Number</label></td>
                            <td><input type="text" value={deliveryinfo.contact||""}  onChange={handleValues} name="contact" required id="" /></td>
                        </tr>
                        <tr>
                            <td><h4>Payment Method</h4></td>
                        </tr>
                      
                        <tr>
                            <td><label htmlFor="card">Card Payment</label></td>
                            <td><input type="radio" value="card" onChange={handleValues}    name="paymentOption" id="card" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="cod">COD</label></td>
                            <td><input type="radio" value="cod"  onChange={handleValues}   name="paymentOption" id="cod" /></td>
                        </tr>
                
                            <tr>
                                <td>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>
                             
                </form>
            </div>
            
            <div className="orderDetails Regular  my-4 rounded shadow p-4 mx-2">
                <div className="h1">Order Details</div>

                {cart.map((item, i) => {
                    const itemTotal = item.unitPrice * item.quantity; // Calculate total for each item
                    return (
                        <div className="itemContainer" key={i}>
                            <div className="itemName">{item.itemName}</div>
                            <div className="quantity">{item.quantity}</div>
                            <div className="price">X{item.unitPrice}</div>
                            <div className="total">={itemTotal}</div> {/* Display total for each item */}
                        </div>
                    );
                })}

                        <h2>Total {cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0)}</h2>
                    <button type='submit' className='checkoutbtn' onClick={handleSubmit}>Confirm Order</button>  
            </div>

        </div>
    );
}
 
export default Checkout;