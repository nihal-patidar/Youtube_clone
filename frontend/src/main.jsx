import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // import { appStore } from './redux/store.js';
import appStore from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./styles/index.css";

import "./utils/AxiosInterceptor.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
    ,
  </StrictMode>,
);
