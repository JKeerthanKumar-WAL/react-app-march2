import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MembersRoute from './MembersRoute';
import RegisterRouterFormik from './RegisterRouterFormik';
import LoginRouterFormik from './LoginRouterFormik';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedUserRoute from './ProtectedUserRoute';

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to App</h1>
      <BrowserRouter>
        <Link to="/register"><b>Registration</b></Link><br />
        <Link to='/login'><b>Log In</b></Link><br />
        <Link to='/member'><b>Member</b></Link><br />
        <Routes>
          <Route path='/register' element={<RegisterRouterFormik />} />
          <Route path='/login' element={< LoginRouterFormik />} />
          <Route element={<ProtectedUserRoute />}>
            <Route path='/member' element={<MembersRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
