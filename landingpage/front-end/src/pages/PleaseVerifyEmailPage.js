import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const PleaseVerifyEmailPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [history]);

  return (
    <div className="content-container">
      <h1>Thanks for Signing up!</h1>
      <p>
        A verification email has been sent to the email you provided please
        verify your email to access all of the features of the site.
      </p>
    </div>
  );
};
