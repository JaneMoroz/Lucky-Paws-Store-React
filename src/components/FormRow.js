import React from "react";

const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={name}
      />
    </div>
  );
};

export default FormRow;
