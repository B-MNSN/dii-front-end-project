import { createReducer } from "@reduxjs/toolkit";
import { travel } from "./actions";

export default createReducer([], {
    [travel]: (state, action) => {
        state.push({ textTravel: action.payload.value, ...action.payload });
    }
});