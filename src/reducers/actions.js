import { createAction } from '@reduxjs/toolkit';

export const travel = createAction('TRAVEL');
export const planeClass = createAction('PLANE_CLASS');
export const departLocation = createAction('DEPART_LOCATION');
export const landLocation = createAction('LAND_LOCATION');
export const fetchFlights = createAction('FETCH_FLIGHTS');
export const fetchUser = createAction('FETCH_USER');
export const addUser = createAction('ADD_USER');