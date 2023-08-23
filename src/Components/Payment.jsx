import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import stripeImg from "./stripeone.png";
import EasyPaisaImg from "./easypasiaone.png";
import jazzcashImg from "./jazzone.png";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            PAYMENT METHOD
          </h3>
        </div>
      </div>

      <div className="paymentContainer" style={{ marginTop: "60px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={stripeImg} alt="logo" className="stripeimg" />
          <p className="paymentp">Stripe Payment Method</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={EasyPaisaImg} alt="logo" className="easylogo" />
          <p className="paymentp">EasyPaisa Payment Method</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={jazzcashImg} alt="logo" className="jazzlogo" />
          <p className="paymentp">Jazz Cash Payment Method</p>
        </div>
      </div>

      <h4 style={{padding:"0px 30px",fontSize:"1.6rem"}}>PRIVACY POLICY</h4>
      <p style={{width:"800px",padding:"30px",lineHeight:"40px",fontSize:"1.2rem",textAlign:"justify"}}>
        A payment method privacy policy is a document that explains how an
        organization collects, uses, and safeguards personal and financial
        information from individuals when they make payments for products or
        services. It outlines data handling practices, security measures, and
        customer rights to ensure transparency and protect sensitive data.
      </p>
    </>
  );
};

export default Payment;
