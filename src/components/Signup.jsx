import React from "react";
import Input from "./Input";
import axios from "axios";

const Signup = ({values, setValues}) => {

  const inputs = [
    {
      id:1,
      type: "text",
      placeholder: "First Name...",
      className: "input-field firstName",
      name: "firstName"
    },
    {
      id:2,
      type: "text",
      placeholder: "Last Name...",
      className: "input-field lastName",
      name: "lastName"
    },
    {
      id:3,
      type: "email",
      placeholder: "Email...",
      className: "input-field email",
      name: "email"
    },
    {
      id:4,
      type: "date",
      placeholder: "DOB...",
      className: "input-field dob",
      name: "dob"
    },
    {
      id:5,
      type: "text",
      placeholder: "Phone number...",
      className: "input-field phoneNumber",
      name: "phoneNumber"
    },
    {
      id:6,
      type: "password",
      placeholder: "Password...",
      className: "input-field password",
      name: "password"
    },
    {
      id:7,
      type: "password",
      placeholder: "Confirm password...",
      className: "input-field confirmPassword",
      name: "confirmPassword"
    }
  ]

  const handleSubmit = async() => {
    const res = await axios.post("http://localhost:8080/signup", )
  }

  return (
    <div className="wrapper">
      <h1 className="title">Divum Employee Details</h1>
      <form className="form">
        <p id="heading">Register</p>
        {inputs.map((data) => (
          <Input key={data.id} name={data.name} {...data} values={values} setValues={setValues} />
        ))}
        
        <div className="btn">
          <button className="button2" onClick={()=>handleSubmit()}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
