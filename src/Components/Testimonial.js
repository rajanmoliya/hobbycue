import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Testimonial.css";

const Testimonial = ({
  icon,
  title,
  text,
  personName,
  personRole,
  personImage,
  audioSrc,
}) => {
  return (
    <div className="testimonial card p-4 mb-4">
      <div className="row">
        <div className="col-12 col-md-2 text-center">
          <i className={`bi ${icon} display-1`} style={{ color: "purple" }}></i>
        </div>
        <div className="col-12 col-md-10">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-between">
          <div className="audio-player d-flex align-items-center justify-content-between w-100">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <button className="btn btn-primary text-center align-content-center btn-lg me-3 rounded-circle play-button">
                <i className="bi bi-play-fill" style={{ color: "white" }}></i>
              </button>
              <div className="audio-track col-12 custom-width">
                <input type="range" className="form-range" min="0" max="100" />
              </div>
              <span className="ms-2 fw-light">0:00</span>
              <img
                src={personImage}
                className="rounded-circle ms-4"
                alt={personName}
                width="60"
                height="60"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-row align-items-center mt-5 mt-md-0 person">
          <img
            src={personImage}
            className="rounded-circle"
            alt={personName}
            width="100"
            height="100"
          />
          <div className="ms-md-3 text-center text-md-start">
            <span className="mb-0">
              <strong>{personName}</strong>
            </span>
            <p className="text-muted">{personRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
