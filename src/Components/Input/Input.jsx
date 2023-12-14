import DropdownComponent from "../Dropdown/Dropdown";
import CheckboxComponent from "../CheckBox/Checkbox";
import TextInput from "../InputText/Input";
import "./Input.css";

const Input = ({ input, onChange }) => {
  const handleInputChange = (name, value) => {
    onChange(name, value);
  };

  return (
    <div className="flex-item ">
      <div className="input">
        <td className="inputname">{input.label}</td>
        {input.mandatory && <span style={{ color: "red" }}>*</span>}
      </div>

      <td className="inputnameValue">
        {input.type.name === "picklist" ? (
          <DropdownComponent
            options={input.type.picklistValues}
            name={input.name}
            onChange={handleInputChange}
            initialValue={input.default}
          />
        ) : input.type.name === "boolean" ? (
          <CheckboxComponent name={input.name} onChange={handleInputChange} />
        ) : input.type.name === "multipicklist" ? (
          <DropdownComponent
            options={input.type.picklistValues}
            name={input.name}
            onChange={handleInputChange}
            initialValue={input.default}
          />
        ) : input.type.name === "owner" ? (
          <DropdownComponent
            options={input.type.picklistValues}
            name={input.name}
            onChange={handleInputChange}
            initialValue={input.default}
          />
        ) : (
          <TextInput
            name={input.name}
            onChange={handleInputChange}
            initialValue={input.default}
          />
        )}
      </td>
    </div>
  );
};

export default Input;
