import axios from "axios";
import React, { useEffect, useState } from "react";
import './Table.css'
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Table = () => {

  const { headers } = useContext(DataContext)
  
  const [value, setValue] = useState([]);
  const [del, setDel] = useState(false);

  const load = async () => {
    const res = await axios.get("http://localhost:8080/auth/getAllUsers", {
      headers
    });
    setValue(res.data);
  };

  useEffect(() => load, [del]);

  const handleDelete = async (e) => {
    await axios.delete("http://localhost:8080/auth/delete/"+e.target.value, {headers})
    setDel(!del);
    console.log("deleted");
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
            item.email !== 'admin@gmail.com' && 
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.dob}</td>
                <td><button value={item.email} onClick={handleDelete}>delete</button></td>
              </tr>

            
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
