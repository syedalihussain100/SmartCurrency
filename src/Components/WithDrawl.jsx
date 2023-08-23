import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./WithDrawl.css";
import { AiFillDelete } from "react-icons/ai";

const WithDrawl = () => {
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
            Withdrawal address
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="content-body">
        <div className="app_withdraw_address_panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="app_miningpool_info_date_dot"></div>
              <p style={{ marginLeft: "4px" }}>SOLU</p>
            </div>
            <div
              style={{
                marginRight: "20px",
                fontSize: "1.5rem",
                color: "#3f6ad8",
              }}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="app_withdraw_address_panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="app_miningpool_info_date_dot"></div>
              <p style={{ marginLeft: "4px" }}>USDT</p>
              <p
                style={{
                  marginLeft: "30px",
                  color: "#3f6ad8",
                  fontSize: "1.1rem",
                }}
              >
                500
              </p>
            </div>
            <div
              style={{
                marginRight: "20px",
                fontSize: "1.5rem",
                color: "#3f6ad8",
              }}
            >
              <AiFillDelete />
            </div>
          </div>
          <p>block road karachi</p>
        </div>

        <div className="bottom-grid">
          <div className="bottom-button">Add Withdrawl address</div>
        </div>
      </div>
    </>
  );
};

export default WithDrawl;
