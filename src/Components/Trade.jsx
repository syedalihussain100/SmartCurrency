import React from "react";
import "./Trade.css";
import poolImg from "./pool_bg2.gif";
import Image from "./image.png";

const Trade = () => {
  return (
    <>
      <div className="navdata">
        <h3 style={{ fontWeight: "normal", fontSize: "25px" }}>Staking</h3>
      </div>
      <section className="mb-3 card my">
        <div className="card-body">
          <img
            src={poolImg}
            alt="image"
            style={{ width: "100%", paddingTop: "70px", paddingBottom: "10px" }}
          />

          <h2
            className="container"
            style={{ padding: "5px 0px", color: "#495057", fontSize: "35px" }}
          >
            Currently staking
          </h2>

          <div className="app_order_list">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom:"20px"
              }}
            >
              <p style={{color:"#646A70",fontSize:"28px"}}>Staking profit</p>
              <p style={{color:"#7C8186"}}>View all</p>
            </div>
            {/* One */}
            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  class="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  100%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">1</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  className="mb-2 me-2 btn-pill btn btn-pinkred btn-sm"
                  trans="receive"
                  style={{color:"white"}}
                >
                  charge
                </button>
              </div>
            </div>
            {/* two */}

            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  class="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  28%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">10</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  class="mb-2 me-2 btn-pill btn btn-secondary disabled btn-sm"
                  trans="received"
                >
                  Received
                </button>
              </div>
            </div>
            {/* three */}

            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  className="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  67.9%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">10</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  class="mb-2 me-2 btn-pill btn btn-secondary disabled btn-sm"
                  trans="received"
                >
                  Received
                </button>
              </div>
            </div>

            {/* four */}

            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  class="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  19.9%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">2</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  class="mb-2 me-2 btn-pill btn btn-secondary disabled btn-sm"
                  trans="received"
                >
                  Received
                </button>
              </div>
            </div>
            {/* five */}

            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  class="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  19.9%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">2</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  class="mb-2 me-2 btn-pill btn btn-secondary disabled btn-sm"
                  trans="received"
                >
                  Received
                </button>
              </div>
            </div>

            {/* six */}
            <div className="app_order_item">
              <img src={Image} alt="logo" className="app_order_item_img" />
              <div className="app_order_item_orderid text-nowrap">
                <span trans="app_order_orderid">Order id:</span>
                O1691404207658786
              </div>
              <div className="app_order_item_orderid_value">
                <span trans="mining_pool_order_name2">
                  Name: Test SOLU-1days
                </span>
              </div>
              <div className="app_order_item_phase">
                <span trans="app_order_progress" style={{ color: "#7C8186" }}>
                  Progress:{" "}
                </span>
                <span
                  className="app_order_item_phase_value"
                  style={{ color: "#C8CACC" }}
                >
                  100%
                </span>
              </div>
              <div className="app_order_item_income text-nowrap">
                <span
                  trans="mining_pool_revenue"
                  style={{ fontSize: "20px", color: "#7C8186" }}
                >
                  income:{" "}
                </span>
                <span className="app_order_item_income_value">50</span>
                <span className="app_order_item_income_cointype">SOLU</span>
              </div>
              <div className="app_order_item_button">
                <button
                  className="mb-2 me-2 btn-pill btn btn-secondary disabled btn-sm"
                  trans="received"
                >
                  Received
                </button>
              </div>
            </div>
          </div>
          {/* end List */}

          <div className="container" style={{marginTop:"5px",marginBottom:"50px"}}>
            <p style={{color:"#7C8186",fontSize:"20px"}}>No more.</p>
          </div>
        </div>
      </section>
      {/*  */}

      <section style={{padding:"50px 0px"}}>
      </section>
    </>
  );
};

export default Trade;
