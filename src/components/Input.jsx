import React from "react";

const Input = ({ error, name, values, setValues, ...others }) => {
  const setChange = (name) => {

  }

  const handleChange = (event) => {
    if(event.name === "firstName") {
      const regex = '/[^a-zA-Z]+/ g';
      if(!regex.test(values.firstName)) {
        return;
      }
    }
    if(event.name === "lastName") {
      const regex = '/[^a-zA-Z]+/ g';
      if(!regex.test(values.lastName)) {
        return;
      }
    }
  
  }
  return (
    <div className="input-wrapper">
      <div className="field">
        <input {...others} name={name} value={values.name} onChange={handleChange(e, setChange)} />
      </div>
      <p>{error}</p>
    </div>
  );
};

export default Input;
