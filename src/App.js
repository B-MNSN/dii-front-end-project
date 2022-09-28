import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import UserInformation from './components/UserInformation';
import './index.css';

import BookFlight from './pages/BookFlight';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserInformation/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bookFlight' element={<BookFlight/>}/>

      </Routes>
    </>
  );
}

export default App;
