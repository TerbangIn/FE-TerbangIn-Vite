import { combineReducers } from "redux";
import FlightDestinationReducer from "./landingPage/Destination";
import ModalPassengerReducer from "./landingPage/Passenger";
// import passenger from'./passenger';


export default combineReducers({
    FlightDestinationReducer,
    ModalPassengerReducer,

})