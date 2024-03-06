// import { useState } from 'react'
import '../../css/order/order.css'
import {useNavigate} from 'react-router-dom'

const Cart = ({ cartItems, setCart }) => {

      const navigate = useNavigate()
      const handleRemove = (i) => {
            setCart(cartItems.filter((item, index) => index !== i))
      }
      const handleCount = (i, add) => {
            const newCart = [...cartItems]
            add ? newCart[i].quantity += 1 : newCart[i].quantity -= 1
            setCart([...newCart]);
            console.log(cartItems)
      }
      const handleCheckout=(e)=>{
                navigate('/order/checkout');
                  console.log('clic')
      }

      return (
            <div className="cartContainer">
                  
                  <div className="itemSection">
                  {cartItems.map((item, i) => {
                        return (
                              <div className="cartItemContainer" key={i}>

                                          <div className="cardescAndBtn">
                                                <div className="itemDescription">
                                                      <div className="cartItemName">{item.itemName}</div>
                                                      <div className="cartItemPrice">Rs.{item.unitPrice}</div>
                                                </div>
                                                <div className="quantityContainer">
                                                      <h4>{item.quantity}</h4>
                                                </div>
                                                <div className="cartButons">
                                                      <div className="increse" onClick={(e) => { handleCount(i, true) }}>+</div>
                                                      <div className="decrese" onClick={(e) => { handleCount(i, false) }} >-</div>
                                                </div>
                                          </div>
                                          <div className="removeBtn" onClick={() => { handleRemove(i) }} >Remove Item</div>
                                    </div>
                          
                        )
                  })}
                   </div>
                  <div className="checkoutSection">
                        <div className="checkoutbtn" onClick={()=>{handleCheckout()}} >
                              <h4>Checkout</h4>
                        </div>
                  </div>


            </div>
      );
}

export default Cart;