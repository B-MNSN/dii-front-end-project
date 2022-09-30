import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import AddDataUser from './components/AddDataUser';
// import ChangeFlight from './components/ChangeFlight';
// import MyBooking from './components/MyBooking';
import FlightConfirm from './pages/FlightConfirm';
import './index.css';
import Login from './components/Login'
import BookFlight from './pages/BookFlight';
import Home from './pages/Home';
import AddDataUser from './components/AddDataUser';


function App() {
  let userStat = JSON.parse(localStorage.getItem('status'));
  console.log(userStat)
  if (userStat === null) {
    <Login />
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bookFlight' element={<BookFlight />} />
        <Route path='/addDataUser' element={<AddDataUser />} />
        <Route path='/flightConfirm' element={<FlightConfirm />} />
        {/* <Route path='/changeFlight' element={<ChangeFlight/>}/> */}

      </Routes>
    </>
  );
}

export default App;
