import { configureStore } from '@reduxjs/toolkit';
import provinces from '../reducers/provinceReducer';
import travel from '../reducers/travelReducer';
import dataArrival from '../reducers/dateArrivalReducer';
import departDay from '../reducers/departDayReducer';
import departLocation from '../reducers/departLocateReducer';
import landLocation from '../reducers/landLocateReducer';
import planeClass from '../reducers/planeClassResucer';


export default configureStore({
  reducer: {
    provinces: provinces,
    travel: travel,
    dataArrival: dataArrival,
    departDay: departDay,
    departLocation: departLocation,
    landLocation: landLocation,
    planeClass: planeClass,
  }
});