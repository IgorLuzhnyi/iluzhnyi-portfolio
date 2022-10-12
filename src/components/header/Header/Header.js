import Nav from "../Nav/Nav";
import { HeaderStyled } from "./HeaderStyled";
import { Link } from "react-scroll";
import logo from "../../../images/logo-1.png";

const Header = () => {
  return (
    <HeaderStyled>
      <header>
        <div className="logo-container">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            duration={300}
          >
            <img src={logo} id="logo-img" alt="main-logo" />
          </Link>
        </div>
        <div className="nav-container">
          <Nav />
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
