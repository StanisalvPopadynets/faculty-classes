const initialState = {
    currentUser: null,
    errorMessage: ""
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload,
          errorMessage: ""
        };
      case 'LOGOUT':
        console.log("logout")
        return initialState;
      case 'SET_LOGIN_ERROR':
        return {
          ...state,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };