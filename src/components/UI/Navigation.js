
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';

const Navigation = props => {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="">
            <img src={logo} />
        </NavLink>
      </div>
      <div className="menu">
          <NavLink to="/home" activeClassName="active">
              Home
          </NavLink>
          <NavLink to="/asdasd">
              About
          </NavLink>
          
          <NavLink className="buy" to="#" onClick={props.onModalOpen}>
              <img src={cart} />
              Buy pixels
          </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
