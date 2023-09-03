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
import SOLUStake1 from "./Components/SOLUStake";
import SoloStake2 from "./Components/SoloStake2";
import SoloStake3 from "./Components/SoloStake3";
import SoloStake4 from "./Components/SoloStake4";
import { UserAuthContext } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
// staking imports here
import StakingOne from "./Components/pages/StakingOne"
import StakingTwo from "./Components/pages/StakingTwo";
import StakingThree from "./Components/pages/StakingThree";
import StakingFour from "./Components/pages/StakingFour";
import AdminUser from "./Components/pages/AdminUser";



function App() {



  return (
    <UserAuthContext>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
          <Route path="/staking" element={<ProtectedRoute><Staking /></ProtectedRoute>} />
          <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
          <Route path="/rules" element={<ProtectedRoute>
            <Rules />
          </ProtectedRoute>} />
          <Route path="/deposite" element={<ProtectedRoute><Deposite /></ProtectedRoute>} />
          <Route path="/withdraw" element={<ProtectedRoute><WithDraw /></ProtectedRoute>} />
          <Route path="/swap" element={<ProtectedRoute><Swap /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/viewtext" element={<ProtectedRoute>
            <ViewText />
          </ProtectedRoute>} />
          <Route path="/viewsolo" element={<ProtectedRoute>
            <ViewSolo />
          </ProtectedRoute>} />
          <Route path="/withdrawusdt" element={<ProtectedRoute>
            <WithDrawUsdt />
          </ProtectedRoute>} />
          <Route path="/withdrawsolo" element={<ProtectedRoute>
            <WithDrawSolo />
          </ProtectedRoute>} />
          <Route path="/depositeusdt" element={<ProtectedRoute>
            <DepositeUsdt />
          </ProtectedRoute>} />
          <Route path="/depositesolu" element={<ProtectedRoute>
            <DepositeSolu />
          </ProtectedRoute>} />
          <Route path="/license" element={<ProtectedRoute><License /></ProtectedRoute>} />
          <Route path="/customer" element={<ProtectedRoute><CustomerService /></ProtectedRoute>} />
          <Route path="/securitycenter" element={<ProtectedRoute>
            <SecurityCenter />
          </ProtectedRoute>} />
          <Route path="/withdrawl" element={<ProtectedRoute>
            <WithDrawl />
          </ProtectedRoute>} />
          <Route path="/language" element={<ProtectedRoute><Language /></ProtectedRoute>} />
          <Route path="/verifyphone" element={
            <VerifyPhone />
          } />
          <Route path="/modifyphone" element={<ModifyPhone />} />
          <Route path="/modifyemail" element={<ModifyEmail />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/modify-login-password" element={<ModifyLoginPassword />} />
          <Route path="/downloadapp" element={<DownloadApp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<ProtectedRoute>
            <Payment />
          </ProtectedRoute>} />
          <Route element={<Login />} path="/login" />
          <Route element={<ProtectedRoute>
            <SOLUStake1 />
          </ProtectedRoute>} path="/solustake1" />
          <Route element={<ProtectedRoute>
            <SoloStake2 />
          </ProtectedRoute>} path="/solustake2" />
          <Route element={<ProtectedRoute>
            <SoloStake3 />
          </ProtectedRoute>} path="/solustake3" />
          <Route element={<ProtectedRoute>
            <SoloStake4 />
          </ProtectedRoute>} path="/solustake4" />


          <Route path="/stakingone" element={<ProtectedRoute>
            <StakingOne />
          </ProtectedRoute>} />
          <Route path="/stakingtwo" element={<ProtectedRoute>
            <StakingTwo />
          </ProtectedRoute>} />
          <Route path="/stakingthree" element={<ProtectedRoute>
            <StakingThree />
          </ProtectedRoute>} />
          <Route path="/stakingfour" element={<ProtectedRoute>
            <StakingFour />
          </ProtectedRoute>} />


          <Route path="/admin/all-users" element={<ProtectedRoute>
            <AdminUser />
          </ProtectedRoute>} />

        </Routes>
        <Bottom />
      </BrowserRouter>
    </UserAuthContext>
  );
}

export default App;
