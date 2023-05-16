import { createReducer } from "@reduxjs/toolkit";
import { landLocation } from "./actions";

export default createReducer([], {
    [landLocation]: (state, action) => {}
});