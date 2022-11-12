import ReactDOM from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { ErrorState } from "./context/ErrorContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ErrorState>
      <App />
    </ErrorState>
  </BrowserRouter>
);
