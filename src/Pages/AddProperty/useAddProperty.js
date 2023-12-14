import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const useAddPropety = () => {
  const info = useSelector((state) => state.describe);
  const option = info.describe.data.result.describe.fields;
  const { state } = useLocation();
  const initialValue = state?.initialValue ?? {};
  const session = localStorage.getItem("session");
  const [propertyData, setPropertyData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  // useEffect(() => {
  //   setPropertyData(initialValue);
  // }, []);
  const required_option = option.filter((item) => item.mandatory == true);
  console.log(initialValue);
  const defaultChange = () => {
    if (Object.keys(initialValue).length > 0) {
      option.map((item, key) => {
        const propertiesname = Object.keys(initialValue);

        if (propertiesname.length > 0) {
          const matchingProperty = propertiesname.find(
            (property) => item.name === property
          );

          if (matchingProperty) {
            const value = initialValue[matchingProperty];
            item["default"] = value;
          }
        }
      });
      return option;
    } else {
      option.map((item) => {
        item.default = "";
      });
      console.log("no value default");
      return option;
    }
  };

  const handleItemChange = (name, value) => {
    if (value !== "") {
      setPropertyData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCancelButton = () => {
    console.log("Cancel");
  };

  let isAlert = true;
  const handleSaveButton = async () => {
    required_option.map((item) => {
      for (const property in propertyData) {
        if (item.name == property) {
          const value = propertyData[property];

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
        values: propertyData,
      };
      if (id) {
        property = {
          _operation: "saveRecord",
          _session: session,
          module: "Properties",
          record: id,
          values: propertyData,
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
    console.log(propertyData);
  };
  return {
    handleSaveButton,
    handleCancelButton,
    handleItemChange,
    defaultChange,
  };
};
export default useAddPropety;
