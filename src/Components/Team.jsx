import React from "react";
import "./Team.css";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import CopyImg from "./copy.png";

const Team = () => {
  const navigate = useNavigate();

  let data = `Hello, this is my QR code!`;
  return (
    <div className="teambg">
      <div className="app-team-bg" style={{ height: "150px" }}>
        <span
          className="app-team-bg-rule"
          trans="rebate_rules"
          onClick={() => navigate("/rules")}
        >
          Rules
        </span>
      </div>
      <div className="app-team-invite">
        <div className="app-team-invite-push position-relative">
          <div className="width-100 gundongList">
            <div className="text-align-center width-100 text-nowrap">
              User 100***749 invited friends and earned 359.74 USDT
            </div>
          </div>
        </div>
        <div className="app-team-invite-content">
          <div className="app-team-invite-qrcode-text">My QR code</div>
          <div className="app-team-invite-qrcode">
            <QRCode
              value={data}
              height="140"
              width="140"
              style={{ width: "140px", height: "140px" }}
            />
          </div>
          <div className="app-team-invite-content-item">
            <div className="app-team-invite-content-item-text">
              Invitation code:
            </div>
            <div className="app-team-invite-content-item-copyinfo">
              <span className="app-team-invite-content-item-copyinfo-value">
                100820019
              </span>
              <img
                src={CopyImg}
                alt="CopyImg"
                className="app-team-invite-content-item-copyinfo-copy"
              />
            </div>
          </div>
          <div className="app-team-invite-content-item">
            <div className="app-team-invite-content-item-text">Share link</div>
            <div className="app-team-invite-content-item-copyinfo">
              <span className="app-team-invite-content-item-copyinfo-value">
                https://app.solunapo...
              </span>
              <img
                src={CopyImg}
                alt="CopyImg"
                className="app-team-invite-content-item-copyinfo-copy"
              />
            </div>
          </div>
          <div className="app-team-invite-content-tag">
            Send your invitation link, friends register and join staking through
            your link, Receive commission in USDT automatically
          </div>
        </div>
      </div>

      {/* second part here */}
      <div className="app-team-myteam">
        <div className="app-team-myteam-title">
          <div className="app-team-myteam-title-text">My invitation stats</div>
        </div>
        <div className="app-team-myteam-can-take" style={{marginBottom:"10px"}}>Total</div>
        <div className="app-team-myteam-can-take-value">
          4.462
          <span className="app-team-myteam-can-take-usdt">USDT</span>
        </div>
        <div className="app-team-myteam-info">
          <div className="app-team-myteam-info-item">
            <div className="text-danger" style={{fontSize:"1.2rem",marginBottom:"3px"}}>1</div>
            <div style={{fontSize:"1.2rem"}}>Level</div>
          </div>
          <div className="app-team-myteam-info-item">
            <div className="text-align-center text-danger" style={{fontSize:"1.2rem",marginBottom:"3px"}}>6</div>
            <div className="text-align-center" style={{fontSize:"1.2rem"}}>invited</div>
          </div>
          <div className="app-team-myteam-info-item">
            <div className="text-align-right text-danger" style={{fontSize:"1.2rem",marginBottom:"3px"}}>10</div>
            <div className="text-align-right" style={{fontSize:"1.2rem"}}>Upgrade</div>
          </div>
          <div className="app-team-myteam-info-item">
            <div class="text-danger text-nowrap" style={{fontSize:"1.2rem",marginBottom:"3px"}}>0.00</div>
            <div trans="rebate_yesterday" style={{fontSize:"1.2rem"}}>Yesterday</div>
          </div>
          <div className="app-team-myteam-info-item">
            <div className="text-danger text-align-center text-nowrap" style={{fontSize:"1.2rem",marginBottom:"3px"}}>
              0.00
            </div>
            <div className="text-align-center" trans="rebate_today" style={{fontSize:"1.2rem"}}>
              Today
            </div>
          </div>
          <div className="app-team-myteam-info-item">
            <div class="text-danger text-align-right text-nowrap" style={{fontSize:"1.2rem",marginBottom:"3px"}}>4.462</div>
            <div class="text-align-right" trans="rebate_total" style={{fontSize:"1.2rem"}}>
              Total
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "50px 0px" }}></section>
    </div>
  );
};

export default Team;
