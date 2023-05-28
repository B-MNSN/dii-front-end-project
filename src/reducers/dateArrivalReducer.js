import { createReducer } from "@reduxjs/toolkit";
import { dateArrivalReducer } from "./actions";

export default createReducer([], {
    [dateArrivalReducer]: (state, action) => {}
});