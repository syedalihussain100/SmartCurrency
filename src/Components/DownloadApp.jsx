import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AiFillAndroid } from "react-icons/ai";

const DownloadApp = () => {
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
            DOWNLOAD APP
          </h3>
        </div>
      </div>

      {/*  */}

      <div className="download_container">
        <a
          href="https://solunapower.pro/app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Download App Click here</h3>
          <AiFillAndroid style={{ margin: "0px 20px", fontSize: "40px" }} />
        </a>
      </div>
    </>
  );
};

export default DownloadApp;
