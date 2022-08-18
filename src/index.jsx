import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./templates/Home";
import Login from "./templates/LoginPage";
import CompanyRegister from "./templates/CompanyRegister";
import TypeAccount from "./templates/TypeForAccount";
import CollaboratorRegister from "./templates/CollaboratorRegister";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProfileRegister from "./templates/CollaboratorRegister/ProfileCollaboratorRegister";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/typeaccount" element={<TypeAccount />}></Route>
        <Route
          exact
          path="/companyregister"
          element={<CompanyRegister />}
        ></Route>
        <Route
          exact
          path="/collaboratorregister"
          element={<CollaboratorRegister />}
        ></Route>
        <Route
        exact
        path="/profileregister"
        element={<ProfileRegister />}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
