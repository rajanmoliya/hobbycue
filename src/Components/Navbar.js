import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const items = [
  "People - Community",
  "Places - Venues",
  "Programs - Events",
  "Products - Store",
  "Blogs",
];

const isLoggedIn = () => {
  return (
    localStorage.getItem("loggedIn") === "true" ||
    sessionStorage.getItem("loggedIn") === "true"
  );
};

const Navbar = () => {
  const location = useLocation();
  const isAddRoute = location.pathname === "/add";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignout = () => {
    localStorage.removeItem("loggedIn");
    sessionStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExploreOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleExploreDropdown = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsProfileOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsExploreOpen(false);
  };

  return (
    <header className="bg-light border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <div className="d-flex align-items-center">
            {!isAddRoute && (
              <img
                src="logo.png"
                alt="Logo"
                className="me-2 logo d-block"
                style={{ height: "40px" }}
              />
            )}
            {isAddRoute && (
              <>
                <img
                  src="logo.png"
                  alt="Logo"
                  className="me-2 logo d-none d-md-block"
                  style={{ height: "40px" }}
                />
                <img
                  src="logo_square.svg"
                  alt="Logo Square"
                  className="me-2 logo d-block d-md-none"
                  style={{ height: "40px" }}
                />
              </>
            )}
          </div>
        </Link>
        <div className="d-flex align-items-center d-none d-md-flex">
          <input
            type="text"
            className="form-control custom-rounded-right"
            placeholder="Search here..."
          />
          <button className="btn btn-primary custom-btn custom-rounded-left">
            Q
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3 d-none hide-1100" ref={dropdownRef}>
            <button
              className="btn btn-light ms-2"
              type="button"
              id="exploreDropdown"
              onClick={toggleExploreDropdown}
            >
              <img src="images/explore.svg" alt="Explore" />
              <span className="text-black fs-6 fw-medium font-family-Poppins mt-1 px-1">
                Explore
              </span>
              <img src="images/expand_arrow.svg" alt="exarrow" />
            </button>
            {isExploreOpen && (
              <div
                className="dropdown-menu show"
                aria-labelledby="exploreDropdown"
              >
                {items.map((item, index) => (
                  <a key={index} className="dropdown-item" href="/">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="dropdown me-3 d-none hide-1100">
            <button
              className="btn btn-light"
              type="button"
              id="hobbiesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="images/hobbies.png" alt="hobbies" />
              <span className="text-black fs-6 fw-medium font-family-Poppins mt-1 px-1">
                Hobbies
              </span>
              <img src="images/expand_arrow.svg" alt="exarrow" />
            </button>
          </div>
          <button className="btn btn-light d-md-none">
            <i className="bi bi-search"></i>
          </button>
          <button className="btn btn-light d-none d-md-flex">
            <img src="images/bookmark.svg" alt="bookmark" />
          </button>
          <button className="btn btn-light">
            <img src="images/notif.svg" alt="notifications" />
          </button>
          <button className="btn btn-light me-4 d-none d-md-flex">
            <img src="images/cart.svg" alt="cart" />
          </button>
          {loggedIn ? (
            <div className="dropdown d-none d-md-block" ref={dropdownRef}>
              <button
                className="btn d-flex align-items-center"
                type="button"
                id="profileDropdown"
                onClick={toggleProfileDropdown}
                aria-expanded={isProfileOpen}
              >
                <img
                  src="/images/user.png"
                  alt="Profile"
                  className="rounded-circle me-2"
                  width="48"
                  height="48"
                />
                <img src="images/expand_arrow.svg" alt="exarrow" />
              </button>
              {isProfileOpen && (
                <ul
                  className="dropdown-menu dropdown-menu-end show"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <button className="dropdown-item" onClick={handleSignout}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button
              className="btn btn-outline-primary custom-outline-btn me-5 w-5 d-none d-md-flex justify-content-center"
              style={{ width: "100px" }}
            >
              Sign In
            </button>
          )}
          <button className="btn btn-light d-md-none" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container-fluid bg-light">
          <div className="d-flex flex-column align-items-start py-2">
            <div className="d-flex justify-content-between w-100 mb-2">
              <button className="btn btn-light d-md-none" onClick={toggleMenu}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/bookmark.svg" alt="bookmark" /> Bookmark
            </button>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/notif.svg" alt="notifications" /> Notifications
            </button>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/cart.svg" alt="cart" /> Cart
            </button>
            {loggedIn ? (
              <div className="dropdown w-100 d-flex" ref={dropdownRef}>
                <button
                  className="btn d-flex justify-content-center align-items-center w-100"
                  type="button"
                  id="profileDropdownMobile"
                  onClick={toggleProfileDropdown}
                  aria-expanded={isProfileOpen}
                >
                  <img
                    src="/images/user.png"
                    alt="Profile"
                    className="rounded-circle me-2"
                    width="48"
                    height="48"
                  />
                  <span>User</span>
                  <img src="images/expand_arrow.svg" alt="exarrow" />
                </button>
                {isProfileOpen && (
                  <ul
                    className="dropdown-menu dropdown-menu-end show"
                    aria-labelledby="profileDropdownMobile"
                  >
                    <li>
                      <button className="dropdown-item" onClick={handleSignout}>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <button className="btn btn-outline-primary custom-outline-btn w-100 mb-2">
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
