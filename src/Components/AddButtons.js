import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./AddButtons.css";

const AddButtons = ({ title, description, icon, iconColor }) => {
  return (
    <Card
      className="text-center my-2 p-3 border-0 shadow-sm button-card"
      style={{
        borderColor: iconColor,
        "--icon-color": iconColor,
      }}
    >
      <Card.Body>
        <i
          className={`bi ${icon} card-icon`}
          style={{ fontSize: "2rem", color: iconColor }}
        ></i>
        <Card.Title className="mt-3 card-title">{title}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AddButtons;
