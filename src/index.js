import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeEditorPage from "./pages/CodeEditor/CodeEditor";
import CommunityPage from "./pages/Community/Community";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path='/home' element={<Home/>}>
            <Route index element={<CodeEditorPage/>}/>
            <Route exact path='community' element={<CommunityPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
