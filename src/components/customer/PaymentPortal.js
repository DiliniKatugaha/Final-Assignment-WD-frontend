import '../../css/order/order.css'
const PaymentPortal = () => {

    return ( 

        <div className="paymentPortalContainer">
            <div className={'paymentForm'}>
                <div className="payementHeader"><h1>Payment Portal</h1></div>
                    <form >
                        <div className={"paymentTable  shadow p-3 rounded"}>
                            <h3>Fill in the details</h3>
                            <table  >
                               
                                <tr>
                                    <td> <label htmlFor="customerName">Card Holder Name</label></td>
                                    <td> <input type="text" id='customerName' name='Card Holder Name' placeholder='Enter CardHolder Name' className='form-control' required /> </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="cardNumber">Card Number</label></td>
                           
                                    <td> <input type="text" className="form-control" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx"required autofocus pattern="[0-9\s]{13,19}" /></td>
                                </tr>
                       
                                            <tr>
                                                <td><label for="expityMonth">Expir Date</label></td>
                                                <td className='expFields'><input className='expMonth form-control' type="tel" name='expDate'  id="expireMonth" placeholder="MM" maxLength={2} required />
                                                <input className='expYear form-control'type="tel" name='expDate'  id="expireYear" placeholder="YYYY" required maxLength={4} /></td>
                                            </tr>
                                            <tr>
                                                <td><label for="cvCode">CV Code</label></td>
                                                <td> <input type="password" className='cvCode form-control'id="cvCode" maxLength={3} placeholder="CV" required /> </td>
                                       
                                            </tr>
                             <hr />
                                            <tr>
                                               
                                                <td><label htmlFor="rentAmount">Payment Amount</label></td>
                                                <td><input type="number" name='rentAmount' id='rentAmount' className='form-control w-50 text-success' readOnly value={30000}/></td>
                                            </tr>
                                            <tr>
                                               
                                                <td><label htmlFor="customerName">Customer Name</label></td>
                                                <td><input type="text" name='customerName' id='customerName' className='form-control w-100 text-success' readOnly value=""/></td>
                                            </tr>
                             <hr />
                                        </table>
                                        <button type='submit' className='payBtn'> Pay</button>
                                 </div>
                    </form>
            </div>
        </div>

     );
}
 
export default PaymentPortal;