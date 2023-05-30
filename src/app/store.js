import { configureStore } from '@reduxjs/toolkit';
import travel from '../reducers/travel';
import departLocation from '../reducers/departLocation';
import landLocation from '../reducers/landLocattion';
import planeClass from '../reducers/planeClass';
import fetchFlights from '../reducers/fetchFlights';
import fetchUsers from '../reducers/users';
import addUser from '../reducers/users';

export default configureStore({
  reducer: {
    travel: travel,
    departLocation: departLocation,
    landLocation: landLocation,
    planeClass: planeClass,
    flights: fetchFlights,
    fetchUsers: fetchUsers,
    addUser:addUser,
  }
});