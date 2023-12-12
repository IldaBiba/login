import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const useAddPropety = () => {
  const info = useSelector((state) => state.describe);
  const option = info.describe.data.result.describe.fields;
  const session = localStorage.getItem("session");
  const [itemData, setItemData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const handleItemChange = (name, value) => {
    // setItemData({ ...itemData, [name]: value });
    if (value !== "") {
      setItemData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  console.log(id, "id e nje property");
  console.log(itemData);
  const required_option = option.filter((item) => item.mandatory == true);

  const handleCancelButton = () => {
    console.log("Cancel");
  };
  let isAlert = true;
  const handleSaveButton = async () => {
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
      toast("Validation failed", {
        position: toast.POSITION.TOP_RIGHT,
        className: "custom-toast-error",
      });
    } else {
      toast("Validation successful!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "custom-toast-success",
      });

      let property = {
        _operation: "saveRecord",
        _session: session,
        module: "Properties",
        values: itemData,
      };
      if (id) {
        property = {
          _operation: "saveRecord",
          _session: session,
          module: "Properties",
          record: id,
          values: itemData,
        };
      }
      console.log(property);
      try {
        const response = await axios.post(
          "https://anem-topia.bspvision.com/modules/Mobile/api.php",
          property
        );
        if (response.data.success) {
          dispatch({
            type: "ADDPROPERTY_SUCCESS",
            payload: response,
          });
          toast("Property saved successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            className: "custom-toast-success",
          });
          navigate("/all-properties/1");
        } else {
          dispatch({
            type: "ADDPROPERTY_ERROR",
            payload: response,
          });
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(required_option);
    console.log(itemData);
  };
  return { handleSaveButton, handleCancelButton, handleItemChange };
};
export default useAddPropety;
