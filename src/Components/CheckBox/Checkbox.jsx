import React, { useState, useEffect, useRef } from "react";
import "./Checkbox.css";
import { Checkbox } from "primereact/checkbox";

const CheckboxComponent = ({ onChange, name, initialValue }) => {
  const [checkboxValue, setCheckboxValue] = useState(
    initialValue === "1" ? true : false
  );
  useEffect(() => {
    onChange(name, checkboxValue);
  }, [checkboxValue]);

  const handleChecked = (e) => {
    setCheckboxValue(e.checked);
  };

  return (
    <div className="custom-checkbox">
      <Checkbox
        onChange={handleChecked}
        // checked={checkboxValue === "1" ? true : false}
        checked={checkboxValue}
      ></Checkbox>
    </div>
  );
};

export default CheckboxComponent;
