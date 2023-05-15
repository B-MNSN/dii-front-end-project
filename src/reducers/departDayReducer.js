import { createReducer } from "@reduxjs/toolkit";
import { departDay } from "./actions";

export default createReducer([], {
    [departDay]: (state, action) => {}
});