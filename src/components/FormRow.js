import React from "react";

const FormRow = ({ type, name, value, handleChange, placeholderText }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={placeholderText ? placeholderText : name}
      />
    </div>
  );
};

export default FormRow;
