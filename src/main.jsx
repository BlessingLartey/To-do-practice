import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js"
// import { TodoContextProvider } from "./TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
      
    {/* </TodoContextProvider> */}
  </StrictMode>
);
