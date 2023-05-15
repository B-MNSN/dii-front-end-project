import { createReducer } from "@reduxjs/toolkit";
import { travel } from "./actions";

let textTravel = '';
export default createReducer([], {
    [travel]: (state, action) => {
        state.push({ textTravel: textTravel, ...action.payload });
    }
});