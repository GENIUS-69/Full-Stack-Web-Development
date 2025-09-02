import { Router } from "express";
import { loginUser, registerUser, logoutUser, verifyEmail, refreshAccessToken, forgotPasswordRequest, resetForgotPassword, getCurrentUser, changeCurrentPassword, resendEmailVerification } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistervalidator, userLoginValidator, userForgotPasswordValidator, userResetForgotPasswordValidator, userChangeCurrentPasswordValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

// unsecured routes
router
  .route("/register")
  .post(userRegistervalidator(), validate, registerUser);

router
  .route("/login")
  .post(userLoginValidator(), validate, loginUser);

router
  .route("/verify-email/:verificationToken")
  .get(verifyEmail);

router
  .route("/refresh-token")
  .post(refreshAccessToken);

router
  .route("/forgot-password")
  .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);

router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator(), validate, resetForgotPassword);

// secure routes
router
  .route("/logout")
  .post(verifyJWT, logoutUser);

router
  .route("/current-user")
  .post(verifyJWT, getCurrentUser);

router
  .route("/change-password")
  .post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);

router
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);



export default router

// applied on each project