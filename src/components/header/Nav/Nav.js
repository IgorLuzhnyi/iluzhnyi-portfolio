import { Link } from "react-scroll";
import { NavStyled } from "./NavStyled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const Nav = () => {
  const [navIcon, setNavIcon] = useState(<GiHamburgerMenu />);
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("media-nav");

  const closeNav = () => {
    setNavIcon(<GiHamburgerMenu />);
    setActive("media-nav");
    setNavOpen(false);
  };

  const openNav = () => {
    setNavIcon(<AiOutlineClose />);
    setActive("media-nav media-nav-active");
    setNavOpen(true);
  };

  const navAction = () => (navOpen ? closeNav() : openNav());

  useEffect(() => {}, [navOpen]);

  return (
    <NavStyled>
      <button id="burger-menu" onClick={navAction}>
        {navIcon}
      </button>
      <ul className="nav">
        <li>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            duration={300}
          >
            Intro
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={300}
          >
            Works
          </Link>
        </li>
        <a
          href="https://drive.google.com/file/d/1imHOJ-HogBgT5k-lC579Q1Hxa-oEbekP/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          id="cv-button"
        >
          CV
        </a>
      </ul>
      <div className="media-nav__container">
        <ul className={active}>
          <li onClick={closeNav}>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              duration={300}
            >
              Intro
            </Link>
          </li>
          <li onClick={closeNav}>
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              duration={300}
            >
              Works
            </Link>
          </li>
          <a
            href="https://drive.google.com/file/d/1imHOJ-HogBgT5k-lC579Q1Hxa-oEbekP/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            id="cv-button"
            onClick={closeNav}
          >
            CV
          </a>
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;
