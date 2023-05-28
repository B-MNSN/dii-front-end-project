import { createReducer } from "@reduxjs/toolkit";
import { travelReducer } from "./actions";

export default createReducer([], {
    [travelReducer]: (state, action) => {
        state.push({ textTravel: action.payload.value, ...action.payload });
    }
});