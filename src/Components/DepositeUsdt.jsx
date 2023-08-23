import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TImage from "./t1.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./DespositeUsdt.css";
import QRCode from "qrcode.react";

const DepositeUsdt = () => {
  let data = `Hello, this is my QR code!`;

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
            Deposit
          </h3>
        </div>
      </div>
      {/*  */}
      <div
        className="main-card mb-3 card"
        style={{ marginTop: "60px", marginLeft: "15px", marginRight: "15px" }}
      >
        <div className="card-body p-2-1">
          <img src={TImage} alt="logo" className="app_set_recharge_item_logo" />
          <div className="app_set_recharge_item_name">USDT</div>
          <ChevronRightIcon
            className="app_set_recharge_item_choose"
            onClick={() => navigate("/withdraw")}
          />
        </div>
      </div>

      {/*  */}
      <div className="main-card mb-3 card" style={{ margin: "0px 10px" }}>
        <div className="card-body">
          <div className="app_recharge_chain_name">Chain</div>
          <div className="app_recharge_chain_list">
            <div>
              <div className="app_recharge_chain_item active">TRC20</div>
            </div>
          </div>
          <div className="app_recharge_qrcode">
            <div className="app_recharge_qrcode_title">
              USDT deposit address
            </div>
            <div className="app_recharge_qrcode_img">
              <div className="qrcode_recharge">
                <QRCode
                  value={data}
                  style={{ width: "180px", height: "180px" }}
                />
              </div>
            </div>
            <div className="app_recharge_qrcode_tag">
              Long press the picture to save the album
            </div>
          </div>
          <div className="input-group">
            <input type="text" className="form-control" readOnly />
            <div class="input-group-text">
              <button
                type="button"
                className="btn btn-pinkred clipboard-trigger"
                style={{ color: "white" }}
              >
                copy
              </button>
            </div>
          </div>

          <div className="app_recharge_order_info text-nowrap">
            {/* one */}
            <div>
              <div
                className="width-50 float-left text-align-left"
                style={{ fontSize: "1.2rem" }}
              >
                Recharge currency
              </div>
              <div
                className="width-50 float-left text-align-right"
                style={{ fontSize: "1.2rem" }}
              >
                TRC20_USDT
              </div>
            </div>
            {/* two */}
            <div>
              <div
                className="width-50 float-left text-align-left"
                style={{ fontSize: "1.2rem" }}
              >
                Minimum recharge amount{" "}
              </div>
              <div
                className="width-50 float-left text-align-right"
                style={{ fontSize: "1.2rem" }}
              >
                100 USDT
              </div>
            </div>
            {/* three */}
            <div>
              <div
                className="width-50 float-left text-align-left"
                style={{ fontSize: "1.2rem" }}
              >
                confirmations blocks{" "}
              </div>
              <div
                className="width-50 float-left text-align-right"
                style={{ fontSize: "1.2rem" }}
              >
                19 blocks
              </div>
            </div>
          </div>

          <div className="mySelfContainer">
            <div
              style={{ display: "flex", alignItems: "center", padding: "10px" }}
            >
              <p style={{ margin: "0px 5px", fontSize: "1rem" }}>Amount:</p>
              <input
                type="text"
                className="form-control"
                style={{ width: "60%" }}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <p style={{ margin: "0px 5px", fontSize: "1rem" }}>Order id:</p>
              <input
                type="text"
                className="form-control"
                style={{ width: "60%" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="selfButton">submit</button>
          </div>
          <div className="app_recharge_tips">System</div>
          <ul className="app_recharge_tips_list">
            <li>
              Please do not deposit any non-TRC20_USDT assets to the above
              addresses, otherwise the assets will not be recovered.
            </li>
            <li>
              After you deposit to the above address, you need to confirm the
              entire network node, and the account will be received after 19
              times of network confirmation.
            </li>
            <li>
              <span style={{ color: "red" }}>
                Minimum recharge amount: 100 USDT, recharges less than the
                minimum amount will not be credited and cannot be returned.
              </span>
            </li>
            <li>
              Your recharge address will not change frequently and can be
              recharged repeatedly; if there is any change, we will try our best
              to notify you through website announcement or email.
            </li>
            <li>
              Be sure to confirm the security of your computer and browser to
              prevent information from being tampered with or leaked.
            </li>
          </ul>
        </div>
      </div>

      <section style={{ padding: "30px 0px" }}></section>
    </>
  );
};

export default DepositeUsdt;
