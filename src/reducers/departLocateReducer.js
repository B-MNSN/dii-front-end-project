import { createReducer } from "@reduxjs/toolkit";
import { departLocate } from "./actions";

let textDepart='';

export default createReducer([], {
    [departLocate]: (state, action) => {
        state.push({ text: textDepart, ...action.payload });
    }
});