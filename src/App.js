
import './Style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Success from './components/Success';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='/signup' element={<Signup values={values} setValues={setValues}/>} />
          <Route path='/success' element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
