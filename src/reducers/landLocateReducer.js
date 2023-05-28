import { createReducer } from "@reduxjs/toolkit";
import { landLocationReducer } from "./actions";

export default createReducer([], {
    [landLocationReducer]: (state, action) => {
        state.push({ text: action.payload.value, ...action.payload });
    }
});