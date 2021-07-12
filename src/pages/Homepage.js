import {ReactComponent as Cbox} from '../assets/center-box.svg';
import {ReactComponent as CartSvg} from '../assets/cart.svg'
import {
    Link
  } from "react-router-dom";

const Homepage = props => {

    return (
      <div className="homepage">
          <div className="central-box">
            <Cbox className="background"/>
            <div className="content">
              <h1>
                Buy your Ad pixels
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <span className="button" onClick={props.onModalOpen}>
                <CartSvg/>
                Buy pixels
              </span>
            </div>
          </div>
          
      </div>  
    );
}

export default Homepage;