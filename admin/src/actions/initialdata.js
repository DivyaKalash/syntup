import axios from "../helpers/axios"
import { categoryConstants } from "./constants";

export const getInitialData=() => {
    return async dispatch => {
        const res = await axios.post("/initialData");
        if (res.status == 200){
            const {categories}=res.data;
            dispatch({type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload:{categories}
        });
        }
        console.log(res)
    }

}