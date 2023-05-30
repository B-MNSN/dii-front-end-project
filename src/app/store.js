import { configureStore } from '@reduxjs/toolkit';
import travel from '../reducers/travel';
import departLocation from '../reducers/departLocation';
import landLocation from '../reducers/landLocattion';
import planeClass from '../reducers/planeClass';
import fetchFlights from '../reducers/fetchFlights';

export default configureStore({
  reducer: {
    travel: travel,
    departLocationr: departLocation,
    landLocation: landLocation,
    planeClass: planeClass,
    flights: fetchFlights,
  }
});