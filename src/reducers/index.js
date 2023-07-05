import { combineReducers } from "redux";
import FlightDestinationReducer from "./landingPage/Destination";
import ModalPassengerReducer from "./landingPage/Passenger";

export default combineReducers({
    FlightDestinationReducer,
    ModalPassengerReducer,

})