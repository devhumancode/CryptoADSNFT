import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
            <div className="side">
            Copyright © 2021. All rights reserved.
            </div>
            <div className="side menu">
            <NavLink activeClassName="active" to="/privacy-policy">
                    Privacy policy
                </NavLink>
                <NavLink activeClassName="active" to="/cookies-policy">
                    Cookies policy
                </NavLink>
            </div>
        </footer>
    )
}


export default Footer;