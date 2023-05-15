import { createReducer } from '@reduxjs/toolkit';
import { provinces } from './actions';

export default createReducer([], {
    [provinces]: (state, action) => {
        state.push({key: action.payload.key, value: action.payload.value, ...action.payload});
    }
});