import React from "react";
import './App.css';

import Home from "./Components/Home";
import Bottom from "./Components/Bottom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trade from "./Components/Trade";
import Staking from "./Components/Staking";
import Team from "./Components/Team";
import Assets from "./Components/Assets";
import Rules from "./Components/Rules";
import Deposite from "./Components/Deposite";
import WithDraw from "./Components/WithDraw";
import Swap from "./Components/Swap";
import Orders from "./Components/Orders";
import ViewText from "./Components/ViewText";
import ViewSolo from "./Components/ViewSolo";
import WithDrawUsdt from "./Components/WithDrawUsdt";
import WithDrawSolo from "./Components/WithDrawSolo";
import DepositeUsdt from "./Components/DepositeUsdt";
import DepositeSolu from "./Components/DepositeSolu";
import License from "./Components/License";
import CustomerService from "./Components/CustomerService";
import SecurityCenter from "./Components/SecurityCenter";
import WithDrawl from "./Components/WithDrawl";
import Language from "./Components/Language";
import VerifyPhone from "./Components/VerifyPhone";
import ModifyPhone from "./Components/ModifyPhone";
import ModifyEmail from "./Components/ModifyEmail";
import ChangePassword from "./Components/ChangePassword";
import ModifyLoginPassword from "./Components/ModifyLogin"
import Login from "./Components/Login";
import DownloadApp from "./Components/DownloadApp";
import ForgetPassword from "./Components/forgetPassword";
import Register from "./Components/Register";
import Payment from "./Components/Payment";




function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/deposite" element={<Deposite />} />
          <Route path="/withdraw" element={<WithDraw />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/viewtext" element={<ViewText />} />
          <Route path="/viewsolo" element={<ViewSolo />} />
          <Route path="/withdrawusdt" element={<WithDrawUsdt />} />
          <Route path="/withdrawsolo" element={<WithDrawSolo />} />
          <Route path="/depositeusdt" element={<DepositeUsdt />} />
          <Route path="/depositesolu" element={<DepositeSolu />} />
          <Route path="/license" element={<License />} />
          <Route path="/customer" element={<CustomerService />} />
          <Route path="/securitycenter" element={<SecurityCenter />} />
          <Route path="/withdrawl" element={<WithDrawl />} />
          <Route path="/language" element={<Language />} />
          <Route path="/verifyphone" element={<VerifyPhone />} />
          <Route path="/modifyphone" element={<ModifyPhone />} />
          <Route path="/modifyemail" element={<ModifyEmail />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/modify-login-password" element={<ModifyLoginPassword />} />
          <Route path="/downloadapp" element={<DownloadApp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route element={<Login />} path="/login" />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </>
  );
}

export default App;
