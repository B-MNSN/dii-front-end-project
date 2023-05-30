import { createReducer } from "@reduxjs/toolkit";
import { fetchUser, addUser } from "./actions";



export default createReducer([], {
    [fetchUser]: (state, action) => {
        return action.payload;
    },
    [addUser]: (state, action) => {
        state.push(action.payload);
      },
});