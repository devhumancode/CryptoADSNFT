
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import Whitepaper from "../../assets/files/CryptoAdsNftAdLordpaperV1.pdf";

const Navigation = props => {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="">
            <img src={logo} />
        </NavLink>
      </div>
      <div className="menu">
          {/* <NavLink to="/home" activeClassName="active">
              Home
          </NavLink> */}
          <a href={Whitepaper} download>
              Whitepaper
          </a>
          
          <NavLink className="buy" to="#" onClick={props.onModalOpen}>
              <img src={cart} />
              Buy pixels
          </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
