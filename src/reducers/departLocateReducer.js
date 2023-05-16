import { createReducer } from "@reduxjs/toolkit";
import { departLocation, updateDepartLocation } from "./actions";

let textDepart='';

export default createReducer([], {
    [departLocation]: (state, action) => {
        state.push({ text: textDepart, ...action.payload });
    },
    [updateDepartLocation]: (state, action) => {
        const departIndex = state.findIndex(
          (depart) => depart.id === action.payload.id
        );
        state[departIndex] = action.payload;
    },
});