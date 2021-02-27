export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const setLoginError = (message) => {
  return {
    type: 'SET_LOGIN_ERROR',
    payload: message
  };
};