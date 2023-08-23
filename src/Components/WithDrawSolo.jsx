import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import SoloImage from "./image.png";

const WithDrawSolo = () => {
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
            Withdraw
          </h3>
        </div>
      </div>
      {/*  */}
      <div
        className="main-card mb-3 card"
        style={{ marginTop: "60px", marginLeft: "15px", marginRight: "15px" }}
      >
        <div className="card-body p-2-1">
          <img
            src={SoloImage}
            alt="logo"
            className="app_set_recharge_item_logo"
          />
          <div className="app_set_recharge_item_name">SOLU</div>
          <ChevronRightIcon
            className="app_set_recharge_item_choose"
            onClick={() => navigate("/withdraw")}
          />
        </div>
      </div>

      {/*  */}
      <div
        className="main-card mb-3 card"
        style={{ marginTop: "30px", marginLeft: "15px", marginRight: "15px" }}
      >
        <div className="card-body">
          <div className="app_recharge_chain_name">Chain</div>
          <div className="app_recharge_chain_list">
            <div>
              <div className="app_recharge_chain_item active">TRC20</div>
            </div>
          </div>
          <div className="position-relative mb-3">
            <label for="exampleEmail" className="form-label-black">
              Address
            </label>
            <div className="input-group input-group-self">
              <input type="text" className="form-control bg-white" disabled />
              <button className="btn btn-link">
                <MenuIcon className="menuIcon" />
              </button>
            </div>
          </div>
          {/*  */}
          <div className="position-relative mb-3">
            <label for="exampleEmail" className="form-label-black">
              Withdrawal amount
            </label>
            <div className="input-group input-group-self">
              <input type="number" className="form-control bg-white" />
              <button className="btn btn-link" style={{ fontSize: "1.1rem" }}>
                All{" "}
              </button>
            </div>
          </div>
          <div className="position-relative fs-7 text-secondary">
            Available 1065 SOLU
          </div>
          <div className="position-relative fs-7 text-secondary">
            Minimum withdrawal amount 100 USDT
          </div>
          <div className="position-relative fs-7 text-secondary">
            Today's withdrawal limit 0.00/0.00 USDT
          </div>
          <div className="position-relative fs-7 text-secondary">
            Single maximum withdrawal amount 0.00 USDT
          </div>

          <div className="position-relative mb-3 mt-4">
            <label htmlFor="exampleEmail" className="form-label-black">
              handling fee
            </label>
            <div className="input-group input-group-self">
              <div className="position-relative fw-bold fs-5">0</div>
              <div className="position-absolute-right fs-6 text-secondary">
                SOLU
              </div>
            </div>
          </div>
          <div className="input-group input-group-self">
            <div className="position-relative fw-bold fs-5 text-secondary">
              actual credit
            </div>
            <div className="position-absolute-right fs-5">0</div>
          </div>

          <div className="d-grid mt-4">
            <button className="mb-2 me-2 btn btn-danger btn-lg">confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDrawSolo;
