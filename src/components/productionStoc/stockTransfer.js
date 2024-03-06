


import { useState } from 'react';

const StockTransfer = ({stockData}) => {

  const [disabled, setDisabled] = useState({
    Cabbage: true,
    Been: true,
    Carrots: true,
    Apple: true,
    Strawberry: true,
    Orange: true,
    Butter: true,
    Cheese: true,
    Yoghurt: true

  });


  const [variationValue,setVariationValue]=useState([0,0,0,0,0,0,0,0,0])
  const handleButtons = (e, key) => {
    e.preventDefault();
    console.log(key, e.target.name)
    e.target.name==='accept'?
    setDisabled((prevState) => ({ ...prevState, [key]: true })):
    setDisabled((prevState) => ({ ...prevState, [key]: false }))
   
    console.log(disabled[key])
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(variationValue)
  }

  const handelChange= (e,i)=>{
    
      console.log(e,i)
      const variation= [...variationValue]
      variation[i]=e.target.value
      setVariationValue(variation)
    
  }



  return (
    <div className="stockContainer">
      <form action="">
        <table className="farmValuesTable">
          <tbody>
            {stockData.map((item,i) => {
              return (
                <tr key={i}>
                  <td>{item.item_name}</td>
                  <td className='valuetd text-center'>{item.quantiy}</td>
                  <td><button onClick={(e) => handleButtons(e, item.item_name)} name='accept' className='btn btn-success'>Accept </button></td>
                  <td><button onClick={(e) => handleButtons(e, item.item_name)} name='reject' className='btn btn-danger'>Reject </button></td>

                  <td><input className='variation' type="number"  disabled={disabled[item.item_name]}
                         onChange={(e)=>{handelChange(e,i)}} name="" id="" /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
            <input className='verificationSubmit' type="submit" name="submit" onClick={handleSubmit} id="submit" />
      </form>
    </div>
  );
};

export default StockTransfer;