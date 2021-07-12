import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PasswordResetSuccess } from "./PasswordResetSuccess";
import { PasswordResetFail } from "./PasswordResetFailure";
import "font-awesome/css/font-awesome.css";

export const PasswordResetLandingPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const { passwordResetCode } = useParams();
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const onResetClicked = async () => {
    try {
      await axios.put(`/api/users/${passwordResetCode}/reset-password`, {
        newPassword: passwordValue,
      });
      setIsSuccess(true);
    } catch (e) {
      setIsFailure(true);
    }
  };

  if (isFailure) return <PasswordResetFail />;
  if (isSuccess) return <PasswordResetSuccess />;

  return (
    <div className="content-container">
      <h1> Reset Password</h1>
      <p> Please enter a new password</p>
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
          placeholder="Password"
          style={{ width: "80%", float: "left" }}
        />
        <button
          onClick={() => {
            setShouldShowPassword(!shouldShowPassword);
          }}
          style={{ width: "20%", float: "right" }}
          className={shouldShowPassword ? "fa fa-eye-slash" : "fa fa-eye"}
        ></button>
        <input
          type={shouldShowPassword ? "reset" : "password"}
          className={shouldShowPassword ? "hidden" : "visible"}
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          placeholder="Confirm Password"
        />
        <button
          dissabled={
            !passwordValue ||
            !confirmPasswordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onResetClicked}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};
