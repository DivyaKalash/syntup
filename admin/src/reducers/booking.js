import { bookingConstants } from "../actions/constants";

const initialState = {
    loading: false,
    bookings: []
};

export default (state = initialState, action)=> {
    switch(action.type){
        case bookingConstants.GET_ALL_BOOKINGS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case bookingConstants.GET_ALL_BOOKINGS_SUCCESS:
            state = {
                ...state,
                bookings: action.payload,
                loading: false
            }
            break;
        case bookingConstants.GET_ALL_BOOKINGS_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;
}