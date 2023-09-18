import React from "react";

const Input = ({...others}) => {
  return (
    <div className="field">
      <input
        {...others}
      />
    </div>
  );
};

export default Input;
