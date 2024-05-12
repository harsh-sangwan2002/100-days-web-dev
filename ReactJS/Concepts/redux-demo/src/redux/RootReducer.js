import { combineReducers } from "redux";
import BatReducer from './BatReducer';
import BallReducer from "./BallReducer";

// This reducer is used to combine multiple reducers
const rootReducer = combineReducers({
    ball:BallReducer,
    bat:BatReducer
})

export default rootReducer;