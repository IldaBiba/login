import React from "react";
import { Container } from "react-bootstrap";
import "./AddProperty.css";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBarBottom/NavBar";
import InputAddProperty from "../../Components/InputAddProperty";

function AddProperty() {
  const info = useSelector((state) => state.modules);
  const option = info.describe.data.result.describe.fields;
  console.log(info, "DATA");

  return (
    <Container
      fluid
      style={{ display: "flex", margin: "30px", position: "relative" }}
    >
      <div className="flex-container">
        {option.map((item) => {
          console.log(item);
          // if (item.type.name == "picklist") {
          //   const optionsdropdown = item.type.picklistValues;
          //   return (
          //     <div class="flex-item ">
          //       <div className="input">
          //         <td className="inputname">{item.label}</td>
          //         {item.mandatory && <span style={{ color: "red" }}>*</span>}
          //       </div>

          //       <td className="inputnameValue">
          //         <DropdownComponent optionsdropdown={optionsdropdown} />
          //       </td>
          //     </div>
          //   );
          // } else if (item.type.name == "boolean") {
          //   return (
          //     <div className="flex-item ">
          //       <div className="input">
          //         <td className="inputname">{item.label}</td>
          //         {item.mandatory && <span style={{ color: "red" }}>*</span>}
          //       </div>
          //       <td className="inputnameValue">
          //         <CheckboxComponent />
          //       </td>
          //     </div>
          //   );
          // } else {
          //   return (
          //     <div className="flex-item ">
          //       <div className="input">
          //         <td className="inputname">{item.label}</td>
          //         {item.mandatory && <span style={{ color: "red" }}>*</span>}
          //       </div>
          //       <td className="inputnameValue">
          //         <Input />
          //       </td>
          //     </div>
          //   );
          // }
          return (
            <div className="flex-item ">
              <div className="input">
                <td className="inputname">{item.label}</td>
                {item.mandatory && <span style={{ color: "red" }}>*</span>}
              </div>

              <td className="inputnameValue">
                <InputAddProperty
                  type={item.type.name}
                  options={item.type.picklistValues}
                />
              </td>
            </div>
          );
        })}
      </div>
      <NavBar />
    </Container>
  );
}

export default AddProperty;
