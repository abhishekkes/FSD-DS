import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Marks from "./Marks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Marks m1={56} m2={22} m3={32} m4={45} m5={32} />
    <Marks m1={56} m2={92} m3={82} m4={95} m5={62} />
  </StrictMode>
);
