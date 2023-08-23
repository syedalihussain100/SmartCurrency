import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Swap.css";
import CropRotateIcon from "@mui/icons-material/CropRotate";

const Swap = () => {
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
            Swap
          </h3>
        </div>
      </div>
      {/*  */}
      <div
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="app_exchange_coin_panel">
          <div className="app_exchange_coin_select">
            {/* one */}
            <div className="app_exchange_coin_info dataapp">
              <div className="dot"></div>
              <span className="app_exchange_coin_info_tag">from</span>
              <span>SOLU</span>
            </div>
            {/* two */}
            <div className="app_exchange_coin_info">
              <div className="dotred"></div>
              <span className="app_exchange_coin_info_tag">from</span>
              <span>USDT</span>
            </div>
          </div>
          <div className="app_exchange_coin_transfer">
            <div>
              <CropRotateIcon />
            </div>
          </div>
        </div>
        <div className="line-height-50px">
          <div
            className="width-33 float-left text-align-left fw-bold"
            style={{ fontSize: "20px" }}
          >
            Swap amount
          </div>
        </div>

        <div className="input-group">
          <input
            placeholder="Please enter the amount to be transferred"
            type="number"
            className="form-control"
          />

          <div
            style={{ margin: "0px 10px", fontWeight: "bold", fontSize: "20px" }}
          >
            USDT
          </div>
          <div style={{ margin: "0px 10px", color: "blue" }}>All</div>
        </div>
        <p className="p1">Amount Available 9.462 USDT</p>
        <p className="p1">Convertible: 0.00 SOLU</p>

        <div className="app_exchange_order_info">
          Reminder: No handling fee will be charged for the transfer of idle
          accounts
        </div>
        <div class="bottom-button">Swap</div>
      </div>
    </>
  );
};

export default Swap;
