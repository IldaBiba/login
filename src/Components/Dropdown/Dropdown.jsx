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

  if (Array.isArray(options)) {
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
  } else if (typeof options === "object") {
    const groupedOptions = Object.entries(options).map(
      ([groupName, groupValues]) => ({
        label: groupName,
        items: Object.entries(groupValues).map(([value, label]) => ({
          label,
          value,
        })),
      })
    );
    return (
      <Dropdown
        value={value}
        options={groupedOptions}
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        onChange={onDropdownChange}
        placeholder="Select an option"
        className="custom-dropdown"
      />
    );
  }
};

export default DropdownComponent;
