import React from "react";
import "./license.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const License = () => {
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
            Compliance operation
          </h3>
        </div>
      </div>

      <div className="app_msg_info_page_content" style={{ marginTop: "60px" }}>
        <p className="p1">
          <span style={{ lineHeight: "36px" }}>Advantage</span>
        </p>

        <p className="sub-title">Double the safety</p>
        <p className="sub-content-para">
          Original super password, better security guard. Adhere to independent
          control of assets and attach importance to user privacy. Assets are
          safer and transactions are more transparent.
        </p>
        <p className="sub-title">Simple to use</p>
        <p className="sub-content-para">
          Faster and more economical user experience, the pursuit of ease of use
          and efficiency. One-click management of digital assets and easy
          management of multiple sets of addresses. Convenient, worry-free, safe
          and fast.
        </p>
        <p className="sub-title">High performance and high stability</p>
        <p className="sub-content-para">
          Original process memory matching technology, high-speed processing
          with high concurrency of tens of millions of users, ultra-efficient
          matching engine, lightning order.
        </p>
        <p className="p1">
          <span style={{ lineHeight: "36px" }}>Technical advantages</span>
        </p>
        <p className="sub-title">Automatic risk control</p>
        <p className="sub-content-para">
          Self-developed automatic risk control technology, strict verification
          of contract addresses, and automatic avoidance of fraud problems such
          as counterfeit currency
        </p>
        <p className="sub-title">Second-level reconciliation</p>
        <p className="sub-content-para">
          Multi-level verification and reconciliation mechanism, multi-level
          protection, intelligent monitoring, real-time alarm and active
          intervention
        </p>
        <p className="sub-title">High performance and high stability</p>
        <p className="sub-content-para">
          Original process memory matching technology, high-speed processing
          with high concurrency of tens of millions of users, ultra-efficient
          matching engine, lightning order.
        </p>
        <p className="sub-title">Independent asset vault</p>
        <p className="sub-content-para">
          Each user has an independent asset vault in the fund list to ensure
          the independence and security of assets
        </p>
        <p className="sub-title">Hot and cold wallet dual mechanism</p>
        <p className="sub-content-para">
          Offline storage of main funds, global distributed storage of assets
          and private keys, combination of artificial and intelligent deposit
          and withdrawal
        </p>
        <p className="sub-title">Currency mixing technology</p>
        <p className="sub-content-para">
          Self-developed address privacy design, never risk control, worry about
          being tracked
        </p>
        <p>
          <br />
          <br /> <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default License;
