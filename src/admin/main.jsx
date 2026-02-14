import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const el = document.getElementById("my-plugin-root");

if (el) {
  createRoot(el).render(<App />);
}
