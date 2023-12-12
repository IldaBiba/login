import React from "react";
import CardComponent from "../Card/Card";
import { Container } from "react-bootstrap";
import "./AllProperties.css";
import useAllProperties from "./useAllProperties";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllProperties() {
  const navigate = useNavigate();
  let { page_number } = useParams();
  const { handleButtonPrevious, handleButtonNext, fetchData, properties } =
    useAllProperties(page_number);
  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container style={{ display: "blocks" }}>
      <div>
        <button onClick={handleButtonPrevious}>Previous</button>
        <button onClick={handleButtonNext}>Next</button>
      </div>
      <div className="container-allproperties">
        {properties.map((item) => {
          return <CardComponent property={item} onChange={handleCardClick} />;
        })}
      </div>
    </Container>
  );
}
export default AllProperties;
