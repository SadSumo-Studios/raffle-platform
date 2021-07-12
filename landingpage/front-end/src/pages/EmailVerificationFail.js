import React from "react";
import { useHistory } from "react-router-dom";

export const EmailVerificationFail = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1> Uh oh...</h1>
      <p> something went wrong while trying to verify your email</p>
      <button onClick={() => history.push("/signup")}> Back To Signup</button>
    </div>
  );
};
