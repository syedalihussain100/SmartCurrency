import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Language = () => {
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
            Choose a language
          </h3>
        </div>
      </div>

      {/*  */}

      <div className="languageContainer">
        <div>
          <p style={{fontSize:"20px"}}>English</p>
        </div>
        <div>
          <AiOutlineCheckCircle className="language_icon"/>
        </div>
      </div>
      <div className="bottom_0"></div>
    </>
  );
};

export default Language;
