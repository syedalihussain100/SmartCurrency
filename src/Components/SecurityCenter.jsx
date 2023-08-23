import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Security.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SecurityCenter = () => {
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
            Security center
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="content-body">
        {/* one */}
        <div className="app_set_lang_list">
          <div className="app_set_lang_item">
            <div
              className="app_set_lang_item_name fw-bold"
              onClick={() => navigate(`/modifyphone`)}
            >
              Modify phone
            </div>
            <span className="app_left_menu_list_item_value">
              <span style={{ fontSize: "1.1rem" }}>08****111</span>
              <ChevronRightIcon />
            </span>
          </div>
          {/* line */}
          <div className="line"></div>
        </div>
        {/* two */}
        <div className="app_set_lang_list">
          <div className="app_set_lang_item">
            <div
              className="app_set_lang_item_name fw-bold"
              onClick={() => navigate(`/modifyemail`)}
            >
              Modify email
            </div>
            <span className="app_left_menu_list_item_value">
              <span style={{ fontSize: "1.1rem" }}>te****com</span>
              <ChevronRightIcon />
            </span>
          </div>
          {/* line */}
          <div className="line"></div>
        </div>
        {/* three */}
        <div className="app_set_lang_list">
          <div className="app_set_lang_item">
            <div
              className="app_set_lang_item_name fw-bold"
              onClick={() => navigate(`/change-password`)}
            >
              Change security password
            </div>
            <span className="app_left_menu_list_item_value">
              <ChevronRightIcon />
            </span>
          </div>
          {/* line */}
          <div className="line"></div>
        </div>
        {/* four */}
        <div className="app_set_lang_list">
          <div className="app_set_lang_item">
            <div
              className="app_set_lang_item_name fw-bold"
              onClick={() => navigate(`/modify-login-password`)}
            >
              Modify login password
            </div>
            <span className="app_left_menu_list_item_value">
              <ChevronRightIcon />
            </span>
          </div>
          {/* line */}
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default SecurityCenter;
