// Import redux e create store
import { createStore } from "redux";

// Actions e Actions TYPE
const CHANGE_USER: string = "CHANGE_USER";
const LOGOUT: string = "LOGOUT";

// Actions
function changeUser(user: string) {
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user,
  };
}

function logout(): { type: string; info: string } {
  return {
    type: LOGOUT,
    info: "Logout the current user",
  };
}

const initialState = {
  user: "",
  isLogged: false,
};

// Reducers
function userReducer(prevState = initialState, action: any) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...prevState,
        user: "",
        isLogged: false,
      };
    default:
      return prevState;
  }
}

// Store
const store = createStore(userReducer);

console.log("Initial state", store.getState());
store.dispatch(changeUser("John Doe"));
console.log("New state", store.getState());
store.dispatch(logout());
console.log("This is the new state", store.getState());
