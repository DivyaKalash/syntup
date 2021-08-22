import axios from "../helpers/axios"
import { servicesConstants } from "./constants";

export const getServicesBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/services/${slug}`);
        
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