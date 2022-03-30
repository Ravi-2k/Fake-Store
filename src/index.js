import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App/App";
import { UserStateProvider } from "./Contexts/UserStateProvider";
import store from "./redux/store";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <UserStateProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
