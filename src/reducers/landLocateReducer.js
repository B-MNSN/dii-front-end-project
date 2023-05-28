import { createReducer } from "@reduxjs/toolkit";
import { landLocationReducer } from "./actions";

export default createReducer([], {
    [landLocationReducer]: (state, action) => {}
});