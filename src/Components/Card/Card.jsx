import React from "react";
import { Card } from "primereact/card";

const CardComponent = ({ property, onChange }) => {
  const handleClick = () => {
    onChange(property.id, property);
  };
  return (
    <Card
      title={property.price + property.business_type}
      subtitle={property.title}
      footer={property.zone + property.division}
      onClick={handleClick}
    ></Card>
  );
};

export default CardComponent;
