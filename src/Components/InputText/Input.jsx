import React from "react";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import "./Input.css";

const TextInput = () => {
  const [value, setValue] = useState("");

  return (
    <InputText
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input-add-property"
    />
  );
};

export default TextInput;
