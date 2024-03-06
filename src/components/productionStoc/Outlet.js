import { useState,useEffect } from "react";
import StockTransfer from "./stockTransfer";
import axios from 'axios'

const Outlet = () => {
    const [stock, setStock] = useState([]);
    const date = new Date()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    const day = date.getDate();

    const fullDate = `${day}/${month}/${year}`
    
    useEffect(() => {
        getStock();
    }, [])

    const getStock = async () => {
        const stockData = await axios('/order/getItems').then((data) => {
            return data.data
        }).catch((err) => {
            console.log(err);
        })
        setStock([...stockData])
    }



    

    return (
        <div className="outletContainer">

<div className="farmHeading">
                <h1>Production Verification for the Date of  {fullDate} </h1>
            </div>

            <StockTransfer stockData={stock}/>


        </div>
      );
}
 
export default Outlet;