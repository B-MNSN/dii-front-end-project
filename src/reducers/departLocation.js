import { createReducer } from "@reduxjs/toolkit";
import { departLocation } from "./actions";

export default createReducer([], {
    [departLocation]: (state, action) => {
        // state.push({ departLocate: action.payload.value, ...action.payload });
        return action.payload;
    },
});