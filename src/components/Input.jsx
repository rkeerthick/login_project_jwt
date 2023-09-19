import React from "react";

const Input = ({name, data, values, setValues }) => {
  const setChange = (name) => {};


  const handleChange = (event) => {
    if (event.name === "firstName") {
      const regex = "/[^a-zA-Z]+/ g";
      if (!regex.test(values.firstName)) {
        return;
      }
    }
    if (event.name === "lastName") {
      const regex = "/[^a-zA-Z]+/ g";
      if (!regex.test(values.lastName)) {
        return;
      }
    }
    if (event.name === "email") {
    }
  };
  
  return (
    <div className="input-wrapper">
      <div className="field">
        <input name={name} value={values.name} onChange={(e) => setValues({...values, [e.target.name]:e.target.value})} />
      </div>
      {/* <p>{error}</p> */}
    </div>
  );
};

export default Input;
