import React, { useState, useEffect, useRef } from "react";
import "./Checkbox.css";
import { Checkbox } from "primereact/checkbox";

const CheckboxComponent = ({ onChange, name }) => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    onChange(name, value);
  }, [value]);

  const handleChecked = (e) => {
    setValue(e.checked);
  };

  return (
    <div className="custom-checkbox">
      <Checkbox onChange={handleChecked} checked={value}></Checkbox>
    </div>
  );
};

export default CheckboxComponent;
