import { createReducer } from "@reduxjs/toolkit";
import { departLocationReducer, updateDepartLocation } from "./actions";

export default createReducer([], {
    [departLocationReducer]: (state, action) => {
        state.push({ text: action.payload.value, ...action.payload });
    },
    [updateDepartLocation]: (state, action) => {
        const departIndex = state.findIndex(
          (depart) => depart.id === action.payload.id
        );
        state[departIndex] = action.payload;
    },
});