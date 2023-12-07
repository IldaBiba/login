import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./AddProperty.css";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBarBottom/NavBar";
import Input from "../../Components/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProperty() {
  const info = useSelector((state) => state.describe);
  const option = info.describe.data.result.describe.fields;
  const [itemData, setItemData] = useState({});
  //const [isAlert, setIsAlert] = useState(true);

  const handleItemChange = (name, value) => {
    setItemData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const required_option = option.filter((item) => item.mandatory == true);

  const handleCancelButton = () => {
    console.log("Cancel");
  };
  let isAlert = true;
  const handleSaveButton = () => {
    required_option.map((item) => {
      for (const property in itemData) {
        if (item.name == property) {
          const value = itemData[property];

          console.log(item.name, property, value, "value");
          if (value !== "") {
            isAlert = false;
          } else {
            isAlert = true;
          }
          console.log(isAlert, "per cdo property");
        }
      }
      console.log(isAlert, "ne fund te all property  ");
    });
    if (isAlert) {
      console.log("kemi alert,nuk mund te vazhdojme save te new property");
      //alert("Nuk i keni plotesuar te gjithe fushat e nevojshme.");
      toast("Validation failed", {
        position: toast.POSITION.TOP_RIGHT,
        className: "custom-toast-error",
      });
    } else {
      //console.log("nuk kemi alert,mund te vazhdojme save te new property");

      toast("Validation successful!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "custom-toast-success",
      });
    }

    console.log(required_option);
    console.log(itemData);
  };

  return (
    <Container
      fluid
      style={{ display: "flex", margin: "30px", position: "relative" }}
    >
      <div className="flex-container">
        {option.map((item, key) => {
          return (
            <Input item={item} onChange={handleItemChange} inputId={key} />
          );
        })}
      </div>
      <ToastContainer />
      <NavBar onCancel={handleCancelButton} onSave={handleSaveButton} />
    </Container>
  );
}

export default AddProperty;
