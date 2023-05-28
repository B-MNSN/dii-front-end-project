import { createAction } from '@reduxjs/toolkit';

export const provincesReducer = createAction('PROVIDERS');
export const travelReducer = createAction('TRAVEL');
export const planeClassReducer = createAction('PLANE_CLASS');
export const departLocationReducer = createAction('DEPART_LOCATION');
export const landLocationReducer = createAction('LAND_LOCATION');
export const departDayReducer = createAction('DEPART_DAY');
export const dateArrivalReducer = createAction('DATE_ARRIVAL');
export const updateDepartLocation = createAction('UPDATE_DEPART_LOCATION');
export const updatePlaneClass = createAction('UPDATE_PLANE_CLASS');

export const fetchFlights = createAction('FETCH_FLIGHTS');