import { createStore } from "redux";
import BatReducer from "./BatReducer";

const store = createStore(BatReducer);

export default store;