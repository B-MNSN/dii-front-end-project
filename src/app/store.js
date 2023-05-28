import { configureStore } from '@reduxjs/toolkit';
import provincesReducer from '../reducers/provinceReducer';
import travelReducer from '../reducers/travelReducer';
import dataArrivalReducer from '../reducers/dateArrivalReducer';
import departDayReducer from '../reducers/departDayReducer';
import departLocationReducer from '../reducers/departLocateReducer';
import landLocationReducer from '../reducers/landLocateReducer';
import planeClassReducer from '../reducers/planeClassResucer';
import fetchFlights from '../reducers/fetchFlights';


export default configureStore({
  reducer: {
    provincesReducer: provincesReducer,
    travelReducer: travelReducer,
    dataArrivalReducer: dataArrivalReducer,
    departDayReducer: departDayReducer,
    departLocationReducer: departLocationReducer,
    landLocationReducer: landLocationReducer,
    planeClassReducer: planeClassReducer,
    flights: fetchFlights,
  }
});