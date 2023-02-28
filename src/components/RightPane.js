import { useState } from "react";
import Input from "./Input";
import "./RightPane.css";
const RightPane = () => {
  //for handling values of form
  const [formData, setFormData] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
  });
  let [errData, setErrData] = useState({
    nameError: "",
    emailError: "",
    mobileError: "",
    userNameError: "",
    checkedError: "",
  });
  //submit click button to handle signup click
  let submitClick = (e) => {
    e.preventDefault();
    let checkbox = document.getElementById("check");
    console.log(checkbox);
    let error = false;
    if (!formData.Name) {
      errData = { ...errData, ["nameError"]: "Name cannot be empty" };
      setErrData(errData);
    } else {
      errData = { ...errData, ["nameError"]: "" };
      setErrData(errData);
    }
    if (!formData.UserName) {
      errData = { ...errData, ["userNameError"]: "Username cannot be empty" };
      setErrData(errData);
    } else {
      errData = { ...errData, ["userNameError"]: "" };
      setErrData(errData);
    }
    if (!formData.Email) {
      errData = { ...errData, ["emailError"]: "Email cannot be empty" };
      setErrData(errData);
    } else {
      errData = { ...errData, ["emailError"]: "" };
      setErrData(errData);
    }
    if (!formData.Mobile) {
      errData = {
        ...errData,
        ["mobileError"]: "Mobile number cannot be empty",
      };
      setErrData(errData);
    } else {
      errData = { ...errData, ["mobileError"]: "" };
      setErrData(errData);
    }
    if (checkbox.checked) {
      errData = { ...errData, ["checkedError"]: "" };
      setErrData(errData);
    } else {
      errData = { ...errData, ["checkedError"]: "Agree to the terms" };
      setErrData(errData);
    }
    if (error === true) {
      console.log("cannot logged in");
    } else {
      console.log("You are successfully logged in");
    }
  };
  return (
    <div className="container">
      <div className="header green">Super app</div>
      <br />
      <div className="create sans">Create your new accout</div>
      <br />
      <div className="mail">
        Email&nbsp;<span className="green sans">|</span>&nbsp;Google
      </div>
      <br />
      <form action="/">
        <Input
          type="text"
          initial="Name"
          data={formData}
          setData={setFormData}
        />
        <span className="error" id="nameerr">
          {errData.nameError}
        </span>
        <Input
          type="text"
          initial="UserName"
          data={formData}
          setData={setFormData}
        />
        <span className="error" id="usererr">
          {errData.userNameError}
        </span>
        <Input
          type="email"
          initial="Email"
          data={formData}
          setData={setFormData}
        />
        <span className="error" id="emailerr">
          {errData.emailError}
        </span>
        <Input
          type="tel"
          initial="Mobile"
          data={formData}
          setData={setFormData}
        />
        <span className="error" id="telerr">
          {errData.mobileError}
        </span>
        <br />
        <div className="consent">
          <input type="checkbox" id="check" />
          Share my registration data with Superapp
        </div>
        <div>
          <span className="error">{errData.checkedError}</span>
        </div>
        <br />
        <button className="signup" onClick={submitClick}>
          SIGN UP
        </button>
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="green">Terms and Conditions of Use</span>
        </p>
      </form>

      <p>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head superapp{" "}
        <span className="green">Privacy Policy</span>
      </p>
    </div>
  );
};

export default RightPane;
