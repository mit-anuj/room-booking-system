import './App.css';
import UserLogin from './modules/users/Pages/UserLogin';
import {Routes,Route} from 'react-router-dom';
import UserSignup from './modules/users/Pages/UserSignup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element = {<UserSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
