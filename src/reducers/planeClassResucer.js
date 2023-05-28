import { createReducer } from '@reduxjs/toolkit';
import { planeClassReducer, updatePlaneClass } from './actions';

export default createReducer([], {
    [planeClassReducer]: (state, action) => {
        state.push({value: action.payload.value, ...action.payload});
    },
    [updatePlaneClass]: (state, action) => {
        const planeClassIndex = state.findIndex(
          (planeClass) => planeClass.id === action.payload.id
        );
        state[planeClassIndex] = action.payload;
    },
});