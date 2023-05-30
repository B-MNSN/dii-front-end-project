import { createReducer } from '@reduxjs/toolkit';
import { planeClass} from './actions';

export default createReducer([], {
    [planeClass]: (state, action) => {
        // state.push({planClass: action.payload.value, ...action.payload});
        return action.payload;
    },
});