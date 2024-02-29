import ReactDOM from "react-dom/client";
import { BasicWrapper } from "hocs/BasicWrapper";
import { App } from "./App";

import "./styles/reset.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BasicWrapper>
    <App />
  </BasicWrapper>
);
