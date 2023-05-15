import { createReducer } from "@reduxjs/toolkit";
import { dateArrival } from "./actions";

export default createReducer([], {
    [dateArrival]: (state, action) => {}
});