import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/signUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { PleaseVerifyEmailPage } from "./pages/PleaseVerifyEmailPage";
import { EmailVerificationLandingPage } from "./pages/EmailVerificationLandingPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { PasswordResetLandingPage } from "./pages/PasswordResetLandingPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/verify-email/:verificationString">
          <EmailVerificationLandingPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/reset-password/:passwordResetCode">
          <PasswordResetLandingPage />
        </Route>
        <Route path="/please-verify">
          <PleaseVerifyEmailPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
