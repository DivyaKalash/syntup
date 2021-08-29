import { bookingConstants } from "./constants";
import axios from "../helpers/axios";

export const getAllBookings = () => {
    return async dispatch => {
        dispatch({type: bookingConstants.GET_ALL_BOOKINGS_REQUEST});
        const res = await axios.get("/booking/getAllBookings");
        console.log(res.data);
        if(res.status === 200){
            dispatch({
                type: bookingConstants.GET_ALL_BOOKINGS_SUCCESS,
                payload: res.data.bookings
            });
        }else{
            dispatch({
                type: bookingConstants.GET_ALL_BOOKINGS_FAILURE,
                payload: "Something went wrong"
            });
        }
    }
}