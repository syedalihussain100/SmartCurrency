import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import TImage from "./t1.png";
import soloImg from "./image.png";
import "./Deposite.css";

const WithDraw = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="app_login_panel_title">
        <div className="app_login_panel_title_close">
          <KeyboardBackspaceIcon onClick={() => navigate("/assets")} />
        </div>
        <div className="app_login_panel_title_value">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Currency selection
          </h3>
        </div>
      </div>
      {/*  */}
      <div className="mt">
        <div className="currencyContainer">
          <SearchIcon className="currencyIcon" />
          <input
            type="text"
            placeholder="Please enter a keyword"
            className="currencyInput"
          />
        </div>
        {/* one */}
        <div className="app_set_lang_item">
          <img src={TImage} alt="logo" className="app_set_lang_item_logo" />
          <div
            class="app_set_lang_item_name"
            onClick={() => navigate("/withdrawusdt")}
          >
            USDT
          </div>{" "}
        </div>
        <div className="borderBottom"></div>
        {/* two */}
        <div className="app_set_lang_item">
          <img src={soloImg} alt="logo" className="app_set_lang_item_logo" />
          <div
            class="app_set_lang_item_name"
            onClick={() => navigate(`/withdrawsolo`)}
          >
            SOLU
          </div>{" "}
        </div>
        <div className="borderBottom"></div>
      </div>
    </>
  );
};

export default WithDraw;
