import React, { useContext, useState } from 'react'
import './DeliveryDetails.css';
import logo from '../../images/logo.png';
import { ProductInfoContext } from '../../App';
import ConfirmPage from '../ConfirmPage/ConfirmPage';
const DeliveryDetails = () => {

    // complete
    const [isCompleted, setIsCompleted] = useState(false);
    const [details, setDetails] = useState({
        name:'',
        phone:'',
        road:'', house:'' , agree:false, packet:false
    })
    const blurHandler = (e) => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
    }

    const changeHandler = () =>{
        setDetails({
            ...details,
            agree: !details.agree,
    })
    }

    const packetHandler = () =>{
        setDetails({
            ...details,
            packet: !details.packet,
    })
    }
    const {name,phone,road,house,agree, packet} = details ;


    // from context api
    const [productInfo, setProductInfo] = useContext(ProductInfoContext);
    // submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        
        setIsCompleted(true)

    }

    return (
        <>
           {
               isCompleted ? (
                <ConfirmPage  packet={packet} productInfo = {productInfo} details ={details} />
               ):(

                <section className="delivery-details">
                <div className="container">
                    <div className="delivery-form-area">
                        <div className="delivery-title">
                            <div className="d-line"></div>
                            <h5>Delivery Information</h5>
                            <div className="d-line"></div>
                        </div>



                        <div className="form-area-signup">
                        <img src={logo} alt=""/>
                        <form onSubmit={submitHandler} >
                            <input onBlur={blurHandler} type="text" placeholder='Name' name='name' required /> <br/>
                            <input onBlur={blurHandler} type="number" placeholder='Phone No:' name='phone' /> <br/>
                            <input onBlur={blurHandler} type="text" placeholder='Road No:' name='road' /> <br/>
                            <input onBlur={blurHandler} type="text" placeholder='House / Flat / Floor' name='house' /> <br/>
                            <div className="price-flex"><div className="d-flex"><input onChange={packetHandler} type="checkbox" /> <p>Need a Special Packet ?</p></div> +$5</div>
                            <div className="d-flex"><input onChange={changeHandler} type="checkbox" name='agree' /> <p>Are you agree the all terms and conditions ?</p></div>
                            <button disabled={!agree}  className={name && phone && road && house && agree ? 'submit-btn green':'submit-btn gray'} type='submit' >Complete</button>
                        </form>
                   </div>
                    </div>
                </div>
            </section> 
               )
           }

            
        </>
    )
}

export default DeliveryDetails
