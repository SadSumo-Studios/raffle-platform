import React from "react";
import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1> Success!</h1>
      <p> Thanks for verifying your email</p>
      <button onClick={() => history.push("/")}> Go Home</button>
    </div>
  );
};
