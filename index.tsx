import { createRoot } from "react-dom/client";
import App from "./src/app/App";
import { Provider } from "react-redux";
import { store } from "./src/app";

const root = document.getElementById("root");

root &&
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
