export interface ValidatorHelper {
  email: string; // required, must be valid email format
  password: string; // required, value must be equal to confirm password.
  confirmPassword?: string; // required, value must be equal to password.
}
