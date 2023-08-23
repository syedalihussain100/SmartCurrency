import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewSolo.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SoloImage from "./image.png";

const ViewSolo = () => {
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
            SOLU
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
                  src={SoloImage}
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
                  1054
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-freeze">
                <div class="app-page-pannel-body-coinlist-item-vaild-name">
                  Freeze
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value">
                  10
                </div>
              </div>
              <div className="app-page-pannel-body-coinlist-item-exchange ">
                <div className="app-page-pannel-body-coinlist-item-vaild-name">
                  Converted (USDT)
                </div>
                <div className="app-page-pannel-body-coinlist-item-vaild-value">
                  527
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part here */}
      <div className="main-card mb-3 card" style={{ margin: "0px 10px" }}>
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -1000
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-27 19:41
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
                      +10
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking income
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
                      +1000
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -100
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
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
                      +10
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking income
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
                      +100
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:55
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>

          {/* part1 */}
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
                      +100
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-15 21:55
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part2 */}
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -200
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-31 16:24
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part3 */}
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -200
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-07-31 16:24
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part4 */}
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
                      +2
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking income
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-02 11:35
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part5 */}
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
                      +200
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-02 11:35
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part6 */}
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
                      +2
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking income
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-02 11:36
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part7 */}
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
                      +200
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-02 11:35
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part8 */}
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -500
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-04 22:02
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part9 */}
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
                      +50
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking income
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-06 13:57
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part10 */}
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
                      +500
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-info"
                      style={{ fontSize: "1rem" }}
                    >
                      Pledge
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-06 13:57
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* part11 */}
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -10
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Staking Freeze
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-07 18:30
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>

          {/* 12 */}
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
                    <span className="text-danger" style={{ fontSize: "1rem" }}>
                      -10
                    </span>
                  </div>
                  <div className="float-left width-30 text-align-center">
                    <span
                      className=" fw-bold text-white rounded p-1 text-nowrap bg-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      transfer
                    </span>
                  </div>
                  <div
                    className="float-left width-40 text-align-right"
                    style={{ fontSize: "1rem" }}
                  >
                    2023-08-07 18:34
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="app-myaccount-income-record-more">more records</div>
        </div>
      </div>
      {/*  */}
      <section style={{ padding: "50px 0px" }}></section>
    </>
  );
};

export default ViewSolo;
