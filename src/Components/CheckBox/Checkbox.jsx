import React, { useState, useEffect, useRef } from "react";
import "./Checkbox.css";
import { Checkbox } from "primereact/checkbox"; // Add your custom styles here

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);
  const checkboxRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (checkboxRef.current && !checkboxRef.current.contains(event.target)) {
  //       // Uncomment the line below if you want to uncheck the checkbox when clicking outside
  //       // setIsChecked(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [checkboxRef]);

  return (
    <div className="custom-checkbox">
      <Checkbox
        onChange={(e) => setChecked(e.checked)}
        checked={checked}
      ></Checkbox>
    </div>
  );
};

export default CheckboxComponent;
