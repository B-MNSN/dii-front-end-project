import { createReducer } from "@reduxjs/toolkit";
import { countTarvel } from "./actions";

export default createReducer([], {
    [countTarvel]: (state, action) => {}
});