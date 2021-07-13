import { logInRoute } from "./loginRoute";
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
//import { testEmailRoute } from "./testEmailRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { ForgotPasswordRoute } from "./forgotPasswordRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";

export const routes = [
  logInRoute,
  signUpRoute,
  testRoute,
  updateUserInfoRoute,
  ForgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
  //testEmailRoute,
  verifyEmailRoute,
];
