import axios from "../helpers/axios"
import { servicesConstants } from "./constants";

export const getServicesBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/services/${slug}`);
        console.log(res);
        
        if(res.status === 200){
            dispatch({
                type: servicesConstants.GET_SERVICES_BY_SLUG,
                payload: res.data
            });
        }else{
           // dispatch({
             //   type:
            //})
        }
    }
}

export const getSpecificService = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/service/category/${slug}`);
        console.log(res);

        if(res.status === 200){
            dispatch({
                type: servicesConstants.GET_SPECIFIC_SERVICE,
                payload: res.data
            });
            return true;
        }else{

        }
    }
}