import DropdownComponent from "../Dropdown/Dropdown";
import CheckboxComponent from "../CheckBox/Checkbox";
import TextInput from "../InputText/Input";
import "./Input.css";

const Input = ({ item, onChange }) => {
  const handleInputChange = (name, value) => {
    console.log(name, value);
    onChange(name, value);
  };

  return (
    <div className="flex-item ">
      <div className="input">
        <td className="inputname">{item.label}</td>
        {item.mandatory && <span style={{ color: "red" }}>*</span>}
      </div>

      <td className="inputnameValue">
        {item.type.name === "picklist" ? (
          <DropdownComponent
            options={item.type.picklistValues}
            name={item.name}
            onChange={handleInputChange}
          />
        ) : item.type.name === "boolean" ? (
          <CheckboxComponent name={item.name} onChange={handleInputChange} />
        ) : item.type.name === "multipicklist" ? (
          <DropdownComponent
            options={item.type.picklistValues}
            name={item.name}
            onChange={handleInputChange}
          />
        ) : item.type.name === "owner" ? (
          <DropdownComponent
            options={item.type.picklistValues}
            name={item.name}
            onChange={handleInputChange}
          />
        ) : (
          <TextInput name={item.name} onChange={handleInputChange} />
        )}
      </td>
    </div>
  );
};
export default Input;
