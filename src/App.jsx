import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFountPage from './Pages/NotFountPage';
import ProfilePage from './Pages/ProfilePage';
import RegisterPage from './Pages/RegisterPage';
import PrivetRoutes from './Routes/PrivetRoutes';

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<PrivetRoutes/>}>
      <Route path='/' element={<HomePage/>}  exact/>
      <Route path='/me' element={<ProfilePage/>} />
      </Route>
     
     <Route path='/login' element={<LoginPage/>} />
     <Route path='/register' element={<RegisterPage/>} />
     <Route path='*' element={<NotFountPage/>} />
    </Routes>
    </>
  );
};

export default App;
