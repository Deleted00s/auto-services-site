import React from "react"
import * as ReactDOMclient from  'react-dom/client';
// УБРАЛИ: import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";

const am  =  ReactDOMclient.createRoot(document.getElementById("root"))
am.render(<React.StrictMode>
  {/* УБРАЛИ: <BrowserRouter> */}
  <App/>
  {/* УБРАЛИ: </BrowserRouter> */}
</React.StrictMode>)