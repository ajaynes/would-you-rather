export const LOGIN_AUTHED_USER = "LOGIN_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export const loginAuthedUser = id => {
  return {
    type: LOGIN_AUTHED_USER,
    id
  };
}

export const logoutAuthedUser = () => {
  return {
    type: LOGOUT_AUTHED_USER
  };
}
