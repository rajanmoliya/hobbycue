import React, { useState } from "react";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      password.toLowerCase().trim() === "pass123" &&
      email.toLowerCase().trim() === "test@hobbycue.com"
    ) {
      if (document.getElementById("rememberMe").checked) {
        localStorage.setItem("loggedIn", true);
      } else {
        sessionStorage.setItem("loggedIn", true);
      }
      window.location.href = "/add";
    } else {
      alert("Invalid Credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="d-flex flex-column" style={{ height: "400px" }}>
      <button className="btn btn-outline-primary mt-3 google-btn">
        <img
          src="/images/google.svg"
          alt="google"
          height="20px"
          className="mb-1 me-1"
        />
        Continue with Google
      </button>
      <button className="btn btn-outline-primary mt-3 facebook-btn">
        <img
          src="/images/fb.svg"
          alt="facebook"
          height="20px"
          className="mb-1 me-1"
        />{" "}
        Continue with Facebook
      </button>
      <div className="or-connect mt-4 fw-semibold">
        <span>Or connect with</span>
      </div>
      <div className="input-group mt-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email (Hint: test@hobbycue.com)"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group mt-3">
        <input
          type={passwordVisible ? "text" : "password"}
          className="form-control"
          placeholder="Password (Hint: pass123)"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="input-group-text"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          <i
            className={
              passwordVisible
                ? "fas fa-eye-slash passbox"
                : "fas fa-eye passbox"
            }
          ></i>
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="form-check">
          <input type="checkbox" id="rememberMe" className="form-check-input" />
          <label
            htmlFor="rememberMe"
            className="form-check-label ms-2 small-text"
          >
            Remember me
          </label>
        </div>
        <a href="/" className="forgot-password small-text">
          Forgot password?
        </a>
      </div>
      <button className="btn btn-primary mt-3 custom-btn" onClick={handleLogin}>
        Continue
      </button>
    </div>
  );
};

export default LoginForm;
