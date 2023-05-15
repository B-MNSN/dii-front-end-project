import { createReducer } from '@reduxjs/toolkit';
import { planeClass } from './actions';

export default createReducer([], {
    [planeClass]: (state, action) => {
        state.push({value: action.value, ...action.payload});
    }
});