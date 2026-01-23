import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      {/* error */}
      <div className="inner">
        <a href="#hero" className="logo">
          Tushar Tikkiwal
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn">
          {/* error */}
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
