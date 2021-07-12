import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import "font-awesome/css/font-awesome.css";

export const SignUpPage = () => {
  const [, setToken] = useToken();
  //const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const history = useHistory();

  const onSignUpClicked = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/please-verify");
  };
  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com"
      />
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <input
          type={shouldShowPassword ? "text" : "password"}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
          style={{ width: "80%", float: "left" }}
        />
        <button
          onClick={() => {
            setShouldShowPassword(!shouldShowPassword);
          }}
          style={{ width: "20%", float: "right" }}
          className={shouldShowPassword ? "fa fa-eye-slash" : "fa fa-eye"}
        ></button>
      </div>
      <input
        type={shouldShowPassword ? "reset" : "password"}
        className={shouldShowPassword ? "hidden" : "visible"}
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        placeholder="password"
      />
      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          (!shouldShowPassword && passwordValue !== confirmPasswordValue)
        }
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>
      <button onClick={() => history.push("/login")}>
        Already have an account? Log In
      </button>
    </div>
  );
};
