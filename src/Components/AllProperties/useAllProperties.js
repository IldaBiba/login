import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const useAllProperties = (page_number) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();

  const handleButtonNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleButtonPrevious = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    fetchData();
    navigate(`/all-properties/${page}`);
  }, [page]);

  const fetchData = async () => {
    console.log(page);
    const session = localStorage.getItem("session");
    const allProperties = {
      _operation: "listModuleRecords",
      _session: session,
      module: "Properties",
      page: page_number,
    };
    try {
      const response = await axios.post(
        "https://demo.bspvision.com/modules/Mobile/api.php",
        allProperties
      );
      console.log(response);
      if (response.data.success) {
        dispatch({
          type: "ALLPROPERTIES_SUCCESS",
          payload: response,
        });
        setProperties(response.data.result.records);
      } else {
        dispatch({
          type: "ALLPROPERTIES_ERROR",
          payload: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleButtonPrevious, handleButtonNext, fetchData, properties };
};
export default useAllProperties;
