import { createReducer } from "@reduxjs/toolkit";
import { fetchFlights } from "./actions";

export default createReducer([], {
    [fetchFlights]: (state, action) => {
        return action.payload;
    },
});