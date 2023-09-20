import axios from "axios";
import React, { useEffect, useState } from "react";
import './Table.css'
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Table = () => {

  const { headers } = useContext(DataContext)
  
  const [value, setValue] = useState([])

  const load = async () => {
    const res = await axios.get("http://localhost:8080/auth/getAllUsers", {
      headers,
    });
    setValue(res.data);
  };

  useEffect(() => load, []);

  const handleDelete = async (e) => {

  }

  console.log(value, 'value');
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Edits</th>
          </tr>
        </thead>
        <tbody>
          {console.log(value, "value1")}
          {value.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.dob}</td>
                <td><button onClick={handleDelete}>delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
