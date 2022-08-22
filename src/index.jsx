import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./templates/Home";
import Login from "./templates/LoginPage";
import CompanyRegister from "./templates/CompanyRegister";
import TypeAccount from "./templates/TypeForAccount";
import CollaboratorRegister from "./templates/CollaboratorRegister";
import ErrorPage from "./templates/Error";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileRegister from "./templates/CollaboratorRegister/ProfileCollaboratorRegister";
import ProfileFreelancersPage from "./templates/ProfileFreelancers";
import FreelancersPage from "./templates/FreelancersPage";
import ServicesPage from "./templates/ServicesPage";

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
          element={<ProfileRegister />}
        ></Route>
        <Route
          exact
          path="/profilefreelancers"
          element={<ProfileFreelancersPage />}
        ></Route>
        <Route exact path="/freelancers" element={<FreelancersPage />}></Route>
        <Route exact path="/*" element={<ErrorPage />}></Route>
        <Route exact path="/services" element={<ServicesPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
