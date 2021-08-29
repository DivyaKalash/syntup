import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getServicesBySlug, getSpecificService } from "../actions/services";
import "../Css/ServiceListPage.css";
import path from "path";
import services from "../reducers/services";



/**
 * @author
 * @function ServiceListPage
 **/

const ServiceListPage = (props) => {

    const service = useSelector(state => state.services);
    // console.log(service);

     const dispatch = useDispatch();
// console.log(path.dirname(__dirname));
   useEffect(() => {
       const { match } = props;
       console.log(service);

    dispatch(getServicesBySlug(match.params.slug));
   }, []);
//    console.log(service.services.servicePictures[0].img);

   const showServices = (services) => {
       let serviceList = [];
       for (let service of services){
           serviceList.push(
            <div className="card">
           
            <div>
                <div className="servicesContainer">
                    <div className="serviceImgContainer">
                        <img src={"http://localhost:5000/"+service.servicePictures[0].img} alt="" />

                    </div>
                    <div className="servicesInfo">
                    
                        <a href = {"/category/"+service.slug} style={{ margin:'5px 0', color: "black"}}>{service.name}</a>
                        <div>
                            {/* <span>4.3</span>&nbsp; */}
                            {/* <span>{service.serviceCost}</span> */}
                        </div>
                        <div className="servicesPrice">&#8377; {service.serviceCost}</div>
                    </div>
                </div>
            </div>

        </div>
           );
       }
       return serviceList;
   }

   


    return (

      <div style={{display: "flex"}}>
        
        {/* <div className="card">
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

        </div> */}
        {showServices(service.services)}
        </div>
        
    )
}

export default ServiceListPage