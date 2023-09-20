import React from "react";
import Input from "../input/Input";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Signup = () => {
  const { values, setValues, headers } = useContext(DataContext);

  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "First Name...",
      className: "input-field firstName",
      name: "firstName",
      value: values.firstName,
      onChange: (e) => setValues({ ...values, firstName: e.target.value }),
    },
    {
      id: 2,
      type: "text",
      placeholder: "Last Name...",
      className: "input-field lastName",
      name: "lastName",
      value: values.lastName,
      onChange: (e) => setValues({ ...values, lastName: e.target.value }),
    },
    {
      id: 3,
      type: "email",
      placeholder: "Email...",
      className: "input-field email",
      name: "email",
      value: values.email,
      onChange: (e) => setValues({ ...values, email: e.target.value }),
    },
    {
      id: 4,
      type: "date",
      placeholder: "DOB...",
      className: "input-field dob",
      name: "dob",
      value: values.dob,
      onChange: (e) => setValues({ ...values, dob: e.target.value }),
    },
    {
      id: 5,
      type: "text",
      placeholder: "Phone number...",
      className: "input-field phoneNumber",
      name: "phoneNumber",
      value: values.phoneNumber,
      onChange: (e) => setValues({ ...values, phoneNumber: e.target.value }),
    },
    {
      id: 6,
      type: "password",
      placeholder: "Password...",
      className: "input-field password",
      name: "password",
      value: values.password,
      onChange: (e) => setValues({ ...values, password: e.target.value }),
    },
    {
      id: 7,
      type: "password",
      placeholder: "Confirm password...",
      className: "input-field confirmPassword",
      name: "confirmPassword",
      value: values.confirmPassword,
      onChange: (e) =>
        setValues({ ...values, confirmPassword: e.target.value }),
    },
  ];

  const inputs1 = [
    {
      id: 1,
      type: "text",
      placeholder: "First Name...",
      className: "input-field firstName",
      name: "firstName",
      value: values.firstName,
      onChange: (e) => setValues({ ...values, firstName: e.target.value }),
    },
    {
      id: 2,
      type: "text",
      placeholder: "Last Name...",
      className: "input-field lastName",
      name: "lastName",
      value: values.lastName,
      onChange: (e) => setValues({ ...values, lastName: e.target.value }),
    },
    {
      id: 3,
      type: "email",
      placeholder: "Email...",
      className: "input-field email",
      name: "email",
      value: values.email,
      onChange: (e) => setValues({ ...values, email: e.target.value }),
    },
    {
      id: 4,
      type: "date",
      placeholder: "DOB...",
      className: "input-field dob",
      name: "dob",
      value: values.dob,
      onChange: (e) => setValues({ ...values, dob: e.target.value }),
    },
    {
      id: 5,
      type: "text",
      placeholder: "Phone number...",
      className: "input-field phoneNumber",
      name: "phoneNumber",
      value: values.phoneNumber,
      onChange: (e) => setValues({ ...values, phoneNumber: e.target.value }),
    },
  ];

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(values, 'values');
    const res = await axios.put("http://localhost:8080/auth/update", values, {headers});
    console.log(res, 'update');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/auth/addNewUser",
      values
    );
    localStorage.setItem("userToken", res.data);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form>
        {values.email === "" ? (
          <h1>Sign Up</h1>
        ) : (
          <h1>Update {values.firstName}</h1>
        )}
        {values.email === "" 
        ? inputs.map((input) => (
        <Input
          key={input.id}
          name={input.name}
          onChange={input.onChange}
          {...input}
          value={values[input.name]}
          handleChange={handleChange}
        />))
        : inputs1.map((input) => (
        <Input
          key={input.id}
          name={input.name}
          onChange={input.onChange}
          {...input}
          value={values[input.name]}
          handleChange={handleChange}
        />))
      }
        
        
        {values.email === "" ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </form>
    </div>
  );
};

export default Signup;
