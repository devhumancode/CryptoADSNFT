import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {  ReactComponent as Copy } from "../../assets/copy.svg";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow-right.png";

const Modal = (props) => {
  const email = useRef("");
  const plan = useRef();
  const link = useRef("");
  const bnbAddress = useRef("");
  const [price, setPrice] = useState(0.30);

  const [emailValid, setEmailValid] = useState(true);

  const checkEmailValidity = () => {
    if (
      email.current.value.includes("@") &&
      email.current.value.includes(".") &&
      email.current.value.length > 5
    ) {
      setEmailValid(true);
      return true;
    } else {
      setEmailValid(false);
      return false;
    }
  };

  const priceChangeHandler = (selected) => {
    let selectedSizes = selected.target.value.split("x");
    let height = parseInt(selectedSizes[0]);
    let width = parseInt(selectedSizes[1]);
    let cost = height * width * 0.003;
    setPrice(cost.toFixed(2));
  };

  const formHandler = async () => {
    checkEmailValidity();
    const details = { email: email.current.value, plan: plan.current.value };
    console.log(details);

    const requestOptions = {
      method: "POST",
      headers: {
        "X-API-KEY":
          "60e2e5ed5b8ceb001c52ec88-XaFDr8wuAF2rvj6hXTEXePqpbE24Fat4ehgbUjf4xX4OnOEH2q",
      },
      body: JSON.stringify({
        firstName: email.current.value,
        lastName: plan.current.value,
        identifiers: [
          {
            type: "email",
            id: email.current.value,
            channels: {
              email: {
                status: "subscribed",
                statusDate: "2016-02-29T10:07:28Z",
              },
            },
          },
        ],
        customProperties: {
          Purchase: plan.current.value,
          Link: link.current.value,
          Bnb: bnbAddress.current.value,
        },
      }),
    };

    if (checkEmailValidity()) {
      const response = await fetch(
        "https://api.omnisend.com/v3/contacts",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      alert(
        "Your request has been submitted successfully, we will get in touch!"
      );
      props.onClose();
    } else {
      console.error("Entered details are not correct");
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="row justify-between align-center">
          <div className="half">
            <img src={logo} alt="logo" />
          </div>
          <div className="half text-right button" onClick={props.onClose}>
            Back
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="row">
          <h1>CHECKOUT</h1>
        </div>
        <div className="row">
          <div className="half">Pixel size selecion</div>
          <div className="half discount">Buy more - get discount!</div>
        </div>
        <div className="row input">
          <select ref={plan} onChange={priceChangeHandler}>
            <option value="10x10">10 x 10 px</option>
            <option value="20x20">20 x 20 px</option>
            <option value="30x30">30 x 30 px</option>
            <option value="40x40">40 x 40 px</option>
            <option value="50x50">50 x 50 px</option>
            <option value="60x60">60 x 60 px</option>
            <option value="70x70">70 x 70 px</option>
            <option value="80x80">80 x 80 px</option>
            <option value="90x90">90 x 90 px</option>
            <option value="100x100">100 x 100 px</option>
          </select>
        </div>
        <div className="row mt-1">
          <div className="half">Add your URL link</div>
        </div>
        <div className="row input">
          <input type="text" ref={link} placeholder="Your URL link" />
        </div>
        <div className="row mt-1">
          <div className="half">Enter email</div>
        </div>
        <div className="row input">
          <input
            className={`${emailValid ? "" : "error"}`}
            type="email"
            ref={email}
            placeholder="Your email address"
          />
        </div>
        <div className="row">
          {!emailValid && (
            <span className="error">Entered email is not valid</span>
          )}
        </div>
        <div className="row mt-1">
          <div className="half">Pay to BSC Binance Smart Chain (BEP 20)</div>
        </div>
        <div className="row mt-1">
          <div className="half cross"> </div>
          <div className="bnb pl-1">
            <h2 className="text-right">
              Price <b>{price} BNB</b>
            </h2>
          </div>
        </div>
        <div className="row mt-1">
          <div className="half">Add your BNB address</div>
        </div>
        <div className="row input">
          <input type="text" ref={bnbAddress} placeholder="Your BNB address" />
        </div>
        <div className="row mt-1">
          <div className="half">Deposit address</div>
        </div>
        <div className="row input paymentlink">
          <div className="address">0xf825990a3ce77b60396887a97c87eb673bb93e05</div>

          <div className="copy">
            <CopyToClipboard
              text={"0xf825990a3ce77b60396887a97c87eb673bb93e05"}
              onCopy={() => alert("copied")}
            >
              <span><Copy/></span>
            </CopyToClipboard>
          </div>
        </div>
        <div className="row mt-1">
          <div className="half">
            Send only <span class="blue">BNB</span> to this deposit address.{" "}
            <br />
            Ensure the network is <span class="blue">BEP20 (BSC)</span>.
          </div>
        </div>

        <div className="row mt-1 button" onClick={formHandler}>
          Proceed
        </div>
      </div>
      <div className="backdrop" onClick={props.onClose} />
    </div>
  );
};

export default Modal;
