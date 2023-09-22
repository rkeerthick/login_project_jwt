import React, { useState, createContext} from 'react'

export const DataContext = createContext({})

export const DataContextProvider = ({children}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("userToken"),
  };



  return (
    <DataContext.Provider value={{
      values, setValues, error, setError, headers
    }}>
        {children}
    </DataContext.Provider>
  )
}
