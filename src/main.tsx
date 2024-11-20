import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
