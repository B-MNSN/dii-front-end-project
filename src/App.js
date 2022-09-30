import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import AddDataUser from './components/AddDataUser';
// import ChangeFlight from './components/ChangeFlight';
// import MyBooking from './components/MyBooking';
import FlightConfirm from './pages/FlightConfirm';
import './index.css';

import BookFlight from './pages/BookFlight';
import Home from './pages/Home';
import AddDataUser from './components/AddDataUser';
import MyBooking from './components/MyBooking';
import SuccesBooking from './components/SuccesBooking';

import BookFlight from "./pages/BookFlight";
import Home from "./pages/Home";
import AddDataUser from "./components/AddDataUser";
import MyBooking from "./components/MyBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bookFlight' element={<BookFlight/>}/>
        <Route path='/addDataUser' element={<AddDataUser/>}/>
        <Route path='/flightConfirm' element={<FlightConfirm/>}/>
        <Route path='/myBooking' element={<SuccesBooking/>}/>

        {/* <Route path='/changeFlight' element={<ChangeFlight/>}/> */}
      </Routes>
    </>
  );
}

export default App;
