
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFountPage from './Pages/NotFountPage';
import ProfilePage from './Pages/ProfilePage';
import RegisterPage from './Pages/RegisterPage';

const App = () => {
  return (
    <>
    <Routes>
     <Route path='/' element={<HomePage/>}  exact/>
     <Route path='/login' element={<LoginPage/>} />
     <Route path='/register' element={<RegisterPage/>} />
     <Route path='/me' element={<ProfilePage/>} />
     <Route path='*' element={<NotFountPage/>} />
    </Routes>
    </>
  );
};

export default App;
