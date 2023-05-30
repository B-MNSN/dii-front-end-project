import { createReducer } from "@reduxjs/toolkit";
import { landLocation } from "./actions";

export default createReducer([], {
    [landLocation]: (state, action) => {
        // state.push({ landLocate: action.payload.value, ...action.payload });
        return action.payload;
    }
});