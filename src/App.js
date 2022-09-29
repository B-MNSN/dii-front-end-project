import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddDataUser from './components/AddDataUser';
// import ChangeFlight from './components/ChangeFlight';
// import MyBooking from './components/MyBooking';
import UserInformation from './components/UserInformation';
import FlightConfirm from './pages/FlightConfirm';
import './index.css';

import BookFlight from './pages/BookFlight';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AddDataUser/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bookFlight' element={<BookFlight/>}/>
        <Route path='/userInfoemation' elament={<UserInformation/>}/>
        <Route path='/flightConfirm' elament={<FlightConfirm/>}/>
        {/* <Route path='/changeFlight' element={<ChangeFlight/>}/> */}

      </Routes>
    </>
  );
}

export default App;
