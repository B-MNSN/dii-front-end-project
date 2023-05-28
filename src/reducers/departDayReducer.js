import { createReducer } from "@reduxjs/toolkit";
import { departDayReducer } from "./actions";

export default createReducer([], {
    [departDayReducer]: (state, action) => {}
});