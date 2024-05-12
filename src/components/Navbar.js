import { Link } from "react-router-dom";
import VenuturaLogo from "../assets/ventura-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={VenuturaLogo} width={"160px"} height={"40px"} />
      </Link>
    </nav>
  );
};

export default Navbar;
