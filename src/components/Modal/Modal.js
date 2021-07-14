import { useRef, useState } from "react";

import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow-right.png";

const Modal = (props) => {
  const email = useRef("");
  const plan = useRef();

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
            <img src={logo} />
          </div>
          <div className="half text-right button" onClick={props.onClose}>
            Back
            <img src={arrow} />
          </div>
        </div>
        <div className="row">
          <h1>Presale</h1>
        </div>
        <div className="row">
          <div className="half">Pixel size selecion</div>
          <div className="half discount">Buy more - get discount!</div>
        </div>
        <div className="row input">
          <select ref={plan}>
            <option value="5x5">5 x 5 px</option>
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

        <div className="row mt-1 button" onClick={formHandler}>
          Proceed
        </div>
      </div>
      <div className="backdrop" onClick={props.onClose} />
    </div>
  );
};

export default Modal;
