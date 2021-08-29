import axios from "../helpers/axios";
import { bookingConstants } from "./constants"

export const addBooking = (form) => {
    return async dispatch => {
        dispatch({type: bookingConstants.ADD_BOOKING_REQUEST});
        const res = await axios.post(`/booking/addBooking`, form);
        if(res.status === 200){
            dispatch({
                type: bookingConstants.ADD_BOOKING_SUCCESS,
                payload: res.data.booking
            });
        }else{
            dispatch({
                type: bookingConstants.ADD_BOOKING_FAILURE,
                payload: "Something went wrong"
            });
        }
    }
}

export const getBookings = () => {
    return async dispatch => {
        dispatch({type: bookingConstants.GET_BOOKING_REQUEST});
        const res = await axios.get("/booking/getUserBookingDetails");
        console.log(res);
        if(res.status === 200){
            const {userBooking} = res.data;
            dispatch({
                type: bookingConstants.GET_BOOKING_SUCCESS,
                payload: userBooking.bookingItems
            });
        } else{
            dispatch({
                type: bookingConstants.GET_BOOKING_FAILURE,
                payload: "Something went wrong"
            });
        }
    }
}