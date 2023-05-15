import { createAction } from '@reduxjs/toolkit';

export const provinces = createAction('PROVIDERS');
export const travel = createAction('TRAVEL');
export const planeClass = createAction('PLANE_CLASS');
export const departLocate = createAction('DEPART_LOCATION');
export const landLocate = createAction('LAND_LOCATION');
export const isActive = createAction('IS_ACTIVE');
export const countTarvel = createAction('COUNT_TARVEL');
export const departDay = createAction('DEPART_DAY');
export const dateArrival = createAction('DATE_ARRIVAL');