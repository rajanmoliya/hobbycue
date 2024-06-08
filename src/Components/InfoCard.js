import React from "react";
import "./InfoCard.css";

const InfoCard = ({ icon, title, text, buttonText, iconColor }) => {
  return (
    <div className="top-info">
      <div className="col mid-info">
        <div className="card h-100 text-md-start text-center">
          <div className="card-body">
            <i
              className={`bi ${icon} display-6 mb-3 ms-3`}
              style={{ color: iconColor }}
            ></i>
            <span className="card-title ms-3 fw-bold fs-4">{title}</span>
            <p className="card-text ms-3 mt-4">{text}</p>
            <button
              onClick={() => window.location.replace("/add")}
              className="btn btn-outline-primary custom-outline-btn ms-3 mt-1"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
