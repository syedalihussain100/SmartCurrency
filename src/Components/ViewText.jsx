import React from "react";
import "./ViewText.css";
import { useNavigate } from "react-router-dom";
import TImage from "./t1.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ViewText = () => {
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
            USDT
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="content-body">
        <div className="main-card mb-3 card">
          <div className="card-body">
            <div className="app-page-pannel-body-coinlist-item2">
              <div className="app-page-pannel-body-coinlist-item-title">
                <img
                  src={TImage}
                  alt="logo"
                  className="app-page-pannel-body-coinlist-item-icon"
                />
                <span class="app-page-pannel-body-coinlist-item-name">
                  view
                </span>
              </div>
              <div className="app-page-pannel-body-coinlist-item-vaild">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Available
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value">
                  9.462
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-freeze">
                <div class="app-page-pannel-body-coinlist-item-vaild-name">
                  Freeze
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value">
                  0.00
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-exchange ">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Converted (USDT)
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value">
                  9.462
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part here */}
      <div className="main-card mb-3 card" style={{margin:"0px 10px"}}>
        <div className="card-body min-height-350">
          <h5 class="card-title">
            <span>financial records</span>
          </h5>
          {/* one */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                {/* One */}

                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +2
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:52
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +1.4
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:52
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +0.6
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:52
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +0.022
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:52
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* five */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +0.22
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:52
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* six */}
          <div className="app_record_list">
            <div className="main-card mb-1 card">
              <div
                className="card-body text-grey"
                style={{ padding: "0.3rem 1rem" }}
              >
                <div className="app_record_item">
                  <div
                    className="float-left width-30"
                    style={{ fontSize: "1rem" }}
                  >
                    Amount:
                  </div>
                  <div
                    className="float-left width-30 text-align-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Type
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    time:{" "}
                  </div>
                </div>

                <div className="app_record_item">
                  <div className="width-30 text-align-left float-left text-nowrap">
                    <span className="text-success" style={{ fontSize: "1rem" }}>
                      +0.22
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Rebate
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:55
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-myaccount-income-record-more">
            No more.
          </div>
        </div>
      </div>
      {/*  */}
      <section style={{padding:"50px 0px"}}>
      </section>
    </>
  );
};

export default ViewText;
