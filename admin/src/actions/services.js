import axios from "../helpers/axios";
import { serviceConstants } from "./constants";

export const addService = (form) => {
    return async dispatch => {
        dispatch({type: serviceConstants.ADD_SERVICE_REQUEST});
        
        const res = await axios.post("/service/create", form);
        console.log(res);
        if(res.status === 200){
            dispatch({
                type: serviceConstants.ADD_SERVICE_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: serviceConstants.ADD_SERVICE_FAILURE,
                payload: "Something went wrong"
            });
        }
    }
}

export const getAllServices = () => {
    return async dispatch => {
        dispatch({type: serviceConstants.GET_ALL_SERVICE_REQUEST});
        const res = await axios.get("/services/getAllService");
        console.log(res);
        if(res.status === 200){
            dispatch({
                type: serviceConstants.GET_ALL_SERVICE_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: serviceConstants.GET_ALL_SERVICE_FAILURE,
                payload: "Soething went wrong"
            });
        }
    }
}