import './App.css';
import UserLogin from './modules/users/Pages/UserLogin';
import {Routes,Route} from 'react-router-dom';
import UserSignup from './modules/users/Pages/UserSignup';
import Booking from './modules/users/Pages/Booking';
import DashBoard from './modules/users/Pages/DashBoard';
import UserPage from './modules/users/Pages/UserPage';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/bookings" element={<Booking/>}/>
      </Routes>
    </div>
  );
}

export default App;
