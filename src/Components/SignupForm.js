import React, { useState } from "react";

const SignupForm = () => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = () => {
    alert(
      "Hey its just a demo! No sign up functionality implemented. Maybe coming soon! Till then, try Log in! :)"
    );
  };

  const calculatePasswordStrength = (password) => {
    if (password.length === 0) return "";
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    return strength;
  };

  const getPasswordStrengthLabel = (strength) => {
    switch (strength) {
      case 0:
        return "";
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Moderate";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  };

  const passwordStrength = calculatePasswordStrength(password);
  const strengthLabel = getPasswordStrengthLabel(passwordStrength);

  const strengthColor = (strength) => {
    switch (strength) {
      case 1:
        return "danger";
      case 2:
        return "warning";
      case 3:
        return "primary";
      case 4:
        return "info";
      case 5:
        return "success";
      default:
        return "light";
    }
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
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="input-group mt-3">
        <input
          type={passwordVisible ? "text" : "password"}
          className="form-control"
          placeholder="Password"
          value={password}
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
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="progress flex-grow-1 me-2">
          <div
            className={`progress-bar bg-${strengthColor(passwordStrength)}`}
            role="progressbar"
            style={{ width: `${(passwordStrength / 5) * 100}%` }}
            aria-valuenow={(passwordStrength / 5) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <small className="text-muted">Password meter</small>
      </div>
      <small className={`text-${strengthColor(passwordStrength)} mt-1`}>
        {strengthLabel}
      </small>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="tos">
          By continuing, you agree to our <a href="/">Terms of Service</a> and{" "}
          <a href="/">Privacy Policy</a>
        </span>
      </div>

      <button
        className="btn btn-primary mt-3 custom-btn"
        onClick={handleSignUp}
      >
        Agree and Continue
      </button>
    </div>
  );
};

export default SignupForm;
