import { bookingConstants } from "../actions/constants";

const initialState = {
    loading: false,
    booking: {},
    userBookings: []
    
};

export default (state = initialState, action) => {
    switch(action.type){
        case bookingConstants.ADD_BOOKING_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case bookingConstants.ADD_BOOKING_SUCCESS:
            state = {
                ...state,
                booking: action.payload,
                loading: false
            }
            break;
        case bookingConstants.ADD_BOOKING_FAILURE:
            state = {
                ...state,
                loading: false
            }
        break;
        case bookingConstants.GET_BOOKING_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case bookingConstants.GET_BOOKING_SUCCESS:
            state = {
                ...state,
                userBookings: action.payload,
                loading: false
        


            }
            break;
        case bookingConstants.GET_BOOKING_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;
}