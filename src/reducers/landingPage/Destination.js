import { GET_FLIGHT } from "../../actions/destinationAction";

const initialState = {
    flightData: []
}

const flightDestination = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHT:
            return {
                ...state,
                flightData: action.payload.data
            }
        default:
            return state
    }
}

export default flightDestination;

// import { GET_FLIGHT } from "../../actions/destinationAction"

// const initialState = {
//     flightData:[]
// }

// const flightDestination = (state = initialState, action) => {
//     switch (action.type){
//         case GET_FLIGHT:
//             return {
//                 ...state,
//                 flightData: action.payload.data
//             }
//         default:
//             return state
//     }
// }

// export default flightDestination;