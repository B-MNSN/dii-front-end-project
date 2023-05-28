import { createReducer } from "@reduxjs/toolkit";
import { departLocationReducer, updateDepartLocation } from "./actions";

let textDepart='';

export default createReducer([], {
    [departLocationReducer]: (state, action) => {
        state.push({ text: textDepart, ...action.payload });
    },
    [updateDepartLocation]: (state, action) => {
        const departIndex = state.findIndex(
          (depart) => depart.id === action.payload.id
        );
        state[departIndex] = action.payload;
    },
});