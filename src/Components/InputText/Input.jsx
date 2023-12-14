import React from "react";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import "./Input.css";
import { useEffect } from "react";

const TextInput = ({ onChange, name, initialValue }) => {
  const [value, setTextValue] = useState(initialValue);
  useEffect(() => {
    onChange(name, value);
  }, [value]);
  const handleInput = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <InputText
      value={value}
      onChange={handleInput}
      className="input-add-property"
    />
  );
};

export default TextInput;
