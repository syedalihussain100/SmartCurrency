import React, { useState } from "react";
import "./Staking.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "./image.png";
import DocuImg from "./document.png";

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Staking = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="staking_bg">
      {/* First Part here  */}
      <div className="main-card myt">
        <div className="text-white card-body2 BG-color mb-3 card">
          <div className="miningpool-header-bg"></div>
          <div
            className="fw-bold line-height-35px"
            trans="mining_pool_total_deposit"
          >
            Total investment (converted)
          </div>
          <div className="line-height-35px">
            <span className="fs-1">0.00</span>{" "}
            <span className="fs-7 app_asset_header_value_usdt">USDT</span>
          </div>
          <div className="position-relative mt-3">
            <div className="width-33 float-left text-align-left">
              <div trans="mining_pool_income_yesterday">Yesterday</div>
              <div>0.00</div>
              <div className="fs-7">USDT</div>
            </div>
            <div className="width-33 float-left text-align-center">
              <div trans="mining_pool_income_maturity">Yield</div>
              <div>0.50</div>
              <div className="fs-7">USDT</div>
            </div>
            <div className="width-33 float-left text-align-right">
              <div trans="mining_pool_income_all">Total</div>
              <div>37.00</div>
              <div className="fs-7">USDT</div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Part here */}
      <div className="main-card mb-3 card my">
        <div className="card" >
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Tab label="Staking Lists" />
              <Tab label="SOLU" />
              <Tab label="DEFI" />
              <Tab label="In progress" />
              <Tab label="Completed" />
            </Tabs>
            <TabPanel value={value} index={0}>
              {/* one */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU stake - 45 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips4">High yield</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  50 ~ 1000000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>

              {/* two */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU novice - 15 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips1">Experientia</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  500 ~ 10000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>
              {/* three */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU max - 30 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips5">Premium Picks</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  100 ~ 10000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>
              {/* four */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  Test SOLU - 1 days{" "}
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips1">Experiential</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  10 ~ 1000 SOLU{" "}
                </span>
                <span className="app_mining_pannel_commission">
                  10% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.17%</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* one */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU stake - 45 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips4">High yield</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  50 ~ 1000000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>

              {/* two */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU novice - 15 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips1">Experientia</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  500 ~ 10000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>
              {/* three */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  SOLU max - 30 days
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips5">Premium Picks</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  100 ~ 10000 SOLU
                </span>
                <span className="app_mining_pannel_commission">
                  1% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.00%</span>
                </div>
              </div>
              {/* four */}
              <div className="section_container_1">
                <div className="app_mining_pannel_logo">
                  <img src={Image} alt="image" />
                </div>
                <span className="app_mining_pannel_name ">
                  Test SOLU - 1 days{" "}
                </span>
                <span className="app_mining_pannel_purchasing ">
                  <span trans="home_mining_purchase_limit">
                    Amount invested
                  </span>
                  <span class="bg-tips1">Experiential</span>
                </span>
                <span className="app_mining_pannel_purchasing_value">
                  10 ~ 1000 SOLU{" "}
                </span>
                <span className="app_mining_pannel_commission">
                  10% / <span trans="home_mining_per_day">day</span>
                </span>
                <button className="btn-pinkred app_mining_pannel_join">
                  Start
                </button>
                {/*  */}
                <div className="mb-3 app_mining_pannel_progress progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0.00014%" }}
                  ></div>
                  <span className="app_mining_pannel_progress_tag">0.17%</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}>
              <div className="norecord" style={{ margin: "80px 0px" }}>
                <img
                  src={DocuImg}
                  alt="DocuImg"
                  className="ic_list_emipty_image0"
                />
                <div class="icon-ic_list_emipty_text">No records...</div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div className="app_mining_pannel_list">
                {/* one */}
                <div className="app_mining_pannel">
                  <div
                    trans="mining_pool_order_name"
                    style={{ fontSize: "14px" }}
                  >
                    Order name: SOLU stake - 45 days
                  </div>
                  <div
                    trans="mining_pool_order_id"
                    style={{ fontSize: "14px" }}
                  >
                    Order ID: O1690458112866450
                  </div>
                  <div
                    trans="mining_pool_order_sum"
                    style={{ fontSize: "14px" }}
                  >
                    Order Amount: 1000{" "}
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 10{" "}
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 10{" "}
                  </div>
                  <div
                    class=""
                    trans="mining_pool_order_time_start"
                    style={{ fontSize: "14px" }}
                  >
                    Staking time: 2023-07-27 19:41:52
                  </div>
                  <div className="py-2">
                    <span trans="main_state" style={{ fontSize: "0.98rem" }}>
                      condition
                    </span>
                    :
                    <span className="fs-7 fw-bold text-white rounded p-1 bg-primary">
                      Completed
                    </span>
                  </div>
                </div>
                {/* two */}
                <div className="app_mining_pannel">
                  <div
                    trans="mining_pool_order_name"
                    style={{ fontSize: "14px" }}
                  >
                    SOLU novice - 15 days
                  </div>
                  <div
                    trans="mining_pool_order_id"
                    style={{ fontSize: "14px" }}
                  >
                    Order ID: O1690687907197536
                  </div>
                  <div
                    trans="mining_pool_order_sum"
                    style={{ fontSize: "14px" }}
                  >
                    Order Amount: 100 SOLU
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 10{" "}
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Staking time: 2023-07-30 11:31:47
                  </div>
                  <div
                    class=""
                    trans="mining_pool_order_time_start"
                    style={{ fontSize: "14px" }}
                  >
                    Expiration time: 2023-07-31 23:00
                  </div>
                  <div className="py-2">
                    <span trans="main_state" style={{ fontSize: "0.98rem" }}>
                      condition
                    </span>
                    :
                    <span className="fs-7 fw-bold text-white rounded p-1 bg-primary">
                      Completed
                    </span>
                  </div>
                </div>
                {/* three */}
                <div className="app_mining_pannel">
                  <div
                    trans="mining_pool_order_name"
                    style={{ fontSize: "14px" }}
                  >
                    Order name: SOLU stake - 45 days
                  </div>
                  <div
                    trans="mining_pool_order_id"
                    style={{ fontSize: "14px" }}
                  >
                    Order ID: O1690791859177833
                  </div>
                  <div
                    trans="mining_pool_order_sum"
                    style={{ fontSize: "14px" }}
                  >
                    Order Amount: 200 SOLU
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 2
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Staking time: 2023-07-31 16:24:19
                  </div>
                  <div
                    class=""
                    trans="mining_pool_order_time_start"
                    style={{ fontSize: "14px" }}
                  >
                    Expiration time: 2023-08-01 23:00
                  </div>
                  <div className="py-2">
                    <span trans="main_state" style={{ fontSize: "0.98rem" }}>
                      condition
                    </span>
                    :
                    <span className="fs-7 fw-bold text-white rounded p-1 bg-primary">
                      Completed
                    </span>
                  </div>
                </div>
                {/* four */}
                <div className="app_mining_pannel">
                  <div
                    trans="mining_pool_order_name"
                    style={{ fontSize: "14px" }}
                  >
                    Order name: SOLU stake - 45 days
                  </div>
                  <div
                    trans="mining_pool_order_id"
                    style={{ fontSize: "14px" }}
                  >
                    Order ID: O1690791859177833
                  </div>
                  <div
                    trans="mining_pool_order_sum"
                    style={{ fontSize: "14px" }}
                  >
                    Order Amount: 200 SOLU
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 2
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Staking time: 2023-07-31 16:24:19
                  </div>
                  <div
                    class=""
                    trans="mining_pool_order_time_start"
                    style={{ fontSize: "14px" }}
                  >
                    Expiration time: 2023-08-01 23:00
                  </div>
                  <div className="py-2">
                    <span trans="main_state" style={{ fontSize: "0.98rem" }}>
                      condition
                    </span>
                    :
                    <span className="fs-7 fw-bold text-white rounded p-1 bg-primary">
                      Completed
                    </span>
                  </div>
                </div>
                {/* five */}
                <div className="app_mining_pannel">
                  <div
                    trans="mining_pool_order_name"
                    style={{ fontSize: "14px" }}
                  >
                    Order name: SOLU stake - 45 days
                  </div>
                  <div
                    trans="mining_pool_order_id"
                    style={{ fontSize: "14px" }}
                  >
                    Order ID: O1690791859177833
                  </div>
                  <div
                    trans="mining_pool_order_sum"
                    style={{ fontSize: "14px" }}
                  >
                    Order Amount: 200 SOLU
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Yield at maturity: 2
                  </div>
                  <div
                    trans="mining_pool_order_income"
                    style={{ fontSize: "14px" }}
                  >
                    Staking time: 2023-07-31 16:24:19
                  </div>
                  <div
                    class=""
                    trans="mining_pool_order_time_start"
                    style={{ fontSize: "14px" }}
                  >
                    Expiration time: 2023-08-01 23:00
                  </div>
                  <div className="py-2">
                    <span trans="main_state" style={{ fontSize: "0.98rem" }}>
                      condition
                    </span>
                    :
                    <span className="fs-7 fw-bold text-white rounded p-1 bg-primary">
                      Completed
                    </span>
                  </div>
                </div>
                <p style={{textAlign:"center",color:"#999",marginTop:"4px"}}>No more.</p>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
