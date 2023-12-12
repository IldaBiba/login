import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./AddProperty.css";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBarBottom/NavBar";
import Input from "../../Components/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAddPropety from "./useAddProperty";

function AddProperty() {
  const info = useSelector((state) => state.describe);
  const option = info.describe.data.result.describe.fields;

  const { handleSaveButton, handleCancelButton, handleItemChange } =
    useAddPropety();

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
