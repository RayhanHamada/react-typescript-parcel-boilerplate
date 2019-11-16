import { createStore } from "redux";
import rootReducer from "./reducer";

export default createStore(
    rootReducer,
    {} // ganti pake initial state (kalau mau) 
);