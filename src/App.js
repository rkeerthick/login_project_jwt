import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Success from "./components/Success";

import { useState } from "react";
import Table from "./components/table/Table";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login login={login} setLogin={setLogin} />} />
          <Route
            path="/signup"
            element={<Signup values={values} setValues={setValues} />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
