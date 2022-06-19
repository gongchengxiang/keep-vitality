import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const TestFetch = async () => {
  try {
    const res = await fetch("http://180.76.242.137:3000/todo");
    alert(JSON.stringify(res));
    alert("fetch success");
  } catch (error) {
    alert("fetch failed");
  }
};
TestFetch();
