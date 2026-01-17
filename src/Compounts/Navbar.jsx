import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a className="logo" href="#hero">
          Tushar Tikkiwal
          {/* error */}
        </a>
        <nav className="desktop">{/* error */}</nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
