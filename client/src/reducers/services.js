import { servicesConstants } from "../actions/constants"

const initState = {
    services: [],
    servicesByPrice:{
        under5K:[],
        under10K:[],
        under15K:[],
        under20K:[],
        under30K:[]
    }
}

export default(state = initState, action) => {
    switch(action.type){
        case servicesConstants.GET_SERVICES_BY_SLUG:
            state = {
                ...state,
                services: action.payload.services,
                servicesByPrice: {
                    ...action.payload.servicesByPrice
                }
            }

            break;
    }

    return state;
}