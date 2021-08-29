import { servicesConstants } from "../actions/constants"

const initState = {
    services: [],
    specificService: "",
    img1: "",
    img2: ""
    
}

export default(state = initState, action) => {
    switch(action.type){
        case servicesConstants.GET_SERVICES_BY_SLUG:
            state = {
                ...state,
                services: action.payload.services
                
            }

            break;
        case servicesConstants.GET_SPECIFIC_SERVICE:
            state = {
                ...state,
                specificService: action.payload.service,
                img1: action.payload.service.servicePictures[0],
                img2: action.payload.service.servicePictures[1]


            }
            break;
    }

    return state;
}