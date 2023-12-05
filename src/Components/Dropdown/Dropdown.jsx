import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css";
import "./Dropdown.css";

const DropdownComponent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onDropdownChange = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <Dropdown
      value={selectedOption}
      options={options}
      onChange={onDropdownChange}
      placeholder="Select an option"
      filter
      className="custom-dropdown"
    />
  );
};

export default DropdownComponent;
