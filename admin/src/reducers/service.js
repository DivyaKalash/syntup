import { serviceConstants } from "../actions/constants";

const initialState = {
    services: [],
    addedService: {},
    loading: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case serviceConstants.ADD_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case serviceConstants.ADD_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                addedService: action.payload
            }
            break;
        case serviceConstants.ADD_SERVICE_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
        case serviceConstants.GET_ALL_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true

            }
            break;
        case serviceConstants.GET_ALL_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                services: action.payload.services
            }
            break;
        case serviceConstants.GET_ALL_SERVICE_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;
}