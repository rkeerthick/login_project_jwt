import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const Login = () => {
  const inputs = [
    {
      id: 1,
      type: "email",
      className: "input-field email",
      placeholder: "email ...",
      name: "email",
    },
    {
      id: 2,
      type: "text",
      className: "input-field password",
      placeholder: "password ...",
      name: "password",
    },
  ];
  return (
    <div className="wrapper">
      <h1 className="title">Divum Employee Details</h1>
      <form className="form">
        <p id="heading">Login</p>
        {inputs.map((data) => (
          <Input key={data.id} name={data.name} data={data} />
        ))}
        <div className="btn">
          <button className="button1">Login</button>
          <Link to="/signup">
            <button className="button2">Sign Up</button>
          </Link>
        </div>
        {/* <button className="button3">Forgot Password</button> */}
      </form>
    </div>
  );
};

export default Login;
