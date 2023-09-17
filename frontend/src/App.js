import './App.css';
import DashBoard from './modules/users/Pages/DashBoard';
import UserPage from './modules/users/Pages/UserPage';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>

      </Routes>
    </div>
  );
}

export default App;
