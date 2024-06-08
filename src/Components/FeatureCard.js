import React from "react";

const FeatureCard = ({ icon, title, text, buttonText, iconColor }) => {
  return (
    <div className="col">
      <div className="card h-100 text-md-start text-center">
        <div className="card-body">
          <div className="flex justify-content-start align-items-center mb-3">
            <i
              className={`bi ${icon} display-6 mb-3 ms-3`}
              style={{ color: iconColor }}
            ></i>
            <span className="card-title ms-3 fw-semibold fs-4">{title}</span>
          </div>
          <p className="card-text ms-3">{text}</p>
          <button
            onClick={() => (window.location.href = "/add")}
            className="btn btn-outline-primary custom-outline-btn ms-3"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
