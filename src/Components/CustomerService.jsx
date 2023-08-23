import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import contactImg from "./contact.png";
import "./Contact.css";

const CustomerService = () => {
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
            Customer Service
          </h3>
        </div>
      </div>

      {/*  */}

      <div className="content-body position-relative">
        <div className="app_serives_item">
          <div className="app_serives_item_name">
            <a href="http://yyysys.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=17" style={{textDecoration:"none",color:"black"}}>
              <img
                src={contactImg}
                alt="logo"
                className="serviceslogo float-left"
              />
              <p style={{ fontSize: "1.3rem" }}>Contract</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerService;
