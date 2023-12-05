import CheckboxComponent from "./CheckBox/Checkbox";
import DropdownComponent from "./Dropdown/Dropdown";
import TextInput from "./InputText/Input";

const InputAddProperty = ({ type, options }) => {
  console.log("here");
  switch (type) {
    case "picklist":
      return <DropdownComponent options={options} />;
    case "boolean":
      return <CheckboxComponent />;
    default:
      return <TextInput />;
  }
};
export default InputAddProperty;
