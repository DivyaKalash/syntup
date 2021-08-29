// import userReducer from "./user";
// import authReducer from "./auth";
import { combineReducers } from "redux";
import categoryReducer from './category';
import servicesReducer from './services'
// import orderReducer from "./order";
import bookingReducer from "./booking";



const rootReducer = combineReducers({
    category: categoryReducer,
    services: servicesReducer,
    booking: bookingReducer
});

export default rootReducer;
