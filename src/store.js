import { reducer } from "./redux/reducer";
import { createStore } from "redux";

export const store = createStore(reducer);
