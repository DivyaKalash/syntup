import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, getSpecificService } from '../actions';
import "../Css/product.css";
import { Modal, Button } from 'react-bootstrap';
import Input from './UI/input';


/**
 * @author
 * @function ProductDetailPage
 **/

const ProductDetailPage = (props) => {
    const [bookingDate, setBookingDate] = useState("");
    const [address, setAddress] = useState("");
    const [show, setShow] = useState(false);

    const service = useSelector(state => state.services);
    const dispatch = useDispatch();
    let dispatched = false;
    useEffect(() =>  {
        const {match} = props;
        console.log(props);
        // console.log(service.specificService.servicePictures);
           dispatch(getSpecificService(match.params.slug));
           
        
        // document.getElementById("1234").innerHTML = await renderService()
    }, []);
    // console.log(service.specificService.servicePictures);
    const handleClose = () =>{
        let bookingItem = {"bookingItems": {}};
        bookingItem.bookingItems.services = service.specificService.name;
        bookingItem.bookingItems.bookingDate = bookingDate;
        bookingItem.bookingItems.address = address;
        dispatch(addBooking(bookingItem));

        setBookingDate("");
        setAddress("");
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const renderAddBookingModal = () => {
        return(
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{color: "black"}}>Add Booking Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <input type="text" value={bookingDate} placeholder="booking date" onChange={(e) => setBookingDate(e.target.value)}/>
                        <input type="text" value={address} placeholder="address" onChange={(e) => setAddress(e.target.value)}/> */}
                        <Input label={"Booking Date:"} type="date" value={bookingDate} placeholder={"booking date"} onChange={(e)=> setBookingDate(e.target.value)}/>
                        <Input label={"Address:"} type="text" value={address} placeholder={"Address"} onChange={(e)=> setAddress(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Book
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }






    const clickimg = (imgURL)=>{
        var fullimg = document.getElementById("imagebox");
        var tagimg = fullimg.getElementsByTagName("img")
        tagimg.src = "http://localhost:5000/"+imgURL
    }
    
    // onst img1URL = "http://localhost:5000"+service.specificService.servicePictures[0].img;
    // const img1 = axios.get("http://localhost:5000"+service.specificService.servicePictures[0].img)
    // for(let pic of service.specificService.servicePictures){
    //     picList.push(pic.img)
    // }
    // picList.push(service.specificService.servicePictures[0])
    // console.log(picList[0]);
    // console.log(img1);
    const renderService = () => {
        // const img1 =  service.specificService.servicePictures[0].img;
        // const img2 =  service.specificService.servicePictures[1].img;
        return(
            
        <>
        <div className="product-box">
                <div className="all-images">
                <div className="small-images">
                    
                    <img src= { "http://localhost:5000/"+service.img1.img} alt="" onClick={() => clickimg(service.img1.img)} /> 
                     <img src={"http://localhost:5000/"+service.img2.img} alt="" onClick={() => clickimg(service.img2.img)}/>
                       
                </div>
                <div className="main-images">
                     <img src={"http://localhost:5000/"+service.img1.img} alt="" id="imagebox"/> 
                </div>
            </div>
            </div>
            <div className="text">
                <div className="content">
                    <p className="brand">Available: {service.specificService.availability}</p> 
                    <h2>{service.specificService.name}</h2>
                    <div className="review">
                        <span>(4.8)</span>
                        <span className="fa fa-star"></span>
                    </div>
                    <div className="price-box">
                        <p className="price">&#8377; {service.specificService.serviceCost}</p>
                        
                    </div>
                    
                   
                    
                  
                    <h3>{service.specificService.description}</h3>
                    <button className="buy" onClick={handleShow}>
                        <span className="fa fa-shopping-cart"></span>
                        Book now
                    </button>
                </div>
            </div>
            </>
            )
    }
    return(
        // <div>ProductDetailPage</div>
        
        <div className="containerrr">
        <div id="1234"className="wrapper">
        
                {renderService()}
                {renderAddBookingModal()}
        
        </div>
    </div>
    
    
    )

}

export default ProductDetailPage