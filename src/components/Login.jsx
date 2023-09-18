import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import "./Login.css";

const Login = () => {
  const inputs = [
    {
      id: 1,
      type: "text",
      className: "input-field firstName",
      placeholder: "First Name ...",
    },
    {
      id: 2,
      type: "text",
      className: "input-field password",
      placeholder: "email ...",
    },
  ];
  return (
    <div>
      <form className="form">
        <p id="heading">Login</p>
        {inputs.map((data) => (
          <Input key={data.id} {...data} />
        ))}
        <div className="btn">
          <button className="button1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
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
