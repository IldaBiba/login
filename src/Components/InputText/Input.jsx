import React from "react";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import "./Input.css";
import { useEffect } from "react";

const TextInput = ({ onChange, name }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    onChange(name, value);
  }, [value]);
  const handleInput = (e) => {
    setValue(e.target.value);
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
