import { createReducer } from "@reduxjs/toolkit";
import { landLocate } from "./actions";

export default createReducer([], {
    [landLocate]: (state, action) => {}
});