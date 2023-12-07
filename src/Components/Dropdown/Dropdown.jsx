import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css";
import "./Dropdown.css";

const DropdownComponent = ({ options, onChange, name }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChange(name, value);
  }, [value]);
  const onDropdownChange = (e) => {
    setValue(e.value);
  };

  return (
    <Dropdown
      value={value}
      options={options}
      onChange={onDropdownChange}
      placeholder="Select an option"
      filter
      className="custom-dropdown"
    />
  );
};

export default DropdownComponent;
