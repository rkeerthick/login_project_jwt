import React, { useState } from "react";
import "./Input.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Input = ({ handleChange, label, name, onChange,  error, ...others }) => {
  const { values, setValues } = useContext(DataContext);

  const validateChange = (e) => {
    if(name === 'email') {
      const regex = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
      if(values[name] === '' || !regex.text(values[name])) return;
    }
    if(name === 'firstName' || name === 'lastName') {
      const regex = '^[a-zA-Z]+$'
      if (values[name] === "" || !regex.text(values[name])) return;
    }
    if(name === 'phoneNumber') {
      const regex = "^[0-9]";
      if(values[name] === '' || !regex.text(values[name])) return;
    }
    if(name === 'password') {
      const regex =
        "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9!@$%*#?&]{8,20}$";
        if(values[name] === '' || regex.test(values[name])) return;
    }
    
    setValues({...values, [e.target.name]: e.target.value})
  };

  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <input
        {...others}
        // onChange={handleChange}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => others.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
