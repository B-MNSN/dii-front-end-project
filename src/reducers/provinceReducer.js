import { createReducer } from '@reduxjs/toolkit';
import { provincesReducer } from './actions';

export default createReducer([], {
    [provincesReducer]: (state, action) => {
        state.push({key: action.payload.key, value: action.payload.value, ...action.payload});
    }
});