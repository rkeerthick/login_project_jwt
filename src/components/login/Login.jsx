import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../input/Input";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Login = () => {
  const { values, setValues } = useContext(DataContext);
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      type: "email",
      className: "input-field email",
      placeholder: "email ...",
      name: "email",
      value: values.email,
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
      error: "Invalid email",
      onChange: (e) => setValues({ ...values, email: e.target.value }),
    },
    {
      id: 2,
      type: "password",
      className: "input-field password",
      placeholder: "password ...",
      name: "password",
      value: values.password,
      onChange: (e) => setValues({ ...values, password: e.target.value }),
    },
  ];

  const handleClick = async (e) => {
    {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:8080/auth/getUser",
        values
      );
      console.log(res, "res");
      localStorage.setItem("userToken", res.data);

      if (values.email === "admin@gmail.com")
        navigate("/table", { replace: true });
      else {
        if (res.data === "email not found" || res.data === "Invalid Password") {
          alert(res.data);
        } else {
          const res1 = await axios.get(
            "http://localhost:8080/auth/getUserEmail/" + values.email
          );

          setValues({
            email: res1.data.email,
            firstName: res1.data.firstName,
            lastName: res1.data.lastName,
            phoneNumber: res1.data.phoneNumber,
            dob: res1.data.dob,
          });
          console.log(res1.data, "res1");
          navigate("/signup", { replace: true });
        }
      }
    }

    // console.log(res, "response");
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            name={input.name}
            onChange={input.onChange}
            {...input}
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button className="login-signin">Submit</button>
        <Link to="/signup">
          <button className="login-signup">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
