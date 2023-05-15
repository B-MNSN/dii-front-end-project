import { configureStore } from '@reduxjs/toolkit';
import provinces from '../reducers/provinceReducer';
import travel from '../reducers/travelReducer';
import countTravel from '../reducers/countTravelReducer';
import dataArrival from '../reducers/dateArrivalReducer';
import departDay from '../reducers/departDayReducer';
import departLocation from '../reducers/departLocateReducer';
import active from '../reducers/isActiveReducer';
import landLocation from '../reducers/landLocateReducer';
import planeClass from '../reducers/planeClassResucer';


export default configureStore({
  reducer: {
    provinces: provinces,
    travel: travel,
    countTravel: countTravel,
    dataArrival: dataArrival,
    departDay: departDay,
    departLocation: departLocation,
    active: active,
    landLocation: landLocation,
    planeClass: planeClass,
  }
});