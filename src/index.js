import { createRoot } from "react-dom";
import App from "./app/app";

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />);