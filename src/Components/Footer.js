import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer bg-basewhite pt-5">
      <div>
        <div className="row mx-5">
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-greydarkest fw-bold">Hobbycue</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-greydarkest">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Work with Us
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-greydarkest fw-bold">How Do I</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-greydarkest">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Add a Listing
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Claim Listing
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Post a Query
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Add a Blog Post
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Other Queries
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-greydarkest fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-greydarkest">
                  Listings
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Shop / Store
                </a>
              </li>
              <li>
                <a href="/" className="text-greydarkest">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-greydarkest fw-bold">Social Media</h5>
            <div className="d-flex gap-2">
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/5296514-bird-tweet-twitter-twitter-logo-icon-3.svg"
                  alt="Twitter"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/104498-facebook-icon-1.svg"
                  alt="Facebook"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/5335781-camera-instagram-social-media-instagram-logo-icon-1.svg"
                  alt="Instagram"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/5279116-pin-pinterest-inspiration-pinterest-logo-icon-1.svg"
                  alt="Pinterest"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/843777-google-google--plus-icon-1.svg"
                  alt="Google Plus"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/4375133-logo-youtube-icon-1.svg"
                  alt="YouTube"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/4375108-logo-telegram-icon-1.svg"
                  alt="Telegram"
                />
              </button>
              <button
                className="social-icon bg-greylighter"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  src="https://c.animaapp.com/YMcgb6pC/img/1564504-email-letter-mail-message-icon-1.svg"
                  alt="Email"
                />
              </button>
            </div>
            <h5 className="text-greydarkest fw-bold mt-5">Invite Friends</h5>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email ID"
              />
              <button className="btn btn-primary custom-btn" type="button">
                Invite
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-5 end-strip">
          <p className="m-0">© Purple Cues Private Limited</p>
        </div>
      </div>
    </footer>
  );
};
