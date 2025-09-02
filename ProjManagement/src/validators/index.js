import { body } from "express-validator";

const userRegistervalidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be in lower case")
      .isLength()
      .withMessage("It must be 3 character long"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required"),
    body("fullName")
      .optional()
      .trim()
  ]
}

const userLoginValidator = () => {
  return [
    body("email")
      .optional()
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
  ]
}

const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword")
      .notEmpty()
      .withMessage("Old password is required"),
    body("newPassword")
      .notEmpty()
      .withMessage("New password is required")
  ]
}

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is Invalid")
  ]
}

const userResetForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Password is required")
  ]
}

export {
  userRegistervalidator,
  userLoginValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  
}