import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(1);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
