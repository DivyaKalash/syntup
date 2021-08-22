import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getServicesBySlug } from "../actions/services";
import "../Css/ServiceListPage.css"



/**
 * @author
 * @function ServiceListPage
 **/

const ServiceListPage = (props) => {

    const service = useSelector(state => state.service); 

     const dispatch = useDispatch();

   useEffect(() => {
       const { match } = props;

    dispatch(getServicesBySlug(match.params.slug));
   }, []);


    return (

      <div>
        
        <div className="card">
            <div className="cardHeader">
                <div> Samsung Mobile under 15k</div>
                <button>View all</button>
            </div>
            <div>
                <div className="servicesContainer">
                    <div className="serviceImgContainer">
                        <img src="https://rukminim1.flixcart.com/image/312/312/kq43iq80/mobile/b/t/n/s20-fe-5g-sm-g781b-ds-samsung-original-imag47fdfgmg2gnh.jpeg?q=70" alt="" />

                    </div>
                    <div className="servicesInfo">
                    
                        <a href = "Anupam.com" style={{ margin:'5px 0'}}>Samsung 6gb Phone</a>
                        <div>
                            <span>4.3</span>&nbsp;
                            <span>3353</span>
                        </div>
                        <div className="servicesPrice">13000</div>
                    </div>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default ServiceListPage