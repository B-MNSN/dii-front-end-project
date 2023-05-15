import { createReducer } from "@reduxjs/toolkit";
import { isActive } from "./actions";

export default createReducer([], {
    [isActive]: (state, action) => {
        state.push(action.payload.isActive);
    }
});