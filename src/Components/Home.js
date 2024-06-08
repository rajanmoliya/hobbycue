import React, { useState } from "react";
import "./Home.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Home = () => {
  const [activeTab, setActiveTab] = useState("signin");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-4 fst-italic fw-semibold fs-1">
            Explore your <span className="highlight-blue">hobby</span> or{" "}
            <span className="highlight">passion</span>
          </h1>
          <p className="lead mt-3 fw-medium fs-6">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="lead fw-medium fs-6">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="card sign-in-card p-4">
            <ul className="nav nav-tabs my-3">
              <li className="nav-item">
                <button
                  className={`nav-link fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2 ${
                    activeTab === "signin" ? "active" : "not-active"
                  }`}
                  onClick={() => handleTabClick("signin")}
                >
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2 ${
                    activeTab === "signup" ? "active" : "not-active"
                  }`}
                  onClick={() => handleTabClick("signup")}
                >
                  Join In
                </button>
              </li>
            </ul>
            {activeTab === "signin" ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
      <div className="artwork-container">
        <img
          src="/images/people1.svg"
          alt="People Artwork"
          className="people-artwork artwork"
        />
        <img
          src="/images/people2.svg"
          alt="Another Artwork"
          className="another-artwork artwork"
        />
      </div>
    </div>
  );
};

export default Home;
