import { createContext, useContext, useReducer } from "react";
import userReducer, { initialUserState } from "../reducers/UserReducer";

export const UserContext = createContext();

export const UserStateProvider = (props) => (
  <UserContext.Provider value={useReducer(userReducer, initialUserState)}>
    {props.children}
  </UserContext.Provider>
);

export const useUserStateValue = () => useContext(UserContext);
