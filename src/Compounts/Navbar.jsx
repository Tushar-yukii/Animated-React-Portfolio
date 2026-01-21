import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a className="logo" href="#hero">
          {/* error */}
          tushar tikkiwal
        </a>
        <nav className="desktop">{/* error */}</nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            {/* error */}
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;



